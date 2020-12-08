import React, {useEffect, useState} from "react";
 import axios from "axios"
 import '../App.css'
import NumberFormat from 'react-number-format'

const Indo = () => {
    const [confirmed, setJumlahKasus] = useState("");
    const [deaths, setMeninggal] = useState("");
    const [recovered, setSembuh] = useState("");
    useEffect(() => {
      axios 
       .get("https://indonesia-covid-19.mathdro.id/api")
       .then((response) =>
  
       
       { 
      setJumlahKasus(response.data.jumlahKasus);
       setMeninggal(response.data.meninggal);
       setSembuh(response.data.sembuh);
      })  
   }, []);
  
   return (
  
    <div>
        <font color="Black"><b>Jumlah Kasus Positif <font color='red'><i>Covid-19</i></font> di INDONESIA</b></font>
        <br></br>
        <h1 className ="TabConfirmed">Confirmed <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}></NumberFormat></h1>
        <h1 className ="TabDeaths">Deaths <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}></NumberFormat></h1>
        <h1 className ="TabRecovered">Recovered <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}></NumberFormat></h1>
    </div>
  )
  
    
  };
  export default Indo;

