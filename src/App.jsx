//import LoginPage from "./components/LoginPage";
//import UseStateComponents from "./components/useStateComponents";
//import Count from "./components/count.jsx"; 
//import OnChangeDemo from "./components/OnChangeDemo"
//import PaymentDemo  from "./components/paymentDemo"
//import ShippingRadio from "./components/RadioButtonOnChangeDemo"
//import ColorPicker from "./components/ColorPicker"
//import UpdateFunction from "./components/updaterFunction"
//import UpdateOnObject from "./components/updaterOnObject"
//import UpdaterArray from "./components/UpdaterFunctionOnArray"
import CreateAccount from "./components/CreateAccount.jsx"
import LoginPage from "./components/LoginPage.jsx"
import {Route, Routes} from "react-router-dom"
function App(){
  return(
    <Routes>
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}
export default App