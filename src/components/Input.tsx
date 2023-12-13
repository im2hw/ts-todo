import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { useState } from "react";

type Todos = {
  id: string;
  date: string;
  content: string;
  isDone: boolean;
};
type InputProps = {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>; // 검색해볼것
  isDone: boolean;
  formatDate: (date: Date) => string;
};

export default function Input({
  todos,
  setTodos,
  isDone,
  formatDate,
}: InputProps) {
  const [content, setContent] = useState<string>("");
  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const handleSubmitButton = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodos: Todos = {
      id: uuid(),
      date: formatDate(new Date()),
      content,
      isDone,
    };

    setTodos([newTodos, ...todos]);

    setContent("");
  };
  return (
    <StForm onSubmit={handleSubmitButton}>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        value={content}
        onChange={handleChangeContent}
      />
      <StButton type="submit">등록</StButton>
    </StForm>
  );
}

const StForm = styled.form`
  background-color: #ffcfcf;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  gap: 12px;
  padding: 10px;

  & input {
    width: 400px;
    height: 30px;
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
    outline: none;
  }
`;

const StButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  outline: none;
  background-color: #f991a2;
`;
