import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNodeColor } from "../redux/features/graphSlice";
import { RootState } from "../redux/store/store";
import { Node } from "../types";

const ColorPicker: React.FC<{ selectedNodeId: string | null }> = ({
  selectedNodeId,
}) => {
  const dispatch = useDispatch();

  const nodes = useSelector((state: RootState) => state.graph.nodes);

  const selectedNode = selectedNodeId
    ? nodes.find((node: Node) => node.id === selectedNodeId)
    : null;

  const handleColorChange = (color: string) => {
    if (selectedNodeId) {
      dispatch(setNodeColor({ id: selectedNodeId, color }));
    }
  };

  return (
    <div>
      <input
        type="color"
        value={selectedNode ? selectedNode.data.color : "#000000"}
        onChange={(e) => handleColorChange(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
