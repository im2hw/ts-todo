import styled from "styled-components";
import Input from "./Input";
import { useState } from "react";
import uuid from "react-uuid";
import Todo from "./Todo";

type Todos = {
  id: string;
  date: string;
  content: string;
  isDone: boolean;
};

type ParentProps = {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>; // 검색해볼것
  isDone: boolean;
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minute}`;
};

export default function Main() {
  const [todos, setTodos] = useState<Todos[]>([
    {
      id: uuid(),
      date: formatDate(new Date()),
      content: "내용1",
      isDone: false,
    },
  ]);

  const [isDone, setIsDone] = useState<boolean>(false);
  return (
    <StMain>
      <Input
        todos={todos}
        setTodos={setTodos}
        isDone={isDone}
        formatDate={formatDate}
      />
      <Todo todos={todos} isDone={isDone} setTodos={setTodos} />
    </StMain>
  );
}

const StMain = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 0 0 12px 12px;
`;
