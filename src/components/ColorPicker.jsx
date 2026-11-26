import React,{useState} from "react";
function ColorPicker(){
    const [color,setColor] = useState("#653e3e")
    const handleColor = (event) => {
        setColor(event.target.value)
    }
    return(
        <>
            <div>
                <h1>Color Picker</h1>
                <div style={{backgroundColor:color}} className="w-52 h-50 text-2xl mx-5 rounded-2xl">
                    selected Color: {color}
                </div>
                <label htmlFor="">Select color</label>
                <input type="color" onChange={handleColor} className="w-50 min-h-20 rounded-2xl" />
            </div>
        </>
    )
}
export default ColorPicker