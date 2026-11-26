import React,{useState} from "react";
function UpdateFunction(){
    const [count,setCount] = useState(0)
    function incrementCount(){
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    return(
        <>
            <div>
                <p className="font-serif text-2xl">Count: {count}</p>
                <button className="bg-blue-950 text-white py-2 px-2 ml-1 font-serif" onClick={incrementCount}>Increment</button>
            </div>
        </>
    )
}
export default UpdateFunction