import { data } from "../Content/About" 
import Catminkya from "../../public/Catminkya.jpg"

const Body3 = () => {
    return(
        <div>
            <div className="mt-16 m-5 ">
                <h1 className="font-bold text-3xl text-center flex items-center justify-center my-5"> {data.MainTitleBody3} </h1>
                <div className="grid md:grid-cols-[1fr_1fr] gap-y-5 mx-auto max-w-7xl mt-10 gap-x-5 pb-20">
                    <div className="">
                      <div className="overflow-x-auto h-96 rounded-3xl shadow-2xl">
                          <table className="table table-pin-rows">
                          <thead>
                            <tr>
                              <th>Mink</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr><td>First name : Pacharapol</td></tr>
                            <tr><td>Surname : Pimpa</td></tr>
                            <tr><td>Nickname : Mink</td></tr>
                            <tr><td>Birth date : 3/24/2024</td></tr>
                            <tr><td>Age : 15</td></tr>
                            <tr><td>Height : 178</td></tr>
                            <tr><td>Weight : 47</td></tr>
                            <tr><td>Nationality : Thai</td></tr>
                            <tr><td>Gender : Male</td></tr>
                            <tr><td>Instagram : <a target="_blank" href="https://www.instagram.com/zeaek_/" className="text-blue-400 hover:text-blue-500"> zeaek_</a></td></tr> 
                            <tr><td>Primary Education : Patai Udom Suksa</td></tr>                                                      
                            <tr><td>Seccondary Education : Satit Wat Phra Sri Mahathat</td></tr> 
                            <tr><td>Work Experience : SC Technical Work</td></tr> 
                            <tr><td>Hobbies : Programming, Badminton</td></tr> 
                            <tr><td>Skills : Computer Program</td></tr> 
                          </tbody>

                          
                          </table>
                        </div>
                        
                    </div>


                    <div>
                      <div className="overflow-x-auto h-96 rounded-3xl shadow-2xl">
                        <table className="table table-pin-rows">
                        <thead>
                          <tr>
                            <th>Ya</th>
                          </tr>
                        </thead>
                        <tbody>
                            <tr><td>First name : Yanisa</td></tr>
                            <tr><td>Surname : Khambai</td></tr>
                            <tr><td>Nickname : Focus, Ya</td></tr>
                            <tr><td>Birth date : 9/11/2007</td></tr>
                            <tr><td>Age : 16</td></tr>
                            <tr><td>Height : 162</td></tr>
                            <tr><td>Weight : 47</td></tr>
                            <tr><td>Nationality : Thai</td></tr>
                            <tr><td>Gender : Female</td></tr>
                            <tr><td>Instagram : <a target="_blank" href="https://www.instagram.com/fructosesep/" className="text-blue-400 hover:text-blue-500"> fructosesep</a></td></tr> 
                            <tr><td>Primary Education : Pongsuwanwittaya</td></tr>                                                      
                            <tr><td>Seccondary Education : Satit Wat Phra Sri Mahathat</td></tr> 
                            <tr><td>Work Experience : Satit Sampan Sports Event 2022 and 2023</td></tr> 
                            <tr><td>Hobbies : Voleyball, Dance</td></tr> 
                            <tr><td>Skills : Voleyball, Procreate App</td></tr> 
                        </tbody>
                        </table>
                      </div>
                    </div>
                    

                </div>

                <div className="mr-5">
               <p className="  max-w-7xl mx-20 text-gray-600 font-medium"> {data.PassagesBody7} </p>
              </div>

              <div className="mr-5">
               <p className="  max-w-7xl mx-20 text-gray-600 font-medium my-10"> {data.PassagesBody8} </p>
              </div>

              <div className="mr-5">
               <p className="  max-w-7xl mx-20 text-gray-600 font-medium my-10 pb-20"> {data.PassagesBody9} </p>
              </div>
           
           </div>
        </div>
    )
}

export default Body3