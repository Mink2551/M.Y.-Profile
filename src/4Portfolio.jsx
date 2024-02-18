import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import { data } from "./Content/About"
import Body8 from './Sections/Body8'


function App() {

  return (
    <div >
      <Navbar/>
      <div className="divider divider-neutral my-10 mx-3 "> { data.MainTitleBody18 } </div>
      <div className='ml-20'>
         <Body8/>
      </div>


      <Footer/>
      
     
    </div>
  )
}

export default App
