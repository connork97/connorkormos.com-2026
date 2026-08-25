import { useState, useCallback } from "react";
import {
  ReactFlow,
  Handle,
  Position,
  applyEdgeChanges,
  applyNodeChanges,
  type CoordinateExtent,
  type Edge,
  type EdgeChange,
  type Node,
  type NodeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import "./TechStackFlow.css";

// const nodeExtent: CoordinateExtent = [
//   [-200, -175],
//   [250, 500],
// ];

export function TechStackFlow() {
  const techStackImageSources = {
    javaScript: {
      name: "JavaScript",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    typeScript: {
      name: "TypeScript",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    html: {
      name: "HTML",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    css: {
      name: "CSS",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    react: {
      name: "React",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    redux: {
      name: "Redux Toolkit",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    },
    reactRouter: {
      name: "React Router",
      type: "frontEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
    },
    jQuery: {
      name: "jQuery",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-plain.svg",
    },
    python: {
      name: "Python",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    flask: {
      name: "Flask",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    },
    postgres: {
      name: "PostgreSQL",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    mySQL: {
      name: "MySQL",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    aws: {
      name: "AWS",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    sqlAlchemy: {
      name: "SQLAlchemy",
      type: "backEnd",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
    },
    git: {
      name: "Git",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    gitHub: {
      name: "GitHub",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    vsCode: {
      name: "VS Code",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    },
    ubuntu: {
      name: "Ubuntu",
      type: "other",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
    },
  };

  const onNodesChange = useCallback(
    (changes: NodeChange<Node>[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<Edge>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const techStackNodeLabel = (techStackItem: { name: string; src: string }) => (
    <div>
      <img
        src={techStackItem.src}
        alt={techStackItem.name}
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
  const initialNodes: Node[] = [
    {
      id: "javaScript",
      position: { x: -200, y: -100 },
      data: {
        label: techStackNodeLabel(techStackImageSources.javaScript),
      },
      type: "default",
    },
    {
      id: "typeScript",
      position: { x: -100, y: -100 },
      data: {
        label: techStackNodeLabel(techStackImageSources.typeScript),
      },
      type: "default",
    },
   //  {
   //    id: "frontEnd",
   //    position: { x: -25, y: 0 },
   //    style: { width: 100},
   //    data: {
   //      label: (
   //        <div>
   //          Front-End
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
   //    type: "default",
   //  },
    {
      id: "html",
      position: { x: 100, y: -100 },
      data: {
        label: techStackNodeLabel(techStackImageSources.html),
      },
    },
    {
      id: "css",
      position: { x: 200, y: -100 },
      data: {
        label: techStackNodeLabel(techStackImageSources.css),
      },
    },
    {
      id: 'reactRouter',
      position: { x: -125, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.reactRouter),
      },
    },
    {
      id: "react",
      position: { x: 0, y: 25 },
      data: {
        label: techStackNodeLabel(techStackImageSources.react),
      },
    },
    {
      id: "redux",
      position: { x: 125, y: 0 },
      data: {
        label: techStackNodeLabel(techStackImageSources.redux),
      },
    },
    {
      id: 'python',
      position: { x: -125, y: 150 },
      data: {
        label: techStackNodeLabel(techStackImageSources.python),
      },
    },
    {
      id: 'flask',
      position: { x: 0, y: 175 },
      data: {
        label: techStackNodeLabel(techStackImageSources.flask),
      },
    },
    {
      id: 'sqlAlchemy',
      position: { x: 125, y: 150 },
      data: {
        label: techStackNodeLabel(techStackImageSources.sqlAlchemy),
      },
    },
    {
      id: 'postgres',
      position: { x: 0, y: 300 },
      data: {
        label: techStackNodeLabel(techStackImageSources.postgres),
      },
    },
  ];

  initialNodes.forEach((node) => {
   node.style = { width: 50, height: 50 };
  });
  const initialEdges: Edge[] = [
    {
      id: "javaScript-typeScript",
      source: "javaScript",
      sourceHandle: "right",
      target: "typeScript",
      targetHandle: "left",
      // label: "",
    },
    {
      id: "typeScript-react",
      source: "typeScript",
      sourceHandle: "right",
      target: "react",
      targetHandle: "top",
    },   //  {
   //    id: "typeScript-frontEnd",
   //    source: "typeScript",
   //    sourceHandle: "right",
   //    target: "frontEnd",
   //    targetHandle: "top",
   //  },
    {
      id: "html-css",
      source: "css",
      sourceHandle: "left",
      target: "html",
      targetHandle: "right",
    },
    {
      id: "html-react",
      source: "html",
      sourceHandle: 'left',
      target: "react",
      targetHandle: 'top',
    },   //  {
   //    id: "html-frontEnd",
   //    source: "html",
   //    sourceHandle: 'left',
   //    target: "frontEnd",
   //    targetHandle: 'top',
   //  },
   //  {
   //    id: 'frontEnd-react',
   //    source: 'frontEnd',
   //    sourceHandle: 'bottom',
   //    target: 'react',
   //    targetHandle: 'top',
   //  },
    {
      id: 'reactRouter-react',
      source: 'reactRouter',
      sourceHandle: 'right',
      target: 'react',
      targetHandle: 'left',
    },
    {
      id: 'react-redux',
      source: 'redux',
      sourceHandle: 'left',
      target: 'react',
      targetHandle: 'right',
    },
    {
      id: 'react-flask',
      source: 'react',
      sourceHandle: 'bottom',
      target: 'flask',
      targetHandle: 'top',
    },
    {
      id: 'python-flask',
      source: 'python',
      sourceHandle: 'right',
      target: 'flask',
      targetHandle: 'left',
    },
    {
      id: 'sqlAlchemy-flask',
      source: 'sqlAlchemy',
      sourceHandle: 'left',
      target: 'flask',
      targetHandle: 'right',
    },
    {
      id: 'flask-postgres',
      source: 'flask',
      sourceHandle: 'bottom',
      target: 'postgres',
      targetHandle: 'top',
    },
  ];

  initialEdges.forEach((edge) => {
   // edge.type = "smoothstep";
    edge.animated = true;
   //  edge.style = { stroke: "#000" };
  });
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  return (
   <div>
      <h1 style={{margin: 'auto', textAlign: 'center'}}>My Primary Tech Stack</h1>
    <div style={{ marginTop: '5rem', height: "50rem", width: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      //   nodeExtent={nodeExtent}
        fitView
        panOnDrag={false}
        panOnScroll={false}
        autoPanOnNodeDrag={false}
        autoPanOnConnect={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        colorMode="system"
      >
        {/* <Background /> */}
        {/* <Controls /> */}
      </ReactFlow>
    </div>
   </div>
  );
}
