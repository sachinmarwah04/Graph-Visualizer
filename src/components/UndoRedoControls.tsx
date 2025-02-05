import React from "react";
import { useDispatch } from "react-redux";
import { redo, undo } from "../redux/features/graphSlice";

const UndoRedoControls: React.FC<{ selectedNodeId: string | null }> = ({
  selectedNodeId,
}) => {
  const dispatch = useDispatch();

  const handleUndo = () => {
    if (selectedNodeId) {
      // Dispatch undo to revert the state
      dispatch(undo());
    }
  };

  const handleRedo = () => {
    if (selectedNodeId) {
      dispatch(redo());
    }
  };

  return (
    <div>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
};

export default UndoRedoControls;
