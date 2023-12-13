import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <StHeader>
      <h3>Todo List</h3>
    </StHeader>
  );
}

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  background: linear-gradient(#fff1f1, #fcdada, #ffcfcf);
  padding: 10px;
  color: #333;
  border-radius: 12px 12px 0 0;

  & h3 {
    font-weight: 700;
  }
`;
