import React from "react";
import NodeCustomizationPanel from "./components/NodeCustomizationPanel";

import GraphContainer from "./components/GraphContainer";

const App: React.FC = () => {
  return (
    <div>
      <h1>Interactive Graph with Undo/Redo</h1>
      <GraphContainer />
      <NodeCustomizationPanel selectedNodeId={null} />
    </div>
  );
};

export default App;
