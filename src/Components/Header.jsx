import React, { useState, useContext } from 'react'
import Logo from "../assets/GadgetHub Logo.png"
import Input from "../Components/Input"
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router"
import ShoppingCartModal from "./HomePage Components/Shopping Cart/ShoppingCartModal"
import { CartContext } from "../Context/ShoppingCartContext"
import { LikeContext } from "../Context/LikeContext"
import { useNavigate } from "react-router"
import { AuthContext } from "../Context/AuthContext"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import { motion } from "framer-motion"
import Button from "../Components/Button"

export default function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false)
  const { cart } = useContext(CartContext)
  const { likes } =  useContext(LikeContext)
  const { user,logout } = useContext(AuthContext)

  const icons= [
        {
        id: 1,
        icon: <FiShoppingCart />,
        linkTo: "/cart"
    },
    {
        id: 2,
        icon: <FaRegHeart />,
        linkTo: "/likes"
    },
    {
        id: 3,
        icon: <GoPerson />,
        linkTo: "/profile"
    }
    ]

  const filters = [
        {
            id: 1,
            name: "All Categories",
            linkTo: "/products"
        },
          {
            id: 2,
            name: "Smart Phones",
            linkTo: ""
        },
          {
            id: 3,
            name: "Laptop",
            linkTo: ""
        },
          {
            id: 4,
            name: "Wearables",
            linkTo: ""
        },
          {
            id: 5,
            name: "Gaming",
            linkTo: ""
        },
        {
            id:6,
            name: "Accessories",
            linkTo: "",
        },
        {
            id:7,
            name:"Smart Homes",
            linkTo: "",
        }

    ]


  const UserMenu = ()=>{
    const [isOpen, setIsOpen] = useState(false)
    const handleLogout= ()=>{
      logout()
      setIsOpen(false)
      navigate("/login")
    }
    return (
      <div className="flex relative gap-2">
        <div className="flex gap-2 items-center">
          {icons.map((icon)=> (icon.id === 1 && <button className="relative" onClick={showCart}  key={icon.id}>
                  <span className="text-3xl">{icon.icon}</span>
                  {cart.length > 0 && (
                    <span className="bg-[#6C4CF1] text-white w-6 h-6 rounded-full flex items-center justify-center absolute -top-2 -right-2">
                      {cart.length}
                      </span>
                    )}
                    </button>) )}
         <div onClick={()=> setIsOpen(!isOpen)} className="flex items-center">
          <img className="h-[49px] w-[49px] rounded-full" src={user?.image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRadJ-YmNxJTg6v9iO22fzR_65KenYJHFB5zg&s"} alt={user.firstName} />
          <p className="text-[18px] font-semibold">Hello {user.firstName}</p>
         </div>
        </div>
        <button> {isOpen ? <FaChevronUp /> : <FaChevronDown />}</button>

        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }} className="absolute top-full right-0 flex flex-col bg-white rounded-md w-[185px] p-3 z-10 gap-1">
            <Link to="/profile">Profile</Link>
            <Link to="/help">Help</Link>
            <button onClick={handleLogout} className="text-[#E60E0E] text-left">Logout</button>
          </motion.div>
        )}

      </div>
    )
  }

  const showCart=()=>{setShowModal(true)}

  
  const handleSearch = (e) => {
  e.preventDefault();
  if (!searchQuery.trim()) return;
  navigate(`/products?search=${searchQuery}`);
 };


  return (
    <div className="flex flex-col w-full">
       {showModal && <ShoppingCartModal showModal={showModal} setShowModal={setShowModal} />}
        <div className="hidden lg:flex bg-[#191C1F] text-white">
           <div className="flex container mx-auto items-center justify-between w-full h-[7vh] px-5">
             <h1><span className="text-[#ACACAC]">Mon-Sat:</span> 9:00 AM - 5:30 PM</h1>
            <h1 className="text-[#ACACAC]">Visit our showroom in 12 Street Address City, Lagos</h1>
            <h1>Call Us: (+234) 01234 5678</h1>
           </div>
        </div>

        <div className="container mx-auto flex items-center justify-between gap-0 lg:gap-25 h-[14vh] py-10 lg:py-2 px-5">
            <Link to="/"><img src={Logo} alt="" /></Link>

            <form onSubmit={handleSearch} className="hidden md:flex relative lg:w-[556px]">
                <Input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" className="w-full h-[12] rounded-md border-[#ACACAC]" placeholder="Search for a gadget..." />
                <span className="absolute right-3 top-3"><CiSearch size={30} /></span>
            </form>

             <div className="flex gap-5">
          { user ? <UserMenu /> :
            <div className="flex gap-5 items-center">
              {icons.map((icon) => ( icon.id === 1 ? (
                <button onClick={showCart} className="relative" key={icon.id}>
                  <span className="text-3xl">{icon.icon}</span>
                  {cart.length > 0 && (
                    <span className="bg-[#6C4CF1] text-white w-6 h-6 rounded-full flex items-center justify-center absolute -top-2 -right-2">
                      {cart.length}
                      </span>
                    )}
                    </button>
                    ) :  icon.id === 2 ? (
              <Link to={icon.linkTo} key={icon.id} className="relative">
                <span className="text-3xl">{icon.icon}</span>
                {likes.length > 0 && (
                  <span className="bg-[#6C4CF1] text-white w-6 h-6 rounded-full flex items-center justify-center absolute -top-2 -right-2">
                    {likes.length}
                  </span>
                )}
              </Link>) :  (
                <Button onClick={()=> navigate("/login")} className="w-[84px] h-[48px] text-white" content="Login" />
              )
                    ))}
                </div>}
                </div>
        </div>

        <div className="flex bg-[#191C1F] text-white mt-1">
            <div className="hidden lg:flex items-center container mx-auto h-[15vh] lg:h-[7vh] text-sm lg:text-lg px-5 gap-8">
                {filters.map((filter)=>{
                return <Link key={filter.id} to={filter.linkTo}>{filter.name}</Link>
            })}
            </div>
        </div>

    </div>
  )
}
