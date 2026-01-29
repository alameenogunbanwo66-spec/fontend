import React, { useContext, useEffect } from 'react'
import { AuthContext } from "../Context/AuthContext"
import { useNavigate } from "react-router"

export default function ProtectRoute({children}) {
    const { token } = useContext(AuthContext)
    const Navigate = useNavigate()

    useEffect(()=>{
        if (!token) {
            Navigate("/login")
        }
    }, [token,Navigate])


  return children;
}
