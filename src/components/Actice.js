import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Actice() {

    const[data, setData] = useState([]);

    const getCovidData = async() =>{
      try{
       const res = await fetch('https://api.covid19india.org/data.json');
       const actualData = await res.json();
       console.log(actualData.statewise[0]);
       setData(actualData.statewise[0]);
      }catch(err) {
        console.log(err)
      }
      // fetch('https://api.covid19india.org/data.json');
    }
  
  
    useEffect(() => {
      getCovidData();
    }, []);
    return (
        // <div>
        //     <h1>ACTIVE</h1>
        //     <p>{data.active}</p>
        // </div>

         
        <div className="recover_area">
        <navbar>
            <div className="logo">
                <span className="logo_c">C</span>ovid
            </div>
            <div className="nav_right">
                <Link to="/"><h3>Home</h3></Link>
            </div>
        </navbar>
        <h2 className="recover_head">ACTIVE CASE</h2>

        <p>{data.active}</p>


        <p>{data.lastupdatedtime}</p>
    </div>
    )
}

export default Actice;
