// import React, {  useEffect, useState } from 'react';

// function Updat() {


//     const[data, setData] = useState([]);

//     const getCovidData = async() =>{
//       try{
//        const res = await fetch('https://api.covid19india.org/data.json');
//        const actualData = await res.json();
//        console.log(actualData.statewise[0]);
//        setData(actualData.statewise[0]);
//       }catch(err) {
//         console.log(err)
//       }
//       // fetch('https://api.covid19india.org/data.json');
//     }
  
  
//     useEffect(() => {
//       getCovidData();
//     }, []);
//     return (
//         <div>
//             <h1>update</h1>
//             <p>{data.lastupdatedtime}</p>
//         </div>
//     )
// }

// export default Updat
