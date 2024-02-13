import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import { data } from "./Content/About"
import Body1 from './Sections/Body1'
import Body7 from './Sections/Body7'


function App() {

  return (
    <div>
      <Navbar/>
      <div className="divider divider-neutral my-10 mx-3 "> { data.MainTitleBody17 } </div>
      <div className='max-w-7xl mx-auto'>
        <Body7/>      
      </div>

      <Footer/>
      
     
    </div>
  )
}

export default App
