import { useState, useCallback } from "react";
import {
  ReactFlow,
  Handle,
  NodeToolbar,
  Position,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
  type CoordinateExtent,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { techStackImageSources } from "../lib/TechStackSources";

import "./TechStackFlow.css";

type TechStackData = {
  label?: React.ReactNode;
  yearsExperience?: number;
  name?: string;
};

type TechStackNode = Node<TechStackData>;

const nodeExtent: CoordinateExtent = [
  [-200, -225],
  [250, 250],
];

export function TechStackFlow() {
  const onNodesChange = useCallback(
    (changes: NodeChange<TechStackNode>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const techStackNodeLabel = (techStackItem: { name: string; src: string }) => (
    <div className="techStackNodeContent">
      <img
        src={techStackItem.src}
        alt={techStackItem.name}
        style={{
          width: "40px",
          height: "40px",
          filter:
            techStackItem.name === "Flask" ||
            techStackItem.name === "SQLAlchemy"
              ? "brightness(0) invert(1)"
              : "none",
        }}

        // style={{width: "40px", height: "40px" }}
      />
      <Handle id="top" type="source" position={Position.Top} />
      <Handle id="top" type="target" position={Position.Top} />
      <Handle id="bottom" type="source" position={Position.Bottom} />
      <Handle id="bottom" type="target" position={Position.Bottom} />
      <Handle id="left" type="source" position={Position.Left} />
      <Handle id="left" type="target" position={Position.Left} />
      <Handle id="right" type="source" position={Position.Right} />
      <Handle id="right" type="target" position={Position.Right} />
    </div>
  );
  {
  }
  const initialNodes: TechStackNode[] = [
    {
      id: "javaScript",
      position: { x: -175, y: -215 },
      data: {
        label: techStackNodeLabel(techStackImageSources.javaScript),
      },
    },
    {
      id: "typeScript",
      position: { x: -75, y: -200 },
      data: {
        label: techStackNodeLabel(techStackImageSources.typeScript),
      },
    },
    {
      id: "html",
      position: { x: 75, y: -200 },
      data: {
        label: techStackNodeLabel(techStackImageSources.html),
      },
    },
    {
      id: "css",
      position: { x: 175, y: -215 },
      data: {
        label: techStackNodeLabel(techStackImageSources.css),
      },
    },
    {
      id: "reactRouter",
      position: { x: -125, y: -100 },
      data: {
        label: techStackNodeLabel(techStackImageSources.reactRouter),
      },
    },
    {
      id: "react",
      position: { x: 0, y: -75 },
      data: {
        label: techStackNodeLabel(techStackImageSources.react),
      },
    },
    {
      id: "redux",
      position: { x: 125, y: -100 },
      data: {
        label: techStackNodeLabel(techStackImageSources.redux),
      },
    },
    {
      id: "python",
      position: { x: -125, y: 25 },
      data: {
        label: techStackNodeLabel(techStackImageSources.python),
      },
    },
    {
      id: "flask",
      position: { x: 0, y: 50 },
      data: {
        label: techStackNodeLabel(techStackImageSources.flask),
      },
    },
    {
      id: "sqlAlchemy",
      position: { x: 125, y: 25 },
      data: {
        label: techStackNodeLabel(techStackImageSources.sqlAlchemy),
      },
    },
    {
      id: "postgres",
      position: { x: 0, y: 175 },
      data: {},
    },
  ];

  initialNodes.forEach((node) => {
    node.data.label = techStackNodeLabel(
      techStackImageSources[node.id as keyof typeof techStackImageSources],
    );
    // if (!node.style) {
    //   node.style = { width: 45, height: 45 };
    // }
    node.data.yearsExperience =
      techStackImageSources[
        node.id as keyof typeof techStackImageSources
      ]?.yearsExperience;
    node.data.name =
      techStackImageSources[
        node.id as keyof typeof techStackImageSources
      ]?.name;
    node.type = "default";
  });

  const createEdge = (
    source: string,
    target: string,
    fromSide: "left" | "right" | "top" | "bottom",
    toSide: "left" | "right" | "top" | "bottom",
    label?: string,
  ) => {
    return {
      id: `${source}-${target}`,
      source: source,
      sourceHandle: fromSide,
      target: target,
      targetHandle: toSide,
      label: label,
    };
  };

  const initialEdges: Edge[] = [
    createEdge("javaScript", "typeScript", "right", "left"),
    createEdge("typeScript", "react", "right", "top"),
    createEdge("html", "react", "left", "top"),
    createEdge("css", "html", "left", "right"),
    createEdge("reactRouter", "react", "right", "left"),
    createEdge("redux", "react", "left", "right"),
    createEdge("react", "flask", "bottom", "top"),
    createEdge("python", "flask", "right", "left"),
    createEdge("sqlAlchemy", "flask", "left", "right"),
    createEdge("flask", "postgres", "bottom", "top"),
  ];

  initialEdges.forEach((edge) => {
    // edge.type = "smoothstep";
    edge.animated = true;
    //  edge.style = { stroke: "#000" };
  });
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [hoveredTech, setHoveredTech] = useState<TechStackNode | null>(null);

  return (
    <div>
      <h1 style={{ margin: "auto", textAlign: "center" }}>
        My Primary Tech Stack
      </h1>
      <div style={{ marginTop: "5rem", height: "45rem", width: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeMouseEnter={(_event, node) => setHoveredTech(node)}
          onNodeMouseLeave={() => setHoveredTech(null)}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          // nodeExtent={nodeExtent}
          fitView
          panOnDrag={false}
          panOnScroll={false}
          preventScrolling={false}
          autoPanOnNodeDrag={false}
          autoPanOnConnect={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          colorMode="system"
        >
          {hoveredTech && (
            <NodeToolbar
              nodeId={hoveredTech.id}
              isVisible
              position={Position.Bottom}
              offset={12}
            >
              <div className="techExperiencePopup" role="tooltip">
                <p>{hoveredTech.data.name}</p>
                <p>
                  {hoveredTech.data.yearsExperience}{" "}
                  {hoveredTech.data.yearsExperience === 1 ? "Year" : "Years"}{" "}
                  Experience
                </p>
              </div>
            </NodeToolbar>
          )}
          <div
            style={{ position: "absolute", bottom: 10, right: 10, zIndex: 4 }}
          >
            <button
              onClick={() => {
                setNodes(initialNodes);
                setEdges(initialEdges);
              }}
            >
              Reset Flow
            </button>
          </div>
          <Background />
          {/* <Controls /> */}
        </ReactFlow>
      </div>
    </div>
  );
}
