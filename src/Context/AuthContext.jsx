import { createContext, useState } from "react"
import axios from "axios"
import PropTypes from "prop-types"

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [ user, setUser ] = useState(null)
    const [token, setToken] = useState(null)

    const SignUp = async (formData) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_AUTH_BASE_URL}/signup`,formData,{
                headers : {
                    "Content-Type" : "application/json"
                }
            })
           
            setUser(response.data.user)
            setToken(response.data.token)
            console.log("Signup successful :" , response.data);
            localStorage.setItem("token", response.data.token)

            return response.data
        } catch (error) {
            console.error("signup failed :", error.response?.data || error.message);
            throw error.response?.data || error;
        }
    }

     const SignIn = async (formData) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_AUTH_BASE_URL}/signin`,formData,{
                headers : {
                    "Content-Type" : "application/json"
                }
            })
           
            setUser(response.data.user)
            setToken(response.data.token)
            console.log("Login successful :" , response.data);
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", JSON.stringify(response.data.user))

            return response.data
        } catch (error) {
            console.error("Login failed :", error.response?.data || error.message);
            throw error.response?.data || error;
        }
    }

    const logout = ()=>{
        setUser(null)
        setToken(null)
        localStorage.clear()
        sessionStorage.clear()
    }

    return (
        <AuthContext.Provider value={{SignUp,SignIn,user,token,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};