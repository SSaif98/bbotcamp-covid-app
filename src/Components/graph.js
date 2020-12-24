import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';





export default function GraphicalStats(){

    var pakc, pakr, pakd;
    var ausc,ausr,ausd;
    var huc,hur,hud;
    var iqc ,iqr,iqd;
    var jpc,jpr,jpd;
    var uac,uar,uad;

    
    const [pak, setPak] = useState({})
    const [aus, setAus] = useState({})
    const [hu, setHu] = useState({})
    const [iq, setIq] = useState({})
    const [jp, setJp] = useState({})
    const [ua, setUa] = useState({})

    useEffect(()=>{
        async function graphicalData(){
           
            const pakInfo = await fetch('https://covid19.mathdro.id/api/countries/Pakistan').then(response=> response.json());
            const ausInfo = await fetch('https://covid19.mathdro.id/api/countries/Australia').then(response=> response.json());
            const huInfo = await fetch('https://covid19.mathdro.id/api/countries/Hungary').then(response=> response.json());
            const iqInfo = await fetch('https://covid19.mathdro.id/api/countries/Iraq').then(response=> response.json());
            const jpInfo = await fetch('https://covid19.mathdro.id/api/countries/Japan').then(response=> response.json());
            const uaInfo = await fetch('https://covid19.mathdro.id/api/countries/Italy').then(response=> response.json());
        
            setPak(pakInfo);
            setAus(ausInfo);
            setHu(huInfo);
            setIq(iqInfo);
            setJp(jpInfo);
            setUa(uaInfo);    
        }
            graphicalData();
    },[])

   
        const data = {
            labels: ['Pakistan', 'Australia', 'Hungary', 'Iraq', 'Japan', 'Ukrain'],
            datasets: [
              {
                label: 'Confirmed',
                backgroundColor: 'blue',
                borderWidth: 1,
                hoverBackgroundColor: 'lightBlue',
                data: [pakc, ausc, huc, iqc, jpc, uac]
              },
              {
                  label: 'Recovered',
                  backgroundColor: 'green',
                  borderWidth: 1,
                  hoverBackgroundColor: 'lightGreen',
                  data: [pakr, ausr, hur, iqr, jpr, uar]
                }, {
                  label: 'Deaths',
                  backgroundColor: 'red',
                  borderWidth: 1,
                  hoverBackgroundColor: 'lightRed',
                  data: [pakd, ausd, hud, iqd, jpd, uad]
                }
            ]
          };
          
    return (
      <div>
        <h2>Covid-19 Grahical Stats</h2>
                            <Bar
                            data={data}
                            width={100}
                            height={50}
                            options={{
                              maintainAspectRatio: false
                            }}
                          />   
                           {Object.keys(pak).map((key,ind)=>{
         return(
             <div key={ind}>
            {  pakc = pak.confirmed.value}
           { pakr = pak.recovered.value}
            {pakd = pak.deaths.value}
             </div>
         )
        
    })}


    {Object.keys(aus).map((key,ind)=>{
     return(
         <div>
               { ausc = aus.confirmed.value}
       { ausr = aus.recovered.value}
        {ausd = aus.deaths.value}
         </div>
     )
    
        })}

        {Object.keys(hu).map((key,ind)=>{
           return(
               <div>
                   { huc = hu.confirmed.value}
           { hur = hu.recovered.value}
            {hud = hu.deaths.value}

               </div>
           )
        })}

        {Object.keys(iq).map((key,ind)=>{
           return(
               <div>
                   { iqc = iq.confirmed.value}
           { iqr = iq.recovered.value}
            {iqd = iq.deaths.value}
               </div>
           )

        })}

        {Object.keys(jp).map((key,ind)=>{
            return(
               <div>
                {jpc = jp.confirmed.value}
                {jpr = jp.recovered.value}
                {jpd = jp.deaths.value}
               </div> 
            )
           

        })}

        {Object.keys(ua).map((key,ind)=>{
            return(
                <div>
                     { uac = ua.confirmed.value}
                     {  uar = ua.recovered.value}
                    {uad = ua.deaths.value}
                </div>
            )
          

        })}
                      

          
               
      </div>
    );
  }
