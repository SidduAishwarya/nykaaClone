import React from 'react'
import './Footer1.css'
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CallIcon from '@mui/icons-material/Call';


const theme = createTheme({
  palette: {
    neutral: {
      main: '#ffff',
      contrastText: '#fff',
    },
  },
});

const theme1 = createTheme({
  palette: {
    neutral: {
      main: '#ffff',
      contrastText: '#3f414d',
    },
  },
});

const Footer1 = () => {
  return (
    <div className='footer1'>
      <div>
      <div className='division1'>
      <div style={{paddingRight: "5px"}}>
      <EmailIcon />
      </div>
      <div>
      Get special discount on your inbox
      </div>
      </div>
      <div style={{display:"flex"}}>
      <div className='division12'>
      
      <ThemeProvider theme={theme1}>
      <TextField id="standard-basic" label="Your Email" variant="standard" color="neutral" focused />
      </ThemeProvider>
      </div>
   <div style={{paddingTop:"33px"}}>
   <ThemeProvider theme={theme}>
      <Button color="neutral" variant="outlined" >
        Sign in
      </Button>
    </ThemeProvider>
    </div>
   </div>
  </div>
    <div className='division2'>
      <div style={{display: "flex"}}>
    <div style={{paddingRight: "5px"}}>
    <PhoneAndroidIcon/>
    </div>
    <div>
      EXPERIENCE THE NYKAA MOBILE APP
      </div>
      </div>
    <div>
    <a class="btn btn-google" href="/" title="Google Play">Google Play</a>
    </div>
    </div>
      
    <div className='division2'>
    <div style={{display: "flex"}}>
    <div style={{paddingRight: "5px"}}>
      <CallIcon/>
      </div>
      <div>
      FOR ANY HELP, YOU MAY CALL US AT
      <br />
      1800-267-4444
      <br />
      <br />
       Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM
       </div>
      </div>
      </div>
    </div>
  )
}

export default Footer1
