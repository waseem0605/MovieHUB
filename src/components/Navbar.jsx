import React, { useState, useContext } from "react";
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom";
import Contextpage from '../Contextpage';
import { motion } from "framer-motion";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import User from '../assets/images/User.jpg';
import { auth } from '../../firebase';
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";


function Navbar() {

    const location = useLocation();
    const { header, user } = useContext(Contextpage);
    const [activemobile, setActivemobile] = useState(false);

    // console.log(user)

    return (
        <>
            {/* mobilebutton */}
            <button className="z-40 text-3xl text-black fixed right-0 bottom-0 m-6 p-4 duration-150 rounded-full active:scale-90 bg-white block md:hidden" onClick={() => setActivemobile(!activemobile)}>
                {activemobile ? <HiX /> : <HiMenuAlt1 />}
            </button>

            <nav className={`${activemobile ? 'block' : 'hidden'} fixed bg-black/90 md:bg-black h-full w-full md:w-[15rem] z-30 md:block`}>
                <motion.div
                    animate={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Link to="/" className="logo flex flex-col justify-center items-center m-7 gap-2" onClick={() => setActivemobile(!activemobile)}>
                        <img src={logo} alt="logo" className="w-24" />
                        <h1 className="text-gray-400/70 font-bold text-2xl text-center">MovieHUB</h1>
                    </Link>
                </motion.div>
    

                <ul className="text-white font-semibold text-[16px] text-center px-5">

                    {/* <Link to="/"><li className={`${header == "Genres" ? 'bg-blue-500/20 border-blue-600' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600`} onClick={() => setActivemobile(!activemobile)}>Genres</li></Link>

                    <Link to="/trending"><li className={`${header == "Trending Movies" ? 'bg-blue-500/20 border-blue-600' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600 `} onClick={() => setActivemobile(!activemobile)}>Trending</li></Link>

                    <Link to="/upcoming"><li className={`${header == "Upcoming Movies" ? 'bg-blue-500/20 border-blue-600' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600 `} onClick={() => setActivemobile(!activemobile)}>Upcoming</li></Link>

                    <Link to="/favorite"><li className={`${header == "Favorite Movies" ? 'bg-blue-500/20 border-blue-600' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600 `} onClick={() => setActivemobile(!activemobile)}>Favorites</li></Link>

                    <Link to="/AboutUs"><li className={`${header == "About Us" ? 'bg-blue-500/20 border-blue-600' : 'bg-gray-500/20 border-black'} p-2 my-2  hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600 `} onClick={() => setActivemobile(!activemobile)}>About Us</li></Link> */}

                    <Link to="/"><li className= 'bg-gray-500/20 border-black p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600'>Genres</li></Link>
                    <Link to="/trending"><li className= 'bg-gray-500/20 border-black p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600'>Trending</li></Link>
                    <Link to="/upcoming"><li className= 'bg-gray-500/20 border-black p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600'>Upcoming</li></Link>
                    <Link to="/favorite"><li className= 'bg-gray-500/20 border-black p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600'>Favorites</li></Link>
                    <Link to="/AboutUs"><li className= 'bg-gray-500/20 border-black p-2 my-2 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600'>About Us</li></Link>

                    </ul>

                {/* Loginsection */}

                <div className="absolute bottom-0 w-full p-5 md:p-2 text-white">
                    {user ? <>
                        <div className="w-full bg-gray-900 px-5 py-2 gap-4 rounded-xl flex items-center font-semibold border-2 border-blue-100/10">
                            <img src={user.photoURL == null ? User : user.photoURL} alt="user" className="h-10 rounded-full" />
                            <h1>{user.displayName}</h1>
                        </div>

                        <div className="cursor-pointer bg-red-500 flex justify-center items-center p-2 rounded-xl mt-2" onClick={() => auth.signOut(toast.error("Logout successfully"))}>
                            <h1>Logout</h1>
                        </div>
                    </>
                        :
                        <>
                            <Link to="/login" className="w-full bg-gray-900 py-2 gap-4 rounded-xl flex items-center justify-center font-semibold border-2 border-blue-100/10 hover:bg-blue-500/20 rounded-[5px] border-2 hover:border-blue-600" onClick={() => setActivemobile(!activemobile)}>
                                <h1>Login</h1>
                            </Link>
                        </>
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar