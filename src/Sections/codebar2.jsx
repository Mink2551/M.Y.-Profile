import { faAnglesDown, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { data } from "./../Content/About" 

const navs = [
    { title1:"computer", sectionId:"computer-section", title6: "2"},
    { title2:"programing", sectionId:"programing-section", title6: "3"},
    { title3:"editer", sectionId:"editer-section", title6: "4"},
    { title4:"worker", sectionId:"worker-section", title6: "5"},
    { title5:"programer", sectionId:"programer-section", title6: "6"},
]

const Codebar2 = ({ navBarItems }) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const handleClick = (sectionId) => {
        console.log(sectionId)
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth"})

    }

    return(
        <div className=''
             
        >           
              {
                navs.map((e, i) => (
                    <div
                        key={`nav-${e}-${i}`}
                        onClick={() => handleClick(e.sectionId)}
                        onMouseEnter={() => setIsMouseEnter({[e.title]: true })}
                        onMouseLeave={() => setIsMouseEnter({[e.title]: false })}
                        className="cursor-pointer "
                    > 

                        <pre data-prefix={e.title6} ><code><span className="hover:underline hover:text-gray-400 hover:ml-10 transition-all cursor-pointer ml-8">{e.title1}{e.title2}{e.title3}{e.title4}{e.title5} </span><FontAwesomeIcon className="text-xs translate-y-1 animate-bounce" icon={faAnglesDown}/> </code></pre>        
                   
                    </div> 
                )) 
              }
              
         </div>
    )
}

export default Codebar2