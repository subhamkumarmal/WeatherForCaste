import React from 'react';
import '../css/home.css';
import Pic1 from '../pic/rain.png';


const Home = () =>{
    
    return(
            <>
            
            <div className="container setContainer mt-5">
                <div className="row">
                    <div className="col-12">
                        <div className="row  rowCenter">
                            <h3 className="headLine pt-3"> A Rainy Day</h3>

                            <div className="col-md-6"> 
                                   <img src={Pic1} alt="err"/>
                            </div>

                            <div className="col-md-6 secondColumn "> 
                                 <p><span className="rain">RAIN</span><br/>
                                     I am the rain 
                                     gently patting 
                                     the rooftop. 
                                     
                                     The drop
                                     sliding down
                                     your window.

                                     I glide 
                                     past the glow
                                     or your lamp.
                                     
                                     Clinglin 
                                     to the warmth
                                     of your gingertips
                                     as they press 
                                     against the glass.
                                     
                                     Losing grip
                                     I slip away
                                 </p>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
                    



            <div className="container setContainer mt-5 secondContainer">
                <div className="row">
                    <div className="col-12">
                        <div className="row  rowCenter">
                            

                            <div className="col-md-12"> 
                            <h2 className="rain pt-3 pb-3">Some People Feel Rain, Other Just Get Wet </h2>
                            A rainy day brings delightful weather with a cool breeze and rain showers. It is welcomed mostly by people of all age group including kids, adults and older people. It is substantial uplift our bad mood quickly and gives us relief from sear heat and humid climate.

Rainy day can also offer a fun break to students as most of the schools declare holiday due to heavy rain to avoid the chances of accidents. It plays an essential role for farmers as it helps them in the growth and nourishment of crops. Rainy day is also a blessing for trees, plants, birds and animals.

Rainy day rejuvenates us by making the weather pleasant and relaxed.  Rainy day provides relief to a tropical country from intense heatwave. But there’re also some wrong sides to this, as excess rain can destroy several crops, fruits, and make the situation harder for poor people.

                        </div><br/><br/>
                    </div>
                </div>
            </div>
            </div>

            </>
         )
}

export default Home;