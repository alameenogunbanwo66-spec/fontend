import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router"
import Logo from "../assets/GadgetHub Logo.png"
import paymentVector from "../assets/onlinePaymentVector.png"
import { FaGreaterThan } from "react-icons/fa";
import CustomerDetailsForm from "../Components/CheckoutPage Components/CustomerDetailsForm"
import DeliveryDetails from "../Components/CheckoutPage Components/DeliveryDetails"
import PaymentMethod from "../Components/CheckoutPage Components/PaymentMethod"
import OrderSummary from "../Components/CheckoutPage Components/OrderSummary"
import { CartContext } from "../Context/ShoppingCartContext"
import { toast } from "react-toastify"
import Footer from "../Components/Footer"
import OrderReceived from "../Components/CheckoutPage Components/OrderReceived"

export default function CheckoutPage() {
  const [ showModal, setShowModal ]= useState(false)
  const { cart } = useContext(CartContext)
  const [orderData, setOrderData] = useState({
    customer : {},
    deliveryMethod : "",
    paymentMethod: "",
  })

  const handleConfirmOrder = async () => {
    const payload = {
      ...orderData,
      items : cart
    }
    console.log("Final order :", payload);
    toast.success("Order Confirmed")
     setShowModal(true);
  }

  return (
    <div className="flex flex-col w-full">
           {showModal && <OrderReceived showModal={showModal} setShowModal={setShowModal} />}
         <div className="hidden lg:flex bg-[#191C1F] text-white">
           <div className="flex container mx-auto items-center justify-between w-full h-[7vh] px-5">
             <h1><span className="text-[#ACACAC]">Mon-Sat:</span> 9:00 AM - 5:30 PM</h1>
            <h1 className="text-[#ACACAC]">Visit our showroom in 12 Street Address City, Lagos</h1>
            <h1>Call Us: (+234) 01234 5678</h1>
           </div>
        </div>

        <div className="flex justify-between px-3 py-3 container mx-auto">
            <Link to="/"><img src={Logo} alt="" /></Link>

            <div className="flex items-center gap-2">
                <img className="w-4 h-4 lg:w-6 lg:h-6" src={paymentVector} alt="" />
                <p className="text-[14px] lg:text-[18px]">secure & safe payment</p>
            </div>
            
        </div>

        <div className="py-2 px-5 container mx-auto">
        <h1 className="flex items-center gap-1 text-[16px] text-[#5F6C72]">
                  <Link to="/">Home</Link>
                    <span className="text-[12px] text-[#434545]"><FaGreaterThan /></span>
                    <Link to="/cartpage"><span className="text-[#5F6C72]">Cart</span></Link>
                    <span className="text-[12px] text-[#434545]"><FaGreaterThan /></span>
                    <span className="text-[#191C1F]">Checkout</span>
                 </h1>
        </div>

      <div  className="py-2 px-5 flex flex-col lg:flex lg:flex-row justify-between gap-5 container mx-auto w-full">
          <div className="flex flex-col gap-4 w-full lg:w-2/3">
          <CustomerDetailsForm onChange={(data) => setOrderData(prev => ({...prev, customer : data}))} />
          <DeliveryDetails onChange={(value) => setOrderData(prev => ({...prev, deliveryMethod : value}))} />
          <PaymentMethod onChange={(value) => setOrderData(prev => ({...prev, paymentMethod : value}))} />
          </div>
       
         <div className="w-full lg:w-1/3">
         <OrderSummary onConfirm={handleConfirmOrder} />
         </div>
      </div>

   
   <Footer />
        
    </div>
  )
}
