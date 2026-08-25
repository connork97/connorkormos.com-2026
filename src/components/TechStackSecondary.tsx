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
  label: React.ReactNode;
  yearsExperience?: number;
  name?: string;
};

type TechStackNode = Node<TechStackData>;

const nodeExtent: CoordinateExtent = [
  [-200, -225],
  [250, 250],
];

export function TechStackSecondary() {
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

  const techStackSectionLabel = (sectionName: string) => (
    <div>
      <h3 style={{ margin: 0 }}>{sectionName}</h3>
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

  const techStackNodeLabel = (techStackItem: { name: string; src: string }) => (
    <div className="techStackNodeContent">
      <img
        src={techStackItem.src}
        alt={techStackItem.name}
        style={
          techStackItem.name === "Flask" || techStackItem.name === "SQLAlchemy"
            ? { filter: "brightness(0) invert(1)" }
            : {}
        }
        //   style={{width: "40px", height: "40px" }}
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
    /* <p>{techStackItem.name}</p> */
  }
  const initialNodes: TechStackNode[] = [
    //  {
    //    id: "techStackLabel",
    //    position: { x: -75, y: -200 },
    //    style: { width: 200 },
    //    data: {
    //      label: (
    //        <div>
    //          <h3 style={{ margin: 0 }}>My Go To Tech Stack</h3>
    //          <Handle id="top" type="source" position={Position.Top} />
    //          <Handle id="top" type="target" position={Position.Top} />
    //          <Handle id="bottom" type="source" position={Position.Bottom} />
    //          <Handle id="bottom" type="target" position={Position.Bottom} />
    //          <Handle id="left" type="source" position={Position.Left} />
    //          <Handle id="left" type="target" position={Position.Left} />
    //          <Handle id="right" type="source" position={Position.Right} />
    //          <Handle id="right" type="target" position={Position.Right} />
    //        </div>
    //      ),
    //    },
    //  },
    {
      id: "additionalFrontEndLabel",
      position: { x: -200, y: -100 },
      style: { width: 200 },
      data: {
        label: techStackSectionLabel("Front-End"),
      },
      type: "label",
    },
    {
      id: "jQuery",
      position: { x: -175, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.jQuery),
      },
    },
    {
      id: "nextJs",
      position: { x: -75, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.nextJs),
      },
    },
    {
      id: "additionalBackEndAndDataLabel",
      position: { x: 50, y: -100 },
      style: { width: 200 },
      data: {
        label: techStackSectionLabel("Back-End & Data"),
      },
      type: "label",
    },
    {
      id: "mySQL",
      position: { x: 75, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.mySQL),
      },
    },
    {
      id: "socketIo",
      position: { x: 175, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.socketIo),
      },
    },
    {
      id: "cloudAndDeploymentLabel",
      position: { x: 300, y: -100 },
      style: { width: 200 },
      data: {
        label: techStackSectionLabel("Cloud & Deployment"),
      },
      type: "label",
    },
    {
      id: "aws",
      position: { x: 300, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.aws),
      },
    },
    {
      id: "railway",
      position: { x: 400, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.railway),
      },
    },
    {
      id: "vercel",
      position: { x: 500, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.vercel),
      },
    },
    {
      id: "otherToolsLabel",
      position: { x: 600, y: -100 },
      style: { width: 200 },
      data: {
        label: techStackSectionLabel("Other Tools"),
      },
      type: "label",
    },
    {
      id: "git",
      position: { x: 600, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.git),
      },
    },
    {
      id: "ubuntu",
      position: { x: 700, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.ubuntu),
      },
    },
  ];

  initialNodes.forEach((node) => {
    if (!node.style) {
      node.style = { width: 45, height: 45 };
    }
    if (node.type !== "label") {
      node.data.yearsExperience =
        techStackImageSources[
          node.id as keyof typeof techStackImageSources
        ]?.yearsExperience;
    }
    node.data.name =
      techStackImageSources[
        node.id as keyof typeof techStackImageSources
      ]?.name;
    // if (!node.type) {
    //   node.type = "default";
    // }
  });
  const initialEdges: Edge[] = [
   
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
      <h1 style={{ margin: "auto", textAlign: "center" }}>Additional Tech</h1>
      <div style={{ marginTop: "5rem", height: "25rem", width: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodeMouseEnter={(_event, node) => {
            if (node.type !== "label") {
              setHoveredTech(node);
            }
          }}
          onNodeMouseLeave={() => setHoveredTech(null)}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          //  nodeExtent={nodeExtent}
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
