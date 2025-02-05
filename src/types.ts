export interface Node {
  id: string;
  position: { x: number; y: number };
  data: {
    label: string;
    color: string;
    fontSize: number;
  };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface GraphState {
  nodes: Node[];
  edges: Edge[];
  undoRedoState: State[];
  undoRedoIndex: number;
}

export interface State {
  graph: GraphState;
}

export interface Action {
  type: string;
  payload: unknown;
}

export interface Node {
  id: string;
  data: {
    label: string;
    color: string;
    fontSize: number;
  };
  position: { x: number; y: number };
}
