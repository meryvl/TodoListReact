import React, { useState } from "react";
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
    <div className="container">
    <div className="header">
      <h2>List Proyect React</h2>
      <input type="text" value={inputValue} placeholder="Add" onChange={(e)=>setInputValue(e.target.value)} onKeyDown={onKeyPress} />
      <button onClick={()=>addElement(inputValue)}>Add Element</button>
      </div>
      <ul>
          {elements.map((todo) => {
              return <li className="d-flex justify-content-between align-items-center" key={todo.id}>{todo.todo}<span className="me-3">
                  <i className="fa-solid fa-xmark" onClick={()=> handleDeleteElement(todo.id)}></i></span></li>
          })}
      </ul>
  </div>

)

}
export default TodoList