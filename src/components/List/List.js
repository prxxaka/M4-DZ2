import React from 'react'
import ToDoCard from "../ToDoCard/ToDoCard";

const List = ({ list}) => {
  return (
    <>
      {list.map((todo, id) => <ToDoCard todo={todo}/>)}
    </>
  )
}

export default List