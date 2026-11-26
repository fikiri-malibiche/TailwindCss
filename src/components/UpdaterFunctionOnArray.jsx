import React,{useState} from 'react'
function UpdaterArray(){
    const [foods,setFoods] = useState(["Apple","Banana","Orange"])
    function handleFoodChange(){
        const newFood = document.getElementById("foodInput").value
        document.getElementById("foodInput").value = ""
        setFoods(f=>[...f,newFood])
    }
    function handleRemove(index){
        setFoods(foods.filter((_,i) => i != index))
    }
    return(
        <div className='flex flex-col items-center'>
            <h2 className='font-serif text-3xl'>List of foods</h2>
            <ul>
                {foods.map((food,index)=> <li key={index} onClick={()=>handleRemove(index)}>{food}</li>)}
            </ul>
            <input type="text" name="" id="foodInput" placeholder='Enter food' className='border px-2 rounded-2xl text-2xl outline-0' />
            <button className='bg-blue-900 text-2xl text-white my-2 p-2 rounded-2xl' onClick={handleFoodChange}>Add food</button>
        </div>
    )
}
export default UpdaterArray