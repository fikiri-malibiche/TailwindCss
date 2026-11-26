import React,{useState} from "react"
function PaymentDemo(){
    const [payment,setPayment] = useState()
    const handlePayment = (event) =>{
        setPayment(event.target.value)
    }
    return(
        <>
            <div className="bg-cyan-400 my-5 mx-5">
                <select name="" id="" onChange={handlePayment} className="border-2 rounded-2xl my-2">
                    <option value="">select option</option>
                    <option value="Visa">Visa</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="AirtelMoney">AirtelMoney</option>
                </select>
                <p>Your payment method is {payment}</p>
            </div>
        </>
    )
}
export default PaymentDemo