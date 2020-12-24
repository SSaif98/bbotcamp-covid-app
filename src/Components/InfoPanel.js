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

export default function InfoPanel() {
  const classes = useStyles();

  const [info, setInfo] = useState({})
  useEffect(() => {
    async function covidData(){
        const response = await fetch('https://covid19.mathdro.id/api');
        let data = await response.json();
        console.log(data);
        setInfo(data)
    }
    covidData(); 
   
  },[])
  let count=0;
     return (
            <div className={classes.root}>
            <Grid className={classes.al} container spacing={3}>
        {Object.keys(info).map((key, ind) => {
            if (count===0){
                count++
            return (
                <Grid  item xs={12} sm={8} key={ind}>
                    <Paper 
                        className={classes.paper} 
                        elevation={3}>
                            <h3  style={{color: 'lightGreen'}}>
                           {key.toUpperCase()}
                                
                            </h3>
                            <h3>{info.confirmed.value}</h3>
                    </Paper>
                </Grid>    
            )}
            if (count===1){
                count++
            return (
                <Grid item xs={12} sm={8} key={ind}>
                    <Paper 
                        className={classes.paper} 
                        elevation={3}>
                            <h3  style={{color:"green"}}>  
                            {key.toUpperCase()}
                            </h3>
                            <h3>{info.recovered.value}</h3>
                    </Paper>
                </Grid>
                
            )
           
                    }
                    if (count===2){
                    count++
                    return (
                    <Grid item xs={12} sm={8} key={ind}>
                        <Paper 
                            className={classes.paper} 
                            elevation={3}>
                                <h3  style={{color:"red"}}>
                                {key.toUpperCase()}
                                    
                                </h3>
                                <h3>{info.deaths.value}</h3>
                        </Paper>
                        </Grid>
                        )}})}
                    </Grid>
                    </div>
  );
}