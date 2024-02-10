import './App.css'
import Footer from './Component/Footer'
import Navbar from './Component/Navbar'
import Body1 from './Sections/Body1'
import Body2 from './Sections/Body2'
import Body3 from './Sections/Body3'
import Body4 from './Sections/Body4'
import Header from './Sections/Header'

function Home() {

  return (
    <div>
      <Navbar/>
      <div className="divider divider-neutral my-10 mx-3 ">About</div>
      <div className='max-w-7xl mx-auto'>
        <Header/>
        <Body1/>
        <Body2/>
        <Body3/>
        <Body4/>
      </div>

      <Footer/>
      
     
    </div>
  )
}

export default Home
