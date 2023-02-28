import React, { useState } from "react";
import { connect } from "react-redux";

import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/reducer";
import {
  BtnActiveTodos,
  BtnCompleteTodos,
  BtnDisplayTodos,
  DisplayTodosContainer,
} from "../styledComponent/AllStyleComponent";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const DisplayTodos = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <>
      <DisplayTodosContainer>
        <BtnDisplayTodos>
          <BtnActiveTodos onClick={() => setSort("active")}>Active</BtnActiveTodos>
          <BtnCompleteTodos onClick={() => setSort("completed")}>completed</BtnCompleteTodos>
        </BtnDisplayTodos>
        <ul>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/*for complete items */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
        </ul>
      </DisplayTodosContainer>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
