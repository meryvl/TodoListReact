import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
const TodoList =()=>{
    const [elements, setElements] = useState([]);                 
    const [inputValue, setInputValue] = useState("");       

const addElement = (todo) => {
        if(inputValue !== ""){
            const newList = {
                id: Math.random(),
                todo: todo
            }
            setElements([...elements, newList]);
        }   
            setInputValue("");    
    };

const handleDeleteElement =(id)=>{
const newListFilter = elements.filter((todo) => todo.id !== id);
setElements(newListFilter);
}
    
const onKeyPress = (event) => {
    if (event.key === "Enter") {
       addElement(inputValue);
  }
    };
    console.log(inputValue)
    console.log(elements)






return (
    <>
<Header setInputValue={setInputValue} inputValue={inputValue} onKeyPress={onKeyPress} addElement={addElement}/>
<div className="container">
      <ul>
          {elements.map((todo) => {
              return <li className="d-flex justify-content-between align-items-center" key={todo.id}>{todo.todo}<span className="me-3">
                  <i className="fa-solid fa-xmark" onClick={()=> handleDeleteElement(todo.id)}></i></span></li>
          })}
      </ul>
      </div>
      
</>
)

}
export default TodoList