import React,{useState} from "react";
function OnChangeDemo(){
    const [name,setName]= useState("Fikiri")
    function updateName(event){
        setName(event.target.value)
    }
    return(
        <>
         <div>
            <input type="text"  onChange={updateName} value={name} className="border-2 font-sans text-2xl px-2 rounded-2xl"/>
            <p className="text-4xl font-serif">Your name: {name}</p>
         </div>
        </>
    )
}
export default OnChangeDemo