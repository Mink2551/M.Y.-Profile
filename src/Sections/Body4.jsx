import { data } from "../Content/About"
import Gilbert333 from "../../public/Gilbert333.jpg"

const Body4 = () => {
    return(
        <div className="mb-80">  
            <div className="mt-16 m-5 ">
               <h1 className="text-2xl font-bold text-center flex ml-10 my-5"> { data.MainTitleBody4} </h1>
               <div className="grid md:grid-cols-[40%_60%] gap-y-10">
                 <div className="mx-3">
                   <div className="mockup-code shadow-2xl">
                     <pre data-prefix="1"><code className="text-gray-500">{data.Code1}<span className="text-blue-400">div</span>{data.Code4} </code></pre>
                     <pre data-prefix="2"><code>   {data.Code2} </code></pre>
                     <pre data-prefix="3"><code className="text-gray-500">{data.Code1}{data.Code3}<span className="text-blue-400">div</span>{data.Code4} </code></pre>
                   </div>
                 </div>
              
                <div>
                  <p className=" ml-5 text-gray-600 font-medium mt-2"> {data.PassagesBody10} </p>

                </div>              
               </div>
               <p className=" ml-5 text-gray-600 font-medium mt-7"> {data.PassagesBody11} </p>
               <p className=" ml-5 text-gray-600 font-medium mt-7"> {data.PassagesBody12} </p>

               <div className="grid md:grid-cols-[60%_40%] mt-10 gap-y-10">
                 
               <div>
                  <p className=" ml-5 text-gray-600 font-medium mt-2"> {data.PassagesBody13} </p>

                </div> 
                 
                 <div className="mx-3">
                   <div className="mockup-code shadow-2xl">
                     <pre data-prefix="1"><code className="text-gray-500">{data.Code1}<span className="text-blue-400">div</span>{data.Code4} </code></pre>
                     <pre data-prefix="2"><code>   {data.Code5} </code></pre>
                     <pre data-prefix="3"><code className="text-gray-500">{data.Code1}{data.Code3}<span className="text-blue-400">div</span>{data.Code4} </code></pre>
                   </div>
                 </div>
                                          
               </div>

               <p className=" ml-5 text-gray-600 font-medium mt-7"> {data.PassagesBody14} </p>
               <p className=" ml-5 text-gray-600 font-medium mt-7"> {data.PassagesBody15} </p>

               <div className="grid md:grid-cols-[40%_60%] mt-10 gap-y-10">
                 <div className="mx-3">
                    <img className="rounded-2xl shadow-2xl" src={Gilbert333} alt="Gilbert" />
                 </div>
              
                <div>
                  <p className=" ml-5 text-gray-600 font-medium mt-2"> {data.PassagesBody16} <a href="https://3fahprathannmaa.vercel.app/" className="text-blue-600 hover:text-blue-500 hover:underline text-sm" target="blank">This is the Website</a> </p>

                </div>              
               </div>

               <p className=" ml-5 text-gray-600 font-medium mt-7"> {data.PassagesBody17} </p>
               <p className=" ml-5 text-gray-600 font-medium mt-7"> {data.PassagesBody18} </p>
               <p className=" ml-5 text-gray-600 font-medium mt-7"> {data.PassagesBody19} </p>
               <p className=" ml-5 text-gray-600 font-medium mt-7"> {data.PassagesBody20} </p>
             </div>

        </div>
    )
}

export default Body4 