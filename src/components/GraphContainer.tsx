import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  Node as ReactFlowNode,
} from "react-flow-renderer";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../types";
import { moveNode } from "../redux/features/graphSlice";

import NodeCustomizationPanel from "./NodeCustomizationPanel";
import { useCallback, useState } from "react";
import UndoRedoControls from "./UndoRedoControls";

const GraphContainer: React.FC = () => {
  const dispatch = useDispatch();
  const graph = useSelector((state: State) => state.graph);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const onNodeDragStop = useCallback(
    (_event: React.MouseEvent, node: ReactFlowNode) => {
      dispatch(
        moveNode({
          id: node.id,
          position: { x: node.position.x, y: node.position.y },
        })
      );
    },
    [dispatch]
  );

  const onNodeClick = (_event: React.MouseEvent, element: ReactFlowNode) => {
    if (element?.id) {
      setSelectedNodeId(element.id);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <ReactFlow
        nodes={graph.nodes.map((node) => ({
          ...node,
          style: {
            fontSize: `${node.data.fontSize}px`,
            backgroundColor: node.data.color,
          },
        }))}
        edges={graph.edges}
        onNodeDragStop={onNodeDragStop}
        onNodeClick={onNodeClick}
        style={{ width: "75%", height: "500px" }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

      <NodeCustomizationPanel selectedNodeId={selectedNodeId} />
      <UndoRedoControls selectedNodeId={selectedNodeId} />
    </div>
  );
};

export default GraphContainer;
