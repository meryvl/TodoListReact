import React, { useEffect, useState } from "react";
import Header from "./Header.jsx";
const TodoList =()=>{
    const [elements, setElements] = useState([]);                 
    const [inputValue, setInputValue] = useState("");       

    const getElement =()=>{
    return(
		fetch('https://assets.breatheco.de/apis/fake/todos/user/meryvl')
		.then((res) => res.json())
		.then((res) =>{
			console.log("Perfect!!",res)
            setElements(res)
		})
		.catch(eror =>console.log(eror))
	)
}
useEffect(getElement,[])

const putElement=(newList)=>{
    console.log(newList)
    return(
		fetch('https://assets.breatheco.de/apis/fake/todos/user/meryvl',{
            method:'PUT',
            body:JSON.stringify(newList),
            headers:{
                "Content-Type": "application/json",
            }
        })
		.then(() =>{
			getElement()
            
		})
		.catch(eror =>console.log(eror))
    )}



    const update = () => {
        if(inputValue !== ""){
          const newElement = {
                label: inputValue,
                done: false
          }
            setInputValue("");
            putElement([...elements, newElement])
          
       
        }  
           
            
    };
    

const handleDeleteElement =(label)=>{
const newListFilter = elements.filter((todo) => todo.label !== label);
putElement(newListFilter);
}
    
const onKeyPress = (event) => {
    if (event.key === "Enter") {
       update();
  }
    };







return (
    <>
<Header setInputValue={setInputValue} inputValue={inputValue} onKeyPress={onKeyPress} addElement={update}/>
<div className="container">
      <ul>
          {elements.map((todo, index) => {
              return <li className="d-flex justify-content-between align-items-center" key={index}>{todo.label}<span className="me-3">
                  <i className="fa-solid fa-xmark" onClick={()=> handleDeleteElement(todo.label)}></i></span></li>
          })}
      </ul>
      </div>
      
</>
)

}
export default TodoList