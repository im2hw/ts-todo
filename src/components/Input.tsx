import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { Props, Todos } from "./Main";

export default function Input({ todos, isDone, setTodos, formatDate }: Props) {
  const { content, onChange, reset } = useInput();
  const handleSubmitButton = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todos = {
      id: uuid(),
      date: formatDate(new Date()),
      content,
      isDone,
    };

    setTodos([newTodo, ...todos]);

    // 초기화
    reset();
  };
  return (
    <StForm onSubmit={handleSubmitButton}>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        value={content}
        onChange={onChange}
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
