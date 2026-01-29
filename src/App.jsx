import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Login from "./Pages/AuthPages/Login"
import SignUp from "./Pages/AuthPages/SignUp"
import ForgotPassword from "./Pages/AuthPages/ForgotPassword"
import EmailConfirm from "./Pages/AuthPages/EmailConfirmation"
import ResetPassword from "./Pages/AuthPages/ResetPassword"
import HomePage from "./Pages/HomePage"
import ScrollToTop from "./Components/ScrollToTop"
import ProductPage from "./Pages/ProductPage"
import ProductDetailsPage from "./Pages/ProductDetailsPage"
import CartPage from "./Pages/CartPage"
import CheckoutPage from "./Pages/CheckoutPage"
import Profile from "./Pages/Profile"
import ProtectRoute from "./Components/ProtectRoute"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/emailconfirmation" element={<EmailConfirm />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/profile" element={<ProtectRoute><Profile /></ProtectRoute>} />
      </Routes>
       <ScrollToTop />
    </Router>
    </>
  ) 
}

export default App
