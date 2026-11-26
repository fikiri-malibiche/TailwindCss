import React,{useState} from 'react'
function ShippingRadio(){
    const [shipping,setShipping] = useState("Delivery")
    const handleShipping = (event) =>{
        setShipping(event.target.value)
    }
    return(
        <>
            <div>
                <input type="radio" value={"Pick Up"} onChange={handleShipping} checked={shipping==="Pick Up"} />
                <label htmlFor="" className='text-2xl font-serif'>Pick Up</label><br></br>
                <input type="radio" value={"Delivery"} onChange={handleShipping} checked={shipping==="Delivery"}/>
                <label htmlFor="" className='text-2xl font-serif'>Delivery</label>
                <p className='text-3xl font-serif'>Shipping:{shipping}</p>
            </div>
        </>
    )
}
export default ShippingRadio