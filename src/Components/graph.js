import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';





export default function GraphicalStats(){

    var pakc, pakr, pakd;
    var ausc,ausr,ausd;
    var huc,hur,hud;
    var iqc ,iqr,iqd;
    var jpc,jpr,jpd;
    var uac,uar,uad;

    const [info, setInfo] = useState({})
    const [pak, setPak] = useState({})
    const [aus, setAus] = useState({})
    const [hu, setHu] = useState({})
    const [iq, setIq] = useState({})
    const [jp, setJp] = useState({})
    const [ua, setUa] = useState({})

    useEffect(()=>{
        async function graphicalData(){
            const info = await fetch("https://covid19.mathdro.id/api/countries").then(response => response.json());
            console.log(info);
            setInfo(info);

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

    {Object.keys(pak).map((key,ind)=>{
            pakc = pak.confirmed.value
            pakr = pak.recovered.value
            pakd = pak.deaths.value
        
    })}


    {Object.keys(aus).map((key,ind)=>{
        ausc = aus.confirmed.value
        ausr = aus.recovered.value
        ausd = aus.deaths.value
    
        })}

        {Object.keys(hu).map((key,ind)=>{
            huc = hu.confirmed.value
            hur = hu.recovered.value
            hud = hu.deaths.value

        })}

        {Object.keys(iq).map((key,ind)=>{
            iqc = iq.confirmed.value
            iqr = iq.recovered.value
            iqd = iq.deaths.value

        })}

        {Object.keys(jp).map((key,ind)=>{
            jpc = jp.confirmed.value
            jpr = jp.recovered.value
            jpd = jp.deaths.value

        })}

        {Object.keys(ua).map((key,ind)=>{
            uac = ua.confirmed.value
            uar = ua.recovered.value
            uad = ua.deaths.value

        })}
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
                      

          
               
      </div>
    );
  }
