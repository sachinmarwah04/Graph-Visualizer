import React from "react";
import ColorPicker from "./ColorPicker";
import FontSizeControl from "./FontSizeControl";

interface NodeCustomizationPanelProps {
  selectedNodeId: string | null;
}

const NodeCustomizationPanel: React.FC<NodeCustomizationPanelProps> = ({
  selectedNodeId,
}) => {
  return (
    <div>
      {selectedNodeId ? (
        <>
          <h3>Customize Node {selectedNodeId}</h3>
          <ColorPicker selectedNodeId={selectedNodeId} />
          <FontSizeControl selectedNodeId={selectedNodeId} />
        </>
      ) : (
        <p>Select a node to customize</p>
      )}
    </div>
  );
};

export default NodeCustomizationPanel;
