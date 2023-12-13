import React from "react";
import styled from "styled-components";

type Todos = {
  id: string;
  date: string;
  content: string;
  isDone: boolean;
};

type isDoneProps = {
  todos: Todos[];
  isDone: boolean;
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
};

export default function Todo({ todos, setTodos, isDone }: isDoneProps) {
  const handleClickBtn = (clickedTodo: Todos) => {
    const newTodos = todos.map((item) => {
      if (item.id === clickedTodo.id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };

  const handleDeleteBtn = (deleteTodo: Todos) => {
    const deleteTodos = todos.filter((item) => {
      return item.id !== deleteTodo.id;
    });
    setTodos(deleteTodos);
  };
  return (
    <StTodoWrapper>
      <StProgressWrapper>
        <h3>Todo</h3>
        {todos
          .filter((todo: any) => todo.isDone === isDone)
          .map((todo: any) => {
            return (
              <div key={todo.id} className="todo">
                <StContent>
                  <span>{todo.date}</span>
                  <p>{todo.content}</p>
                </StContent>
                <StButtonWrapper>
                  <button onClick={() => handleDeleteBtn(todo)}>삭제</button>
                  <button onClick={() => handleClickBtn(todo)}>
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </StButtonWrapper>
              </div>
            );
          })}
      </StProgressWrapper>
      <StProgressWrapper>
        <h3>Done</h3>
        {todos
          .filter((todo: any) => todo.isDone !== isDone)
          .map((todo: any) => {
            return (
              <div key={todo.id} className="todo">
                <StContent>
                  <p>{todo.content}</p>
                </StContent>
                <StButtonWrapper>
                  <button onClick={() => handleDeleteBtn(todo)}>삭제</button>
                  <button onClick={() => handleClickBtn(todo)}>
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </StButtonWrapper>
              </div>
            );
          })}
      </StProgressWrapper>
    </StTodoWrapper>
  );
}

const StTodoWrapper = styled.div`
  width: 100%;
  height: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StProgressWrapper = styled.div`
  width: 100%;
  height: 370px;
  background-color: white;
  opacity: 0.8;
  border: 1px solid #ffcfcf;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  & .todo {
    width: 400px;
    height: 60px;
    margin: 10px;
    background-color: #ffcfcf;
    border-radius: 12px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  & span {
    font-size: 12px;
    color: #333;
  }

  & p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const StButtonWrapper = styled.div`
  display: flex;
  margin-top: auto;
  gap: 6px;

  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 25px;
    border: none;
    border-radius: 10px;
    padding: 10px;
    background-color: #fff;
    font-weight: 700;
    font-size: 12px;

    &:hover {
      background-color: #fca8b6;
    }
  }
`;
