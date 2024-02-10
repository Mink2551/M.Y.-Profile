import { data } from "../Content/About" 
import Catminkya from "../../public/Catminkya.jpg"

const Body2 = () => {
    return(
        <div className="pb-10">
            <div className="mt-16 m-5 grid md:grid-cols-[40%_60%]">
           
             <div className="md:m-7 m-20 my-5">
                  <img src={Catminkya}  className=" rounded-3xl shadow-2xl" alt="Catminkya" />
               </div>
             
              <div>
               <h1 className="text-2xl ml-2 font-bold"> { data.MainTitleBody2} </h1>
               <p className="mt-5 ml-5 text-gray-600 font-medium"> {data.PassagesBody3} </p>
             </div>
            
            </div>

            <div className="grid gap-y-5">
              <div className="mr-5">
               <p className=" ml-10 text-gray-600 font-medium"> {data.PassagesBody4} </p>
              </div>

              <div className="mr-5 grid md:grid-cols-[60%_40%]">
               <p className="mt-5 ml-10 text-gray-600 font-medium my-auto"> {data.PassagesBody5} </p>

               <div className="md:m-7 m-20 my-5">
                  <img src={Catminkya}  className=" rounded-3xl shadow-2xl" alt="Catminkya" />
               </div>

              </div>

              <div className="mr-5">
               <p className="mt-5 ml-10  text-gray-600 font-medium"> {data.PassagesBody6} </p>
              </div>
            </div>

        </div>
    )
}

export default Body2