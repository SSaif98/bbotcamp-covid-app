import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
   maxWidth: 1000,
   margin: '0 auto',
   marginTop: 50
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CountryPanel() {
  const classes = useStyles();

  const [info, setInfo] = useState({})

  const [pak, setPak] = useState({})
  const [aus, setAus] = useState({})
  const [hu, setHu] = useState({})
  const [iq, setIq] = useState({})
  const [jp, setJp] = useState({})
  const [ua, setUa] = useState({})


  useEffect(() => {
    async function covidData(){
        const infoCountry = await fetch('https://covid19.mathdro.id/api/countries').then(response=> response.json());
        console.log(infoCountry)
        setInfo(infoCountry)

        const pakInfo = await fetch('https://covid19.mathdro.id/api/countries/pak').then(response=> response.json());
        const ausInfo = await fetch('https://covid19.mathdro.id/api/countries/aus').then(response=> response.json());
        const huInfo = await fetch('https://covid19.mathdro.id/api/countries/hu').then(response=> response.json());
        const iqInfo = await fetch('https://covid19.mathdro.id/api/countries/iq').then(response=> response.json());
        const jpInfo = await fetch('https://covid19.mathdro.id/api/countries/jp').then(response=> response.json());
        const uaInfo = await fetch('https://covid19.mathdro.id/api/countries/ua').then(response=> response.json());

        setPak(pakInfo);
        setAus(ausInfo);
        setHu(huInfo);
        setIq(iqInfo);
        setJp(jpInfo);
        setUa(uaInfo);

    }
    covidData(); 
   
  },[])
  let count=0;
     return (
            <div className={classes.root}>
            <Grid className={classes.al} container spacing={3}>
                {Object.keys(pak).map((key,ind)=>{
                    if(count===0){
                        count++;
                        return(
                            <Grid  item xs={12} sm={8} key={ind}>
                            <Paper 
                                className={classes.paper} 
                                elevation={3}>
                                    <h3 style={{color: 'blue'}} >Pakistan</h3>
                                    <h3 style={{color: 'gray'}}>CONFIRMED : {pak.confirmed.value}</h3>
                                    <h3 style={{color: 'green'}}>RECOVERED : {pak.recovered.value}</h3>
                                    <h3 style={{color: 'red'}}>DEATHS : {pak.deaths.value}</h3>
                            </Paper>
                        </Grid>   
                        )
                    }
                })}

            {Object.keys(aus).map((key,ind)=>{
                    if(count===1){
                        count++;
                        return(
                            <Grid  item xs={12} sm={8} key={ind}>
                            <Paper 
                                className={classes.paper} 
                                elevation={3}>
                                    <h3 style={{color: 'blue'}} >AUSTRALIA</h3>
                                    <h3 style={{color: 'gray'}}>CONFIRMED : {aus.confirmed.value}</h3>
                                    <h3 style={{color: 'green'}}>RECOVERED :{aus.recovered.value}</h3>
                                    <h3 style={{color: 'red'}}>DEATHS : {aus.deaths.value}</h3>
                            </Paper>
                        </Grid>   
                        )
                    }
                })}

{Object.keys(hu).map((key,ind)=>{
                    if(count===2){
                        count++;
                        return(
                            <Grid  item xs={12} sm={8} key={ind}>
                            <Paper 
                                className={classes.paper} 
                                elevation={3}>
                                    <h3 style={{color: 'blue'}} >HUNGARY</h3>
                                    <h3 style={{color: 'gray'}}>CONFIRMED :{hu.confirmed.value}</h3>
                                    <h3 style={{color: 'green'}}>RECOVERED :{hu.recovered.value}</h3>
                                    <h3 style={{color: 'red'}}>DEATHS :{hu.deaths.value}</h3>
                            </Paper>
                        </Grid>   
                        )
                    }
                })}
                   {Object.keys(iq).map((key,ind)=>{
                    if(count===3){
                        count++;
                        return(
                            <Grid  item xs={12} sm={8} key={ind}>
                            <Paper 
                                className={classes.paper} 
                                elevation={3}>
                                    <h3 style={{color: 'blue'}}  >IRAQ</h3>
                                    <h3 style={{color: 'gray'}}>CONFIRMED :{iq.confirmed.value}</h3>
                                    <h3 style={{color: 'green'}}>RECOVERED :{iq.recovered.value}</h3>
                                    <h3 style={{color: 'red'}}>DEATHS :{iq.deaths.value}</h3>
                            </Paper>
                        </Grid>   
                        )
                    }
                })}
                   {Object.keys(jp).map((key,ind)=>{
                    if(count===4){
                        count++;
                        return(
                            <Grid  item xs={12} sm={8} key={ind}>
                            <Paper 
                                className={classes.paper} 
                                elevation={3}>
                                    <h3  style={{color: 'blue'}}>JAPAN</h3>
                                    <h3 style={{color: 'gray'}}>CONFIRMED :{jp.confirmed.value}</h3>
                                    <h3 style={{color: 'green'}}>RECOVERED :{jp.recovered.value}</h3>
                                    <h3 style={{color: 'red'}}>DEATHS :{jp.deaths.value}</h3>
                            </Paper>
                        </Grid>   
                        )
                    }
                })}
                   {Object.keys(ua).map((key,ind)=>{
                    if(count===5){
                        count++;
                        return(
                            <Grid  item xs={12} sm={8} key={ind}>
                            <Paper 
                                className={classes.paper} 
                                elevation={3}>
                                    <h3 style={{color: 'blue'}} >UKRAIN</h3>
                                    <h3 style={{color: 'gray'}}>CONFIRMED :{ua.confirmed.value}</h3>
                                    <h3 style={{color: 'green'}}>RECOVERED :{ua.recovered.value}</h3>
                                    <h3 style={{color: 'red'}}>DEATHS :{ua.deaths.value}</h3>
                            </Paper>
                        </Grid>   
                        )
                    }
                })}
                </Grid>
            </div>
  );
}



