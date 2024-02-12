import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Body5 from './Sections/Body5'
import Body6 from './Sections/Body6'
import { data } from "./Content/About"


function App() {

  return (
    <div>
      <Navbar/>
      <div className="divider divider-neutral my-10 mx-3 "> { data.MainTitleBody5 } </div>
      <div className='max-w-7xl mx-auto'>
        <Body5/>
        <Body6/>
        
      </div>

      <Footer/>
      
     
    </div>
  )
}

export default App
