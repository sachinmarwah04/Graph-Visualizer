import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFontSize } from "../redux/features/graphSlice";
import { RootState } from "../redux/store/store";

const FontSizeControl: React.FC<{ selectedNodeId: string | null }> = ({
  selectedNodeId,
}) => {
  const dispatch = useDispatch();

  const nodes = useSelector((state: RootState) => state.graph.nodes);
  const selectedNode = selectedNodeId
    ? nodes.find((node) => node.id === selectedNodeId)
    : null;

  const handleFontSizeChange = (size: number) => {
    if (selectedNodeId) {
      dispatch(setFontSize({ id: selectedNodeId, size }));
    }
  };

  return (
    <select
      value={selectedNode ? selectedNode.data.fontSize : 16}
      onChange={(e) => handleFontSizeChange(Number(e.target.value))}
    >
      {[12, 14, 16, 18, 20, 22, 24].map((size) => (
        <option key={size} value={size}>
          {size}px
        </option>
      ))}
    </select>
  );
};

export default FontSizeControl;
