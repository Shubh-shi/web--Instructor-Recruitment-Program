import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Paper,
  Container,
  Grid,
  CardMedia,
  Badge,
  Popover,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Iframe from 'react-iframe'
import './Nav.css';

const Newdemo = () => {
    AOS.init({ duration: 1000});
    return (
<Grid container data-aos="fade-zoom-in" sx={{px:3,mb:3,py:5}}>
<Grid lg={6} md={6} sm={6}>
<Box sx={{display: { xs: "none", lg: "block" }}}>
<Typography sx={{fontSize:"1.5rem",color:"#fff",mb:1,mb:2}}>Dear Instructor,</Typography>
        <Typography sx={{fontSize:"1.5rem",color:"#fff",display:"flex"}}>Thank you for your interest in INSAID Instructor Recruitment Program. </Typography>
       
          <Typography sx={{fontSize:"1.5rem",color:"#fff"}}>We have curated a <u>special video</u> for helping you through the entire evaluation process.
Wish you luck with the process and we are eager to  work with you</Typography>

<Typography sx={{fontSize:"1.5rem",color:"#fff"}}>Regards,</Typography>
<Typography sx={{fontSize:"1.5rem",color:"#fff"}}>Suchit</Typography>
<Typography sx={{fontSize:"1.5rem",color:"#fff"}}>CPO, INSAID</Typography>
</Box>
<Box sx={{px:2,display: { xs: "block", lg: "none" }}}>
        <Typography sx={{fontSize:"1.5rem",color:"#fff",mb:1}}>Dear Instructor,</Typography>
        <Typography sx={{fontSize:"1.5rem",color:"#fff"}}>Thank you for your interest in</Typography>
        <Typography
            sx={{ flexGrow: 1,background:"rgba(144,144,144,0.25)",px:4,maxWidth:"470px",borderRadius:"5px",fontSize:"1.5rem",color:"#fff"}}
          >
         INSAID Instructor Recruitment Program
          </Typography>
          <Typography sx={{fontSize:"1.5rem",color:"#fff"}}>We have curated a special video for helping you through the entire evaluation process.
Wish you luck with the process and we are eager to </Typography>
<Typography sx={{fontSize:"1.5rem",color:"#fff",mb:2}}>work with you</Typography>
<Typography sx={{fontSize:"1.5rem",color:"#fff"}}>Regards,</Typography>
<Typography sx={{fontSize:"1.5rem",color:"#fff"}}>Suchit</Typography>
<Typography sx={{fontSize:"1.5rem",color:"#fff"}}>CPO, INSAID</Typography>
</Box>
    </Grid>
    <Grid lg={6} md={6} sm={6}>
    <Box sx={{display: { xs: "none", lg: "block" },mt:1,mb:3}}>
        <Box sx={{mb:3}}>
 
         
        
          </Box>
<Box sx={{ml:2}}> 
   <Iframe url="https://www.youtube.com/embed/q1HZj40ZQrM"
        width="627px"
        height="347px"
        id=""
        className="frem"
        display="block"
        position="relative"
       
        
        />
  </Box>
     
    
    </Box>
    <Box sx={{px:1,mt:2,ml:1,display: { xs: "block", lg: "none" }}}>
    <Iframe url="https://www.youtube.com/embed/q1HZj40ZQrM"
         width="380px"
        height="247px"
        id=""
        className=""
        display="block"
        position="relative"/>
    
    </Box>


    </Grid>
   
</Grid>

        );
    };
    export default Newdemo;
