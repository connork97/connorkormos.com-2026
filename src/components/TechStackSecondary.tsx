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
  group?: string;
};

type TechStackNode = Node<TechStackData>;

const nodeExtent: CoordinateExtent = [
  [-200, -225],
  [250, 250],
];

export default function TechStackSecondary() {
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
        style={{
          width: "40px",
          height: "40px",
          filter:
            techStackItem.name === "Flask" ||
            techStackItem.name === "SQLAlchemy"
              ? "brightness(0) invert(1)"
              : "none",
        }}
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
    {
      id: 'frontEndGroup',
      position: { x: -400, y: -200 },
      style: { width: 300, height: 225, backgroundColor: 'grey', borderRadius: '10px', opacity: 0.05 },
      data: {},
      type: 'group',
    },
    {
      id: "frontEndLabel",
      position: { x: 150, y: 50 },
      style: { width: 200 },
      data: {
        label: techStackSectionLabel("Front-End"),
      },
      parentId: 'frontEndGroup'
    },
    {
      id: "jQuery",
      position: { x: 100, y: 150 },
      data: {},
      parentId: 'frontEndGroup'
    },
    {
      id: "nextJs",
      position: { x: 200, y: 150 },
      data: {},
      parentId: 'frontEndGroup'
    },
    {
      id: 'backEndGroup',
      position: { x: 0, y: -200 },
      style: { width: 300, height: 225, backgroundColor: 'grey', borderRadius: '10px', opacity: 0.05 },
      data: {},
      type: 'group',
    },
    {
      id: "backEndAndDataLabel",
      position: { x: 150, y: 50 },
      style: { width: 200 },
      data: {
        label: techStackSectionLabel("Back-End & Data"),
      },
      type: "label",
      parentId: 'backEndGroup',
    },
    {
      id: "mySql",
      position: { x: 100, y: 150 },
      data: {},
      parentId: 'backEndGroup',
    },
    {
      id: "socketIo",
      position: { x: 200, y: 150 },
      data: {},
      parentId: 'backEndGroup',
    },
    {
      id: 'cloudAndDeploymentGroup',
      position: {x: -400, y: 100 },
      style: { width: 300, height: 225, backgroundColor: 'grey', borderRadius: '10px', opacity: 0.05 },
      data: {},
      type: 'group',
    },
    {
      id: "cloudAndDeploymentLabel",
      position: { x: 150, y: 50 },
      style: { width: 200 },
      data: {
        label: techStackSectionLabel("Cloud & Deployment"),
      },
      parentId: 'cloudAndDeploymentGroup',
      type: "label",
    },
    {
      id: "aws",
      position: { x: 50, y: 150 },
      data: {},
      parentId: 'cloudAndDeploymentGroup',
    },
    {
      id: "railway",
      position: { x: 150, y: 165 },
      data: {},
      parentId: 'cloudAndDeploymentGroup',
    },
    {
      id: "vercel",
      position: { x: 250, y: 150 },
      data: {},
      parentId: 'cloudAndDeploymentGroup',
    },
    {
      id: 'otherToolsGroup',
      position: {x: 0, y: 100 },
      style: { width: 300, height: 225, backgroundColor: 'grey', borderRadius: '10px', opacity: 0.05 },
      data: {},
      type: 'group',
    },
    {
      id: "otherToolsLabel",
      position: { x: 150, y: 50 },
      style: { width: 200 },
      data: {
        label: techStackSectionLabel("Other Tools"),
      },
      parentId: 'otherToolsGroup',
      type: "label",
    },
    {
      id: "git",
      position: { x: 50, y: 150 },
      data: {},
      parentId: 'otherToolsGroup',
    },
    {
      id: "ubuntu",
      position: { x: 150, y: 165 },
      data: {},
      parentId: 'otherToolsGroup',
    },
    {
      id: "vite",
      position: { x: 250, y: 150 },
      data: {},
      parentId: 'otherToolsGroup',
    },
  ];

  initialNodes.forEach((node) => {
    //  if (!node.style) {
    //    node.style = { width: 'auto', height: 'auto' };
    //  }
    if (node.type !== "group" && !node.data.label) {
      node.data.label = techStackNodeLabel(
        techStackImageSources[node.id as keyof typeof techStackImageSources],
      );
      node.data.yearsExperience =
        techStackImageSources[
          node.id as keyof typeof techStackImageSources
        ]?.yearsExperience;
      node.data.name =
        techStackImageSources[
          node.id as keyof typeof techStackImageSources
        ]?.name;
    }
    // if (!node.type) {
    //   node.type = "default";
    // }
  });

  const createEdge = (
    source: string,
    target: string,
    fromSide: "left" | "right" | "top" | "bottom",
    toSide: "left" | "right" | "top" | "bottom",
  ) => {
    return {
      id: `${source}-${target}`,
      source: source,
      sourceHandle: fromSide,
      target: target,
      targetHandle: toSide,
    };
  };
  const initialEdges: Edge[] = [
    createEdge("frontEndLabel", "jQuery", "bottom", "top"),
    createEdge("frontEndLabel", "nextJs", "bottom", "top"),
    createEdge("backEndAndDataLabel", "mySql", "bottom", "top"),
    createEdge("backEndAndDataLabel", "socketIo", "bottom", "top"),
    createEdge("cloudAndDeploymentLabel", "aws", "bottom", "top"),
    createEdge("cloudAndDeploymentLabel", "railway", "bottom", "top"),
    createEdge("cloudAndDeploymentLabel", "vercel", "bottom", "top"),
    createEdge("otherToolsLabel", "git", "bottom", "top"),
    createEdge("otherToolsLabel", "ubuntu", "bottom", "top"),
    createEdge("otherToolsLabel", "vite", "bottom", "top"),
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
    <div className="mainContentContainer">
      <h1 className="titleSecondary center">Additional Tech</h1>
      {/* <h1 style={{ margin: "auto", textAlign: "center" }}>Additional Tech</h1> */}
      {/* <div style={{ height: "35rem", width: "100%" }}> */}
      <div style={{height: 'clamp(10vh, 45rem, 90vh)', width: 'clamp(50%, 45rem, 90%)', margin: 'auto'}}>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeOrigin={[0.5, 0.5]}
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
          {hoveredTech?.data?.yearsExperience && (
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
