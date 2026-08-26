import { useEffect, useState } from "react";

import "../App.css";
import "./GitHub.css";

type GitHubData = {
  totalContributions: number;
  weeks: {
    contributionDays: {
      date: string;
      contributionCount: number;
    }[];
  }[];
};

export default function GitHub() {
  const [gitHubData, setGitHubData] = useState<GitHubData>({
    totalContributions: 0,
    weeks: [],
  });

  const fetchGitHubContributions = async () => {
    const now = new Date();
    const from = new Date(now.getFullYear(), 0, 1).toISOString();
    const to = now.toISOString();

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: JSON.stringify({
        query: `
          query($from: DateTime!, $to: DateTime!) {
            user(login: "connork97") {
              contributionsCollection(from: $from, to: $to) {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          from,
          to,
        },
      }),
    });

    const gitHubData = await response.json();
    setGitHubData(
      gitHubData.data.user.contributionsCollection.contributionCalendar,
    );
  };

  const parseUtcDate = (dateString: string) => {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day));
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchGitHubContributions();
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("GitHub Data Updated:", gitHubData);
  }, [gitHubData]);

  const gitHubWeeks = gitHubData.weeks.map((week, weekIndex) => {
    const monthsOfYear = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const firstDayOfWeek = week.contributionDays[0];
    const firstDayOfWeekDate = parseUtcDate(firstDayOfWeek.date);
    const firstDayOfWeekDay = firstDayOfWeekDate.getUTCDate();
    const firstDayOfWeekMonth = firstDayOfWeekDate.getUTCMonth();

    const previousWeek = gitHubData.weeks[weekIndex - 1];
    const previousWeekFirstDay = previousWeek?.contributionDays[0];
    const previousWeekMonth = previousWeekFirstDay
      ? parseUtcDate(previousWeekFirstDay.date).getUTCMonth()
      : null;

    let monthLabel = "";
    if (firstDayOfWeekDay <= 7 && previousWeekMonth !== firstDayOfWeekMonth) {
      monthLabel = monthsOfYear[firstDayOfWeekMonth];
    }
    return (
      <div
        key={weekIndex}
        className="gitHubContributionWeek"
        style={{
          justifyContent: `${weekIndex === 0 ? "flex-end" : "flex-start"}`,
        }}
      >
        <span
          style={{
            position: "relative",
            height: 0,
            width: 0,
            bottom: `${monthLabel !== "Jan" ? "1.5rem" : "70.5%"}`,
            // Bottom is imperfect, but very close for now
          }}
        >
          {monthLabel}
        </span>
        {week.contributionDays.map((day, dayIndex) => {
          const contributionColorsLight = [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39",
          ];
          const contributionColorsDark = [
            "#2121219d",
            "#0e4429",
            "#006d32",
            "#26a641",
            "#39d353",
          ];
          let color = "#ebedf0";
          const contributionCount = Math.min(day.contributionCount, 4);
          if (contributionCount >= 4) {
            color = contributionColorsDark[4];
          } else {
            color = contributionColorsDark[contributionCount];
          }

          return (
            <div
              key={dayIndex}
              className="gitHubContributionDay"
              style={{ backgroundColor: color }}
              title={`${day.date}: ${day.contributionCount} contributions`}
            />
          );
        })}
      </div>
    );
  });

  return (
    <div className="mainContentContainer">
      <div className="gitHubContentContainer">
        <h2 className="titleSecondary center">GitHub Activity</h2>
        <div className="gitHubCalendarWrapper">
          <div className="gitHubWeekDaysWrapper">
            <span>Mon</span>
            <span>Wed</span>
            <span>Fri</span>
          </div>
          {gitHubData.weeks ? gitHubWeeks : <p>Loading contributions...</p>}
        </div>
        <p className="textSecondary">
          Year to Date Contributions: {gitHubData.totalContributions || 0}
        </p>
        <span className="textSecondary">
          <a
            href="https://github.com/connork97"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </span>
      </div>
    </div>
  );
}
