import React, { useState, useEffect } from 'react'
import moneyBag from "../../assets/moneyBag.png"
import creditCard from "../../assets/ATMCard.png"
import payPal from "../../assets/payPal.png"

export default function PaymentMethod({ onChange }) {
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(()=>{
      onChange(selectedOption)
    },[selectedOption])

  return (
    <form className="p-4 border border-[#E8E6E6]">
        <h1>Select Payment Method</h1>

        <div
        className={`flex items-center p-3 justify-between my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "delivery" ? "border-[#6C4CF1]" : "border-[#E8E6E6]"}`}
      >
        <div className="flex gap-3">
            <input
          type="radio"
          name="payment"
          value="delivery"
          checked={selectedOption === "delivery"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#6C4CF1]"
        />
        <label>Pay On Delivery</label>
        </div>
        <img src={moneyBag} alt="" />
      </div>

      <div
        className={`flex items-center p-3 justify-between my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "crediCard" ? "border-[#6C4CF1]" : "border-[#E8E6E6]"}`}
      >
        <div className="flex gap-3">
            <input
          type="radio"
          name="payment"
          value="creditCard"
          checked={selectedOption === "creditCard"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#6C4CF1]"
        />
        <label>Pay With Credit Card</label>
        </div>
        <img src={creditCard} alt="" />
      </div>

       <div
        className={`flex items-center p-3 justify-between my-2 rounded-md h-[54px] w-full 
        border-[1.5px] ${selectedOption === "payPal" ? "border-[#6C4CF1]" : "border-[#E8E6E6]"}`}
      >
        <div className="flex gap-3">
            <input
          type="radio"
          name="payment"
          value="payPal"
          checked={selectedOption === "payPal"}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="w-5 h-5 accent-[#6C4CF1]"
        />
        <label>Pay With Pay Pal</label>
        </div>
        <img src={payPal} alt="" />
      </div>
    </form>
  )
}
