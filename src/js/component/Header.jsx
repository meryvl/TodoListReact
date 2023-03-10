import React from "react"

const Header=({setInputValue , inputValue, onKeyPress, addElement})=>{
return(
<>

<div className="container">
    <div className="header">
      <h2>List Proyect React</h2>
      <input type="text" value={inputValue} placeholder="Add" onChange={(e)=>setInputValue(e.target.value)} onKeyDown={onKeyPress} />
      <button onClick={()=>addElement(inputValue)}>Add Element</button>
    </div>
</div>
</>
)

}

export default Header