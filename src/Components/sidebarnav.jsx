import React, { useState, useEffect } from "react";
import {
  Typography,
  Button,
  Box,
  Paper,

} from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import TaskIcon from "@mui/icons-material/Task";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import StarIcon from '@mui/icons-material/Star';
// import "./dashboard.css";

const Sidbar = () => {
  let navigate = useNavigate();
  const { pathname } = useLocation();

 
  // Use for Navigate on Previous


  return (
    <>
    
<Box sx={{ position: "sticky",top:70}}>
        <Paper
          sx={{
            py: 2,
            width: "225px",
            mx: 3,
            height: "350px",
            pl: 1,
            pr:2,
            // boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px",
            boxShadow:"rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
            // boxShadow:"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
            // background: "rgb(217, 217, 217)",
            // border: "1px solid #0099e6",
           
            borderRadius: "8px",
          }}
         
        >
   
          <Box sx={{ py:5,}}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#262626",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  display: "flex",
                  marginBottom: "1rem !important",
                  width: "300px",
                  "&:hover": { background: "transparent", color: "#000" },
                  pl: 1.1,
                }}
                className={pathname === "/" ? "dashactive" : ""}
              >
                <CottageIcon sx={{ fontSize: "1.2rem", mr: 2 }} />
                Home
              </Typography>
            </Link>
            <Link to="/bestpractices" style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                color: "#262626",
                fontSize: "0.92rem",
                fontWeight: 600,
                display: "flex",
                marginBottom: "1rem !important",
                width: "300px",
                "&:hover": { background: "transparent", color: "#000" },
                pl: 1.1,
              }}
        
            >
              <StarIcon sx={{ fontSize: "1.2rem", mr: 2 }} />
              Best Practices
            </Typography>
            </Link>
         
      

            <Link to="/sample/DS" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#262626",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  display: "flex",
                  marginBottom: "1rem !important",
                  width: "300px",
                  "&:hover": { background: "transparent", color: "#000" },
                  pl: 1.1,
                }}
                className={
                  pathname === "/Certification-Exam" ? "dashactive" : ""
                }
              >
                <FeaturedVideoIcon sx={{ fontSize: "1.2rem", mr: 2 }} />
                Sample
              </Typography>
            </Link>
            <Link to="/form" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  color: "#262626",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  display: "flex",
                  marginBottom: "1rem !important",
                  width: "300px",
                  "&:hover": { background: "transparent", color: "#000" },
                  pl: 1.1,
                }}
                className={pathname === "/Calendar" ? "dashactive" : ""}
              >
                <EditLocationAltIcon sx={{ fontSize: "1.2rem", mr: 2 }} />
                Demo
              </Typography>
            </Link>
</Box>
</Paper>
</Box>

      </>
    
  


  );
 
};
export default Sidbar;
