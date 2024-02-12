import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { data } from "./../Content/About"
import Codebar2 from "./codebar2"



const Codebar = () => {
    return(
        <div className="m-5">
                 <div className="my-10">
                   <div className="mockup-code shadow-2xl">
                     <pre data-prefix="1"><code className="text-gray-500">{data.Code1}<span className="text-blue-400">div</span> <span className="text-blue-300">Class</span><span className="text-white">=</span><span className="text-red-300">"Click here"</span>{data.Code4} </code></pre>
                     <Codebar2/>
                     {/* <pre data-prefix="2"><code><span className="hover:underline hover:text-gray-400 hover:ml-10 transition-all cursor-pointer ml-8">{data.Code6} </span><FontAwesomeIcon className="text-xs translate-y-1 animate-bounce" icon={faAnglesDown}/> </code></pre>
                     <pre data-prefix="3"><code><span className="hover:underline hover:text-gray-400 hover:ml-10 transition-all cursor-pointer ml-8">{data.Code7} </span><FontAwesomeIcon className="text-xs translate-y-1 animate-bounce" icon={faAnglesDown}/></code></pre>
                     <pre data-prefix="4"><code><span className="hover:underline hover:text-gray-400 hover:ml-10 transition-all cursor-pointer ml-8">{data.Code8} </span><FontAwesomeIcon className="text-xs translate-y-1 animate-bounce" icon={faAnglesDown}/></code></pre>
                     <pre data-prefix="5"><code><span className="hover:underline hover:text-gray-400 hover:ml-10 transition-all cursor-pointer ml-8">{data.Code9} </span><FontAwesomeIcon className="text-xs translate-y-1 animate-bounce" icon={faAnglesDown}/></code></pre>
                     <pre data-prefix="6"><code><span className="hover:underline hover:text-gray-400 hover:ml-10 transition-all cursor-pointer ml-8">{data.Code10}</span> <FontAwesomeIcon className="text-xs translate-y-1 animate-bounce" icon={faAnglesDown}/></code></pre> */}
                     <pre data-prefix="7"><code className="text-gray-500">{data.Code1}{data.Code3}<span className="text-blue-400">div</span>{data.Code4} </code></pre>
                   </div>
                 </div>
        </div>
    )
}

export default Codebar