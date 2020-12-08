import React, {useEffect, useState} from "react";
import axios from "axios"
import '../App.css'
import NumberFormat from 'react-number-format'

const World = () => {
    const [confirmed, setConfirmed] = useState("");
    const [deaths, setDeaths] = useState("");
    const [recovered, setRecovered] = useState("");
    useEffect(() => {
      axios 
       .get("https://covid19.mathdro.id/api")
       .then((response) =>
       { 
      setConfirmed(response.data.confirmed.value);
       setDeaths(response.data.deaths.value);
       setRecovered(response.data.recovered.value);
      })  
   }, []);
  
   return (
     
    <div>
        <font color="Black"><b>Jumlah Kasus Positif <font color='red'><i>Covid-19</i></font> di DUNIA</b></font>
        <br></br>
        <h1 className ="TabConfirmed">Confirmed <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}></NumberFormat></h1>
        <h1 className ="TabDeaths">Deaths <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}></NumberFormat></h1>
        <h1 className ="TabRecovered">Recovered <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}></NumberFormat></h1>
    </div>
    )
   
  };
  export default World;

