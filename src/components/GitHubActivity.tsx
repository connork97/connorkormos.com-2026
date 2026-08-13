import { useEffect, useState } from "react";

import "../App.css";

type GitHubData = {
  totalContributions: number;
  weeks: {
    contributionDays: {
      date: string;
      contributionCount: number;
    }[];
  }[];
};

export default function GitHubActivity() {
  const [gitHubData, setGitHubData] = useState<GitHubData>({
    totalContributions: 0,
    weeks: [],
  });

  const fetchGitHubContributions = async () => {
    const now = new Date();
    // const from = new Date();
    // from.setDate(from.getDate() - 180); // Fetch contributions for the last 180 days
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
    // console.log(data);
    setGitHubData(
      gitHubData.data.user.contributionsCollection.contributionCalendar,
    );
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

  return (
    <div className="gitHubActivity">
      <h2>GitHub Activity</h2>
      <p>Check out my recent contributions on GitHub!</p>
      <div className="gitHubCalendar">
        <div className="gitHubWeekDays">
          {/* <span>Sun</span> */}
          <span className="gitHubWeekDay">Mon</span>
          {/* <span>Tue</span> */}
          <span className="gitHubWeekDay">Wed</span>
          {/* <span>Thu</span> */}
          <span className="gitHubWeekDay">Fri</span>
          {/* <span>Sat</span> */}
        </div>
        {gitHubData.weeks ? (
          gitHubData.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="gitHubWeek" style={{justifyContent: `${weekIndex === 0 ? "flex-end" : "flex-start"}`}}>
              {/* <p>{weekIndex + 1}</p> */}
              {week.contributionDays.map((day, dayIndex) => {
                const contributionColors = [
                  "#ebedf0",
                  "#9be9a8",
                  "#40c463",
                  "#30a14e",
                  "#216e39",
                ]; 
                let color = "#ebedf0";
                const contributionCount = Math.min(day.contributionCount, 4);
                if (contributionCount >= 4) {
                  color = contributionColors[4];
                } else {
                  color = contributionColors[contributionCount];
                }

                return (
                  <div
                    key={dayIndex}
                    className="gitHubDay"
                    style={{ backgroundColor: color }}
                    // className={`day ${day.contributionCount > 0 ? "active" : ""}`}
                    title={`${day.date}: ${day.contributionCount} contributions`}
                  ></div>
                );
              })}
              {/* {week.contributionDays.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`day ${day.contributionCount > 0 ? "active" : ""}`}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                ></div>
              ))} */}
            </div>
          ))
        ) : (
          <p>Loading contributions...</p>
        )}
      </div>
      <div className="totalContributions">
        Total Contributions: {gitHubData.totalContributions || 0}
      </div>
      <div className="githubLink">
        <a
          href="https://github.com/connork97"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
}
