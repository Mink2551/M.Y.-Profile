import Catminkya from "../../public/Catminkya.jpg"
import { data } from "../Content/About"

const Header = () => {
    return(
        <div className="grid md:grid-cols-[60%_40%] m-5">
             <div className="lg:mx-10 m-2 mr-16 mt-10 ">
                <h1 className="font-bold text-4xl flex"> { data.MainTitle } </h1>
                <p className="flex font-medium text-xs ml-1 text-gray-500"> { data.SeccondaryTitle } </p>
                <p className="flex font-medium text-md ml-1 text-gray-700 mt-5"> { data.Passages } </p>
             </div>
             <div className="md:m-7 m-20 my-5">
                <p className="ml-3"> {data.Topic} </p>
                <img src={Catminkya}  className=" rounded-3xl shadow-2xl" alt="Catminkya" />
             </div>
        </div>
    )
}

export default Header