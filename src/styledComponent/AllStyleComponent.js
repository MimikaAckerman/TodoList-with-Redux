import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import cover from "../assets/img/cover.jpg";

export const GlobalStyle = createGlobalStyle`
body{
    background-image: url(${cover});
}
`;

export const ContainerTodos = styled.div`
  margin-left: 1rem;
  margin-top: 5rem;
  background-color:#253045;
  border-radius: 40px;
  height: 25rem;
  width: 35rem;
`;

//style for Todos
export const InputTodo = styled.input`
  width: 20rem;
  height: 40px;
  padding: 10px;
  transition: 0.2s linear;
  border: 2.5px solid black;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 1rem;
  margin-left: 2rem;

  &:focus {
    outline: none;
    border: 0.5px solid black;
    box-shadow: -5px -5px 0px black;
  }
`;

export const AddBtn = styled.button`
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
  margin-left: 28rem;
  margin-top: -3.5rem;

  &:hover {
    transform: translateY(-0.33em);
  }
  &:active {
    transform: translateY(0);
  }
`;

//DISPLAY TODOS STYLE
export const DisplayTodosContainer = styled.div`
  margin-top: -18rem;
`;

export const BtnDisplayTodos = styled.div``;

export const BtnActiveTodos = styled.button`
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
  margin-left: 4rem;

  &:hover {
    transform: translateY(-0.33em);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const BtnCompleteTodos = styled.button`
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 17px;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
  margin-left: 13rem;
  margin-top: -3rem;

  &:hover {
    transform: translateY(-0.33em);
  }
  &:active {
    transform: translateY(0);
  }
`;

export const ContainerTodoItem = styled.li`
  list-style: none;
`;

//TODOITEM STYLED
export const TextareaItem = styled.textarea`
 max-width: 200px;
  min-height: 40px;
  padding: 10px;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  background: #e8e8e8;
 
  border: none;
  border-radius: 10px;
  transition: all .5s;
  resize: none ;

  &:focus{
    background: #e8e8e8;

  }
`;
export const BtnEdit = styled.button``;

export const BtnComplete = styled.button``;
export const BtnDelete = styled.button``;

export const SpanDone = styled.span``;
