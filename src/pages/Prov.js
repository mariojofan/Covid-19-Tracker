import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../App.css'
import NumberFormat from "react-number-format"

export default function Prov (){
    const [provinceData, getProvince] = useState([]);
    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then(response => {getProvince(response.data.data)})
            .catch(err => {console.log(err)})
    }, []);
    console.log(provinceData)
    return(
        <div align="center">
            <div align='center'><b>Jumlah Kasus Positif <font color='red'><i>Covid-19</i></font> di Setiap Provinsi</b></div>
            <p></p>
            <table border="1">
                <tr>
                    <th className="table-value-first">Province Of Indonesia</th>
                    <th className="table-value-second">Confirmed</th>
                    <th className="table-value-third">Deaths</th>
                    <th className="table-value-fourth">Recovered</th>
                </tr>
                {provinceData.map((item, index) => {
                    return(
                        <tr>
                            <th className="table-value-firtst">{item.provinsi}</th>
                            <th className="table-value-second"><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-value-third"><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></th>
                            <th className="table-value-fourth"><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></th>
                        </tr>
                    )
                })}
            </table>
        </div>    
    )
}
