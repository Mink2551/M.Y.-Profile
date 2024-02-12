import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Catminkya from "../../public/Catminkya.jpg"
import { data } from "../Content/About"
import React, { useEffect, useState } from 'react';
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import Codebar from "./Codebar";
 
const Body5 = () => {
    const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Set animationStarted to true after a delay
    const timeout = setTimeout(() => {
      setAnimationStarted(true);
    }, 1000); // Adjust the delay as needed

    // Clean up timeout
    return () => clearTimeout(timeout);
  }, []);

    return(
        <div>
            <div className="grid md:grid-cols-[50%_50%]">
               <div className="">
                 <h1 className="font-bold text-5xl mx-10 text-gray-800 ">Talent</h1>
                  <div className="font-medium text-xl ml-14 mt-5">
                     <p className="text-gray-700"> {data.PassagesBody21} </p>
                     <header className={`App-header my-4 font-semibold text-lg ml-4 ${animationStarted ? 'animate-pulse' : ''}`}> 
                       <li>Computer</li>
                       <li>Programing</li>
                       <li>Editer</li>
                       <li>Worker</li>                     
                       <li>Programer</li>
                     </header>
                    
                  </div>
               </div>

               <Codebar/>
            </div>

            
        </div>
    )
}

export default Body5