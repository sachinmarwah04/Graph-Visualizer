import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GraphState } from "../../types";

const initialState: GraphState = {
  nodes: [
    {
      id: "1",
      position: { x: 100, y: 100 },
      data: { label: "Node 1", color: "#FF5733", fontSize: 16 },
    },
    {
      id: "2",
      position: { x: 200, y: 100 },
      data: { label: "Node 2", color: "#33FF57", fontSize: 16 },
    },
  ],
  edges: [{ id: "e1-2", source: "1", target: "2" }],
  undoRedoState: [
    {
      graph: {
        nodes: [
          {
            id: "1",
            position: { x: 100, y: 100 },
            data: { label: "Node 1", color: "#FF5733", fontSize: 16 },
          },
          {
            id: "2",
            position: { x: 200, y: 100 },
            data: { label: "Node 2", color: "#33FF57", fontSize: 16 },
          },
        ],
        edges: [{ id: "e1-2", source: "1", target: "2" }],
        undoRedoState: [],
        undoRedoIndex: 0,
      },
    },
  ],
  undoRedoIndex: 0,
};

const graphSlice = createSlice({
  name: "graph",
  initialState,
  reducers: {
    setNodeColor: (
      state,
      action: PayloadAction<{ id: string; color: string }>
    ) => {
      const { id, color } = action.payload;
      const node = state.nodes.find((node) => node.id === id);
      if (node) {
        node.data.color = color;

        if (state.undoRedoIndex < state.undoRedoState.length - 1) {
          state.undoRedoState = state.undoRedoState.slice(
            0,
            state.undoRedoIndex + 1
          );
        }
        state.undoRedoState.push({
          graph: {
            nodes: JSON.parse(JSON.stringify(state.nodes)), // Deep copy for undo state
            edges: state.edges,
            undoRedoState: [],
            undoRedoIndex: 0,
          },
        });
        state.undoRedoIndex = state.undoRedoState.length - 1;
      }
    },
    setFontSize: (
      state,
      action: PayloadAction<{ id: string; size: number }>
    ) => {
      const { id, size } = action.payload;
      const node = state.nodes.find((node) => node.id === id);
      if (node) {
        node.data.fontSize = size;

        if (state.undoRedoIndex < state.undoRedoState.length - 1) {
          state.undoRedoState = state.undoRedoState.slice(
            0,
            state.undoRedoIndex + 1
          );
        }
        state.undoRedoState.push({
          graph: {
            nodes: JSON.parse(JSON.stringify(state.nodes)), // Deep copy for undo state
            edges: state.edges,
            undoRedoState: [],
            undoRedoIndex: 0,
          },
        });
        state.undoRedoIndex = state.undoRedoState.length - 1;
      }
    },
    moveNode: (
      state,
      action: PayloadAction<{ id: string; position: { x: number; y: number } }>
    ) => {
      const { id, position } = action.payload;
      const node = state.nodes.find((node) => node.id === id);
      if (node) node.position = position;

      if (state.undoRedoIndex < state.undoRedoState.length - 1) {
        state.undoRedoState = state.undoRedoState.slice(
          0,
          state.undoRedoIndex + 1
        );
      }
      state.undoRedoState.push({
        graph: {
          nodes: JSON.parse(JSON.stringify(state.nodes)),
          edges: state.edges,
          undoRedoState: [],
          undoRedoIndex: 0,
        },
      });
      state.undoRedoIndex = state.undoRedoState.length - 1;
    },
    undo: (state) => {
      if (state.undoRedoState.length > 0 && state.undoRedoIndex > 0) {
        state.undoRedoIndex -= 1;
        const previousState = state.undoRedoState[state.undoRedoIndex];
        state.nodes = previousState.graph.nodes;
        state.edges = previousState.graph.edges;
      }
    },
    redo: (state) => {
      if (
        state.undoRedoState.length > 0 &&
        state.undoRedoIndex < state.undoRedoState.length - 1
      ) {
        state.undoRedoIndex += 1;
        const nextState = state.undoRedoState[state.undoRedoIndex];
        state.nodes = nextState.graph.nodes;
        state.edges = nextState.graph.edges;
      }
    },
  },
});

export const { setNodeColor, setFontSize, moveNode, undo, redo } =
  graphSlice.actions;
export default graphSlice.reducer;
