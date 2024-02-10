import { data } from "../Content/About"

const Body1 = () => {
    return(
        <div className="m-5 mt-16">
            <h1 className="text-2xl ml-2 font-bold"> {data.MainTitleBody1} </h1>
            <p className="mt-5 ml-5 text-gray-600 font-medium"> {data.PassagesBody1} </p>
        
            <p className="mt-12 pb ml-5 text-gray-600 font-medium"> {data.PassagesBody2} </p>
        </div>
    )
}

export default Body1