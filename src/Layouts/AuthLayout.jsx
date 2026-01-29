import React from 'react'
import PropTypes from "prop-types"
import { IoIosClose } from "react-icons/io";
import { Link, useNavigate } from "react-router"


export default function AuthLayout({title,paragraph,children,auth,to}) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full px-5 lg:px-10 pt-5 my-[3%] lg:my-0">
     <div className="relative flex flex-col w-full lg:w-[600px] items-center">
           <button onClick={()=> navigate("/")} className="absolute top-0 right-0"><IoIosClose size={40} /></button>
        <h1 className="text-[54px] font-semibold">{title} </h1>
        <p className="text-[18px]">{paragraph} <Link to={to} className="text-[#6C4CF1] font-semibold py-2">{auth}</Link></p>
        <div className="w-full pt-5">
            {children}
        </div>
     </div>
    </div>
  )
}

AuthLayout.PropTypes = {
    title: PropTypes.node.isRequired,
    paragraph: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    auth: PropTypes.node.isRequired,
    to: PropTypes.node.isRequired,
}