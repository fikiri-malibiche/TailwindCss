import React,{useState} from "react";
function UpdateOnObject(){
    const [car,setCar] = useState({year:2024,make:"Ford", model:"mustang",})
    function handleYear(event){
        setCar(c=>({...c,year:event.target.value}))
    }
     function handleMake(event){
        setCar(c=>({...c,make:event.target.value}))
    }
     function handleModel(event){
        setCar(c=>({...c,model:event.target.value}))
    }
    return(
        <>
            <div className="flex flex-col gap-2 mx-2">
                <p className="font-serif text-3xl ">your favorite car is : {car.year} {car.make} {car.model}</p>
                <input type="number" onChange={handleYear} value={car.year} className="border-2 rounded-3xl w-70 font-serif text-3xl px-3"/>
                <input type="text" onChange={handleMake} value={car.make} className="border-2 w-70 rounded-3xl font-serif text-3xl px-3" name="" id="" placeholder="Enter car model"  />
                <input type="text" onChange={handleModel} value={car.model} className="border-2 w-70 rounded-3xl font-serif text-3xl px-3" placeholder="Enter car model"/>
            </div>
        </>
    )
}
export default UpdateOnObject