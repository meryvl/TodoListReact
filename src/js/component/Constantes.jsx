import React, { useState } from "react";
   
const [elements, setElements] = useState([]);                 
const [inputValue, setInputValue] = useState("");     
export const addElement = (todo) => {
        if(inputValue !== ""){
            const newList = {
                id: Math.random(),
                todo: todo
            }
            setElements([...elements, newList]);

        }
           
            setInputValue("");
        
    };
  
   

export const handleDeleteElement =(id)=>{
const newListFilter = elements.filter((todo) => todo.id !== id);
setElements(newListFilter);
}
    
export const onKeyPress = (event) => {
        if (event.key === "Enter") {
            addElement(inputValue);
        }
    };
    

