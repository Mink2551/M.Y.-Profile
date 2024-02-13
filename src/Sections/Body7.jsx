import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Catminkya from "../../public/Catminkya.jpg"
import { data } from "../Content/About"
import React, { useEffect, useState } from 'react';
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import Codebar from "./Codebar";
 
const Body7 = () => {
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
        <div className="mb-72">
           
               <div className="">
                 <h1 className="font-bold text-5xl mx-10 text-gray-800 ">Expirence</h1>
                 <h1 className="font-bold text-3xl mt-2 mx-10 text-gray-700 ">SC Work</h1>
                  <div className="font-medium text-xl mx-16 mt-5">
                     <p className="text-gray-700"> {data.PassagesBody36} </p>
                     <p className="text-gray-700 mt-5"> {data.PassagesBody37} </p>
                <a href="https://www.facebook.com/sc.satitpm.official?locale=th_TH" className="mx-12 font-semibold mt-6 text-blue-500 hover:text-blue-600 flex" target="blank"> This is the SC's facebook page</a>

                    
                    
                  </div>

                 <h1 className="font-bold text-3xl mt-16 mx-10 text-gray-700">Website Work</h1>
                  <div className="font-medium text-xl mx-16 mt-5 grid gap-y-10">
                     <p className="text-gray-700"> {data.PassagesBody38} </p>
                    <a href="https://3fahprathannmaa.vercel.app/" className="mx-12 font-semibold mt-6 text-blue-500 hover:text-blue-600 flex" target="blank">This is the Student president website</a>

                    
                    
                  </div>
               </div>

               
            

            
        </div>
    )
}

export default Body7