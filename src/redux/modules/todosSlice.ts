import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [
  {
    id: uuid(),
    date: new Date(),
    content: "내용1",
    isDone: false,
  },
];

const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      return [newTodo, ...state];
    },
    deleteTodo: (state, action) => {
      const deleteTodoId = action.payload;
      return state.filter((item) => item.id !== deleteTodoId.id);
    },
  },
});

export const { addTodo, deleteTodoId } = todosSlice.actions;
export default todosSlice.reducer;
