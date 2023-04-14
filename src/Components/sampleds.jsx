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
import Iframe from "react-iframe";
import CheckIcon from "@mui/icons-material/Check";
import AOS from "aos";
import "aos/dist/aos.css";
import './Nav.css';

const DSsample = () => {
  AOS.init({ duration: 1000 });
  return (
    <>
      <Box sx={{px:5,display: { xs: "none", lg: "block" },py:5}} data-aos="fade-zoom-in">
        <Grid container >
          <Grid lg={12} md={12} sm={12} sx={{background:"linear-gradient(-168.39deg,#ffffff -278.56%,#6d6d6d -78.47%,#11101d 91.61%)",pt:2,pb:10,px:5,borderRadius:"8px"}}>
            
              <Grid container>
                <Grid lg={6} md={4} sm={4} >
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      fontFamily: "Segoe UI",
                      mb: 2,
                      lineHeight: "1.875",
                    }}
                  >
                    To make your journey easier we have hand picked few good
                    instructor videos that will help you see what{" "}
                    <b>delivery techniques</b> our students absolutely love.
                  </Typography>
                </Grid>
                <Grid lg={6} md={4} sm={4} >
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      fontFamily: "Segoe UI",
                      mb: 2,
                      pl:10,
                     
                    }}
                  >
                    Please look carefully for these points
                  </Typography>
                  <Box sx={{pl:10  }}>
                    <Box sx={{ display: "flex", mt: 3, mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "0.9rem" ,color: " #fff" }}>
                        Make their presence felt
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "0.9rem",color: " #fff" }}>
                        Ask regular questions
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "0.9rem",color: " #fff" }}>
                        Check for their understanding
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "0.9rem",color: " #fff" }}>
                        Use annotations
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "0.9rem",color: " #fff" }}>
                        Draw analogies to explain
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
         
            
          </Grid>
        </Grid>
        <Box sx={{ mt:-7,display:"flex",justifyContent:"space-around"}}>
         
              <Iframe
                url="https://www.youtube.com/embed/q1HZj40ZQrM"
                width="387px"
                height="187px"
                id=""
                className="frem"
              />
       
              <Iframe
                url="https://www.youtube.com/embed/q1HZj40ZQrM"
                width="387px"
                height="187px"
                id=""
                className="frem"
              />
        
              <Iframe
                url="https://www.youtube.com/embed/q1HZj40ZQrM"
                width="357px"
                height="187px"
                id=""
                className="frem"
              />
           
        </Box>
      </Box>
      <Box sx={{ px:1,display: { xs: "block", lg: "none" } }} >
        <Grid container>
          <Grid lg={12} md={12} sm={12}>
            <Box sx={{}}>
              <Grid container>
                <Grid lg={4} md={4} sm={4}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      fontFamily: "Segoe UI",
                      mb: 2,
                      lineHeight: "1.875",
                    }}
                  >
                    To make your journey easier we have hand picked few good
                    instructor videos that will help you see what{" "}
                    <b>delivery techniques</b> our students absolutely love.
                  </Typography>
                </Grid>
                <Grid lg={5} md={4} sm={4}>
                  <Typography
                    sx={{
                      fontSize: "1.6rem",
                      color: "#fff",
                      fontFamily: "Segoe UI",
                      mb: 2,
                      ml: 1,
                    }}
                  >
                    Please look carefully for these points
                  </Typography>
                  <Box sx={{ ml: 1 }}>
                    <Box sx={{ display: "flex", mt: 3, mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "1rem" }}>
                        Make their presence felt
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "1rem" }}>
                        Ask regular questions
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "1rem" }}>
                        Check for their understanding
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "1rem" }}>
                        Use annotations
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", mb: 2 }}>
                      <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                      <Typography sx={{ ml: 1, fontSize: "1rem" }}>
                        Draw analogies to explain
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            
          </Grid>
        </Grid>
        <Box sx={{ mt: 13,ml:1 }}>
          <Grid container>
            <Grid lg={4} md={4} sm={4}>
              <Iframe
                url="https://www.youtube.com/embed/q1HZj40ZQrM"
                width="380px"
                height="187px"
                id=""
                className=""
              />
            </Grid>
            <Grid lg={4} md={4} sm={4}>
              <Iframe
                url="https://www.youtube.com/embed/q1HZj40ZQrM"
                width="380px"
                height="187px"
                id=""
                className=""
              />
            </Grid>
            <Grid lg={4} md={4} sm={4}>
              <Iframe
                url="https://www.youtube.com/embed/q1HZj40ZQrM"
                width="380px"
                height="187px"
                id=""
                className=""
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default DSsample;
