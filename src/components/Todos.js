import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import {
  AddBtn,
  ContainerTodos,
  InputTodo,
} from "../styledComponent/AllStyleComponent";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  /*   console.log("props from store", props);*/

  const addTodo = () => {
    if (todo === "") {
      alert("is empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  return (
    <>
      <ContainerTodos>
        <InputTodo 
         type="text"
         placeholder="Type your Text"
         onChange={(e) => handleChange(e)} 
         value={todo} />

        <AddBtn onClick={() => addTodo()}>Add</AddBtn>
      </ContainerTodos>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
