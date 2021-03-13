import React, { useState } from 'react';
import Axios from 'axios';
import '../css/weather.css';
import Suny from '../pic/suny.png';
import Hazy from '../pic/hazy.png';
import Cloudy from '../pic/cloudy.png';
import Smoke from '../pic/smoke.png';

const Weather = () =>{
        
        const arr=[Suny,Hazy,Cloudy,Smoke];
        const [city,setCity]=useState(" ");
        const [temp,setTemp]=useState(" ");
        const [humidity,setHumidity]=useState(" ");
        const [main,setMain]=useState(" ");
        const [cname,setCname]=useState(" ");
        const [img,setImg]=useState(" ");
       
      


    const weatherData = () =>{
        
     var Data =  Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6278a146183c12163e4e6bd6aadab148`).then((Datas)=>{
        //  console.log(data.data.main.humidity);
        setHumidity(Datas.data.main.humidity);
        setCname(Datas.data.name);
        setTemp(Datas.data.main.temp);
        setMain(Datas.data.weather[0].main)
        

        switch (Datas.data.weather[0].main) {
            case 'Clouds':
                console.warn("clouds");           
               setImg(arr[2])
                break;
            case "Smoke":
                setImg(arr[3])
                break;
            case "Haze":
                setImg(arr[1])
                break;
            default:
                setImg(arr[0])
        }
        
     }).catch((err)=>{
         console.log(err);
     });
     

    }
    return(
        <>
        
      
            <div className="container mt-2 conWeather">
            <div className="searchBox pt-4 pb-3">
        <input className="searchInput" type="text" placeholder="search" required onChange={(e)=>{setCity(e.target.value)}}/><i className="fa fa-search fa-2x searchBar" onClick={weatherData}/>
        </div>
                <div className="row">
                    <div className="col-12">
                        <div className="row pt-3 rowContainer">
                            <h1>{}</h1>
                            <div className="col-lg-6  ">
                            {(cname!==" ") ? 
                             <>
                              
                            <img  className="temp_img" src={img}  alt="error"/>
                            
                           
                             </>
                            
                           : null}
                            
                            </div>

                            <div className="col-lg-6  ">
                               
                     {(cname!==" ") ?
                     <>
                      TEMPERA : {temp}F <br/>
                      HUMIDITY : {humidity} <br/>
                      WEATHER : {main} <br/>

                      </> :
                      
                      null }
                                    
                            </div>

                        </div>

                        
                    </div>
                </div>
                <br/><br/>
            </div>
            </>
          )
}

export default Weather;