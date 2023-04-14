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

const DemoHome = () => {
    AOS.init({ duration: 1000});
    return (
<Grid container data-aos="fade-zoom-in" sx={{px:8}}>

    <Grid lg={12} md={6} sm={6}>
        <Box sx={{display: { xs: "none", lg: "block" }}}>
        <Typography sx={{fontSize:"1.3rem",color:"#000",mb:1,fontFamily:"Inconsolata-Regular",mb:2}}>Dear Instructor,</Typography>
        <Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular",display:"flex"}}>Thank you for your interest in  <Typography
            sx={{ flexGrow: 1,background:"rgba(144,144,144,0.25)",px:4,maxWidth:"470px",borderRadius:"5px",fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular",ml:2}}
          >
         INSAID Instructor Recruitment Program
          </Typography></Typography>
       
          <Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>We have curated a <u>special video</u> for helping you through the entire evaluation process.
Wish you luck with the process and we are eager to </Typography>
<Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular",mb:2}}>work with you</Typography>
{/* <Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>Regards,</Typography>
<Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>Suchit</Typography>
<Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>CPO, INSAID</Typography> */}
</Box>
<Box sx={{px:2,display: { xs: "block", lg: "none" }}}>
        <Typography sx={{fontSize:"1.3rem",color:"#000",mb:1,fontFamily:"Inconsolata-Regular"}}>Dear Instructor,</Typography>
        <Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>Thank you for your interest in</Typography>
        <Typography
            sx={{ flexGrow: 1,background:"rgba(144,144,144,0.25)",px:4,maxWidth:"470px",borderRadius:"5px",fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}
          >
         INSAID Instructor Recruitment Program
          </Typography>
          <Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>We have curated a special video for helping you through the entire evaluation process.
Wish you luck with the process and we are eager to </Typography>
<Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular",mb:2}}>work with you</Typography>
<Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>Regards,</Typography>
<Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>Suchit</Typography>
<Typography sx={{fontSize:"1.3rem",color:"#000",fontFamily:"Inconsolata-Regular"}}>CPO, INSAID</Typography>
</Box>

    </Grid>
    <Grid lg={12} md={6} sm={6}>
        <>
    <Box sx={{display: { xs: "none", lg: "block" },mt:1,mb:3}}>
    <Iframe url="https://www.youtube.com/embed/q1HZj40ZQrM"
        width="1027px"
        height="447px"
        id=""
        className=""
        display="block"
        position="relative"/>
     
    
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
    </>
    </Grid>
</Grid>

        );
    };
    export default DemoHome;
