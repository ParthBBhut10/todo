import React from 'react';
import { TodoItem } from './TodoItem';
//import PropTypes from 'prop-types';

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin : "40px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h1 className='text'>Todos List</h1>
      {props.todos.length === 0 ? "No Todos" :
        props.todos.map((todo) => {
          return (
          <>
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          <hr/></>
          )
        })}



    </div>
  )
}
