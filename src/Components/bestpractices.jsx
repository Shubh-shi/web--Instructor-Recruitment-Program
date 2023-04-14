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
import AOS from "aos";
import "aos/dist/aos.css";
import Iframe from "react-iframe";
import './Nav.css';

const Bestpractices = () => {
  AOS.init({ duration: 1000 });
  return (
    <>
    <Grid container sx={{ px:7,py:5 }} data-aos="fade-zoom-in">
      


        <Box sx={{display: { xs: "block", lg: "none" } }}>
        
        <Typography
          sx={{
            fontSize: "1.3rem",
            color: "#fff",
            mb: 1,
           
            fontWeight: "bold",
            fontFamily: "Segoe UI",
          }}
        >
          To ensure students love your delivery style, we have
        </Typography>
        <Box  sx={{  }}>
          <Typography
            sx={{
              background: "rgba(144,144,144,0.25)",
              px: 1,
              mb: 0.7,
              maxWidth: "240px",
              borderRadius: "5px",
              fontSize: "1.3rem",
              color: "#fff",
            
              fontWeight: "bold",
              fontFamily: "Segoe UI",
            }}
          >
            5 Step Framework
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#fff",
              mb: 1,
            
              ml: 1,
              fontWeight: "bold",
              fontFamily: "Segoe UI",
            }}
          >
            for your perusal
          </Typography>
        </Box>
      </Box>
      <Grid lg={6} md={6} sm={6} sx={{background:"linear-gradient(-168.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)",py:2,px:2,borderRadius:"8px"}}>
      <Box sx={{display: { xs: "none", lg: "block" }}}>
        
        <Typography
          sx={{
            fontSize: "1.3rem",
            color: "#fff",
            mb: 1,
            // textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Segoe UI",
          }}
        >
          To ensure students love your delivery style, we have
        </Typography>
        <Box display={"flex"} sx={{  }}>
          <Typography
            sx={{
              background: "rgba(144,144,144,0.25)",
              px: 1,
              mb: 0.7,
              maxWidth: "240px",
              borderRadius: "5px",
              fontSize: "1.3rem",
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Segoe UI",
            }}
          >
            5 Step Framework
          </Typography>
          <Typography
            sx={{
              fontSize: "1.3rem",
              color: "#fff",
              mb: 1,
              textAlign: "center",
              ml: 1,
              fontWeight: "bold",
              fontFamily: "Segoe UI",
            }}
          >
            for your perusal
          </Typography>
        </Box>
      </Box>
        <Box sx={{  mt: 3, mb: 3,display: { xs: "none", lg: "block" } }}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
            }}
          >
            1. Context setting
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
            }}
          >
            2. Analogy driven explanation
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
            }}
          >
            3. Practical use cases from your own experience
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
         
            }}
          >
            4. Practical use cases from participants current experience or area
            of work
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
            }}
          >
            5. Summarize and wrap up topic
          </Typography>
        </Box>
        <Box sx={{ mt: 3, mb: 3,display: { xs: "block", lg: "none" } }}>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
            }}
          >
            1. Context setting
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
            }}
          >
            2. Analogy driven explanation
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
            }}
          >
            3. Practical use cases from your own experience
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
              width: "600px",
            }}
          >
            4. Practical use cases from participants current experience or area
            of work
          </Typography>
          <Typography
            sx={{
              fontSize: "1.1rem",
              color: "#fff",
              fontFamily: "Segoe UI",
              mb: 2,
            }}
          >
            5. Summarize and wrap up topic
          </Typography>
        </Box>


      </Grid>
      <Grid lg={6} md={6} sm={6}>
        <Box sx={{ ml:3,display: { xs: "none", lg: "block" } }}>
          <Iframe
            url="https://www.youtube.com/embed/q1HZj40ZQrM"
            width="607px"
            height="347px"
            id=""
            className="frem"
            display="block"
            position="relative"
          />
        </Box>
        <Box sx={{ mt:8,ml:1,display: { xs: "block", lg: "none" } }}>
          <Iframe
            url="https://www.youtube.com/embed/q1HZj40ZQrM"
            width="380px"
            height="187px"
            id=""
            className="frem"
            display="block"
            position="relative"
          />
        </Box>
      </Grid>
    </Grid>
            <Box sx={{ pl: 12, mt: 3, display: { xs: "none", lg: "block" }}}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: "#fff",
                fontFamily: "Segoe UI",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Watch <b style={{ color: "#ff6961" }}>video</b> to know more!
            </Typography>
          </Box>
          <Box sx={{ mt: 3,display: { xs: "block", lg: "none" } }}>
            <Typography
              sx={{
                fontSize: "1.25rem",
                color: "#fff",
                fontFamily: "Segoe UI",
              
                fontWeight: "bold",
              }}
            >
              Watch <b style={{ color: "#ff6961" }}>video</b> to know more!
            </Typography>
          </Box>
          </>
  );
};
export default Bestpractices;
