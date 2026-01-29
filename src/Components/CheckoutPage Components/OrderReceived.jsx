import React from 'react'
import { useNavigate } from "react-router"
import { TiTick } from "react-icons/ti";
import Button from "../../Components/Button"

export default function OrderReceived({showModal, setShowModal}) {

  const navigate = useNavigate()
  if (!showModal) return null;
  const seeOrderDetails = ()=>{
        setShowModal(false)
        navigate("/order")
    }


    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
      <div  className="bg-white rounded-xl shadow-lg w-[99%] max-w-md p-6 relative flex flex-col items-center gap-3 text-center mx-auto">
         <h1><span className="bg-[#F1FFEC] text-[#009320] rounded-full h-[99px] w-[99px] flex items-center justify-center"><TiTick size={50} /></span></h1>
         <p className="text-[28px] font-semibold">Your Order Has Been Received</p>
         <p className="text-[20px] text-[#686565]">Thank you for placing an order</p>
         <p className="text-[20px]">Order ID</p>
         <Button onClick={seeOrderDetails} className="w-full h-12 text-white rounded-md" content="See Order Details" />
      </div>
    </div>
  )
}

