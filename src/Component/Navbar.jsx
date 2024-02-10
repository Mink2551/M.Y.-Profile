import { faBars, faCat, faPaw } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"



const Navbar = () => {

    const [isMouseEnter, setIsMouseEnter] = useState({});

    
    

    return(
        <div className="bg-white text-xl mx-auto py-2 rounded-full w-3/5 flex sticky top-2 shadow-xl">
            <a href="#" className=" "
            onMouseEnter={() => setIsMouseEnter({ ['card1']: true})}
            onMouseLeave={() => setIsMouseEnter({ ['card1']: false})}
            >
                
               <button className="transition-all hover:bg-blue-200 hover:bg-opacity-20 ml-1 text-lg font-extrabold p-2 px-3 rounded-2xl">
                <div className="hover:underline">M.Y. Profile<FontAwesomeIcon className={`ml-2 lg:${isMouseEnter['card1']? "opacity-100" : "opacity-0" } transition-all`} icon={faPaw}/></div>
               </button>
            </a>

            <div className="absolute right-0 top-[-100%] lg:top-[10%] lg:opacity-100 opacity-0 items-center px-5">
                <ul className="flex  mr-7 lg:gap-4 gap-6">
                    <li  className=" text-sm font-medium my-3 transition-all hover:scale-125 hover:underline text-gray-400 hover:text-gray-600">
                        <a href="/">About</a>
                    </li>
                    <li  className=" text-sm font-medium my-3 transition-all hover:scale-125 hover:underline text-gray-400 hover:text-gray-600">
                        <a href="#">Talent</a>
                    </li>
                    <li  className=" text-sm font-medium my-3 transition-all hover:scale-125 hover:underline text-gray-400 hover:text-gray-600">
                        <a href="#">Experience</a>
                    </li>
                    <li  className=" text-sm font-medium my-3 transition-all hover:scale-125 hover:underline text-gray-400 hover:text-gray-600">
                        <a href="#">Portfolio</a>
                    </li>
                </ul>
            </div>
            <div  className="flex items-center mx-auto lg:hidden cursor-pointer text-2xl">
            <details className="dropdown ">
              <summary className="  text-white"><FontAwesomeIcon className="text-black" icon={faBars}/></summary>
              <ul className="p-2 shadow mt-4 menu dropdown-content z-[1] bg-base-100 ml-5 rounded-box w-32">
                <li><a href="/">About</a></li>
                <li><a href="/">Talent</a></li>
                <li><a href="/">Experience</a></li>
                <li><a href="/">Portfolio</a></li>
              </ul>
            </details>

            </div>

            
                
        

        </div>
    )
}

export default Navbar