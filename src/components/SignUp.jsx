import React from 'react';
import { useState } from 'react';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';

export const SignUp = () => {
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        dob:'',
    });
    const [list, setList] = useState([]);
    const { first_name, last_name, dob } = data;
    
    const handleChange = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSignUp = () => {
        // console.log(data);
        if (!data.last_name || !data.first_name || !data.dob) {
            alert('Please check the details');
        }
        else {
            setList([...list, data]);
            alert('Registration Successful');
            // console.log(list);
        }
        
    }
    
    const handleList = () => {  
        console.log(list);
    }

    return (
        <div>
            
            <Typography gutterBottom variant="h4" align="center">
        Material UI
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Registration Form
          </Typography> 
            <form onSubmit={(e)=>e.preventDefault()}>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField onChange={handleChange} name="first_name" value={first_name} type="text" placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} item>
                  <TextField onChange={handleChange} name='last_name' value={last_name} type="text" placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField onChange={handleChange} name='dob' value={dob} type="text" placeholder="Enter date of birth" label="DOB" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={handleSignUp} type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
                        </form>

                    </CardContent>    
                
                </Card>

            </Grid>
            <center style={{margin:'10px'}}>
                <button onClick={handleList} style={{backgroundColor:'#3f51b4',border:'none',width:'100px',height:'30px',borderRadius:'5px',color:'white'}}>Users</button>
            </center>

        </div>
    )
}

    
    