import React, {  useEffect } from 'react';
import './Covid.css';
import { Link } from 'react-router-dom';
// import Recovred from './Recovred';

// import Recovred from './Recovred';

export const Covid = () => {


    const getCovidData = async() =>{
      try{
       const res = await fetch('https://api.covid19india.org/data.json');
       const actualData = await res.json();
       console.log(actualData.statewise[0]);
      }catch(err) {
        console.log(err)
      }
    }
  
  
    useEffect(() => {
      getCovidData();
    }, []);
    return (
        <div>
            <section>

            <nav>
              <li>
               <Link to="/recovred"> <a>RECOVERED</a></Link>
               <Link to="/confirmed"> <a>CONFIRMED</a></Link>
               <Link to="/deaths"> <a>DEATHS</a></Link>
               <Link to="/actice"><a>ACTIVE</a></Link>
                
              </li>
            </nav>
            <h1> <span className="live">.</span>  Live</h1>
            <h2>covid-19 CORANAVIRUS TRACKER</h2>

            
            
            
            <div className="box">
              
              <div className="heading_one"><span className="box1_text">our</span>COUNTRY</div>
              <div className="box1_text2">INDIA</div>
              

             
             
            </div>
            </section>
        </div>
       
    )
}
export default Covid;
