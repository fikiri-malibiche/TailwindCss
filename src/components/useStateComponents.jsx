import React,{useState} from "react";
function UseStateComponents() {
    const [name, setName] = useState();
    const updatName = () => {
        setName("John Doe");
    }
    return (
        <>
         <p>Name: {name} </p>
         <button onClick={updatName} className="bg-blue-500 text-white px-4 py-2 rounded">
            Set Name
         </button>
        </>
    )
}
export default UseStateComponents;