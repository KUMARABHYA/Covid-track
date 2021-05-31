import React, {  useEffect, useState } from 'react';
import './Recovred.css';
import { Link } from 'react-router-dom';



function Recovred() {

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
    }
  
  
    useEffect(() => {
      getCovidData();
    }, []);
    return (
        <div className="recover_area">
            <navbar>
                <div className="logo">
                    <span className="logo_c">C</span>ovid
                </div>
                <div className="nav_right">
                    <Link to="/"><h3>Home</h3></Link>
                </div>
            </navbar>
            <h2 className="recover_head">RECOVERED CASE</h2>

            <p>{data.recovered}</p>
            <p>{data.lastupdatedtime}</p>

        </div>
    )
}

export default Recovred;
