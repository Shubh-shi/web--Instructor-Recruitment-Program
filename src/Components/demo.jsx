import React, { useEffect, useState } from "react";
import { Typography, Button, Box, Grid, TextField } from "@mui/material";
import Iframe from "react-iframe";
import CheckIcon from "@mui/icons-material/Check";
import { supabase } from "./supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Userform = () => {
  AOS.init({ duration: 1000 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [link, setUlink] = useState("");
  console.log(name);
  console.log(email);
  const createUser = async(e)=>
  {
    e.preventDefault();

      const { data, error } = await supabase
        .from("Instructor_details")
        .insert({
          name: name,
          email: email,
          mobile: mobile,
          link: link,
        })
        .single();
        if(error){
            toast.warn('🦄 Wow so easy!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
       else{
               toast.success("successful", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
          }
        
         
       

  }
  return (
    <>
      <ToastContainer />
      <Box sx={{ px: 8,display: { xs: "none", lg: "block" },py:5}}>
        <Grid container>
          <Grid lg={12} md={12} sm={12}>
            <Typography sx={{ textAlign: "center", fontSize: "2.5rem",color:"#fff" }}>
              Recording Upload Section
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Grid container>
            <Grid lg={6} md={6} sm={6}>
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  color: "#fff",
                  fontFamily: "Segoe UI",
                  mb: 2,
                  ml: 1,
                  fontWeight: "bold",
                }}
              >
                Please share your video link!
              </Typography>
              <Box sx={{ ml: 1 }}>
                <Box sx={{ display: "flex", mt: 3, mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem",color: " #fff" }}>
                    Hope you have adhered to <b>Best Practices</b> (in{" "}
                    <b>Guide Section</b>)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem",color: " #fff" }}>
                    Record the video and upload to <b>Gdrive</b>
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem",color: " #fff" }}>
                    Enable access to <b>anyone who has the link</b>
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem",color: " #fff" }}>
                    Fill the form and Submits
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem",color: " #fff" }}>
                    We will get back to you as soon as the reviews are done!
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem" ,color: " #fff"}}>
                    Wish you <b>all the best!</b>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid lg={6} md={6} sm={6} sx={{boxShadow:"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",px:3,background:"#fff",py:3}}>
                <form onSubmit={createUser}>
              <TextField
                id="name"
                label="Full Name"
                variant="standard"
                fullWidth
                required={true}
                sx={{ mb: 2 }}
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="email"
                label="Email"
                variant="standard"
                fullWidth
                required={true}
                sx={{ mb: 2 }}
                name="uemail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                id="mobile"
                label="Phone number"
                variant="standard"
                fullWidth
                required={true}
                sx={{ mb: 2 }}
                name="mobile"
                type="number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <TextField
                id="link"
                label="Gdrive Video Link"
                variant="standard"
                fullWidth
                required={true}
                sx={{ mb: 2 }}
                name="link"
                type="text"
                onChange={(e) => setUlink(e.target.value)}
              />
              <center>
                <Button
                  variant="text"
                  type="submit"
                  sx={{
                    color: "black",
                    border: "1px solid #CCCCCC",
                    width: "170px",
                    borderRadius: "50px",
                    mx: 2,
                    py: 1,
                    "&:hover": {
                      color: "#0099e6",
                      border: "1px solid #0099e6",
                      width: "170px",
                      borderRadius: "50px",
                      mx: 2,
                      py: 1,
                      background: "#fff",
                    },
                  }}
                 
                >
                  Upload
                </Button>
              </center>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ px: 1,display: { xs: "block", lg: "none" } }} data-aos="fade-zoom-in">
        <Grid container>
          <Grid lg={12} md={12} sm={12}>
            <Typography sx={{fontSize: "2.5rem" }}>
              Recording Upload Section
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4,mb:4 }}>
          <Grid container>
            <Grid lg={6} md={6} sm={6}>
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  color: "#fff",
                  fontFamily: "Segoe UI",
                  mb: 2,
                  ml: 1,
                  fontWeight: "bold",
                }}
              >
                Please share your video link!
              </Typography>
              <Box sx={{ ml: 1 }}>
                <Box sx={{ display: "flex", mt: 3, mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem" }}>
                    Hope you have adhered to <b>Best Practices</b> (in{" "}
                    <b>Guide Section</b>)
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem" }}>
                    Record the video and upload to <b>Gdrive</b>
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem" }}>
                    Enable access to <b>anyone who has the link</b>
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem" }}>
                    Fill the form and Submits
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem" }}>
                    We will get back to you as soon as the reviews are done!
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", mb: 2 }}>
                  <CheckIcon sx={{ color: " #fff", fontSize: "1rem" }} />
                  <Typography sx={{ ml: 1, fontSize: "0.95rem" }}>
                    Wish you <b>all the best!</b>
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid lg={6} md={6} sm={6}>
            <form onSubmit={createUser}>
              <TextField
                id="name"
                label="Full Name"
                variant="standard"
                fullWidth
                required={true}
                sx={{ mb: 2 }}
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="email"
                label="Email"
                variant="standard"
                fullWidth
                required={true}
                sx={{ mb: 2 }}
                name="uemail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                id="mobile"
                label="Phone number"
                variant="standard"
                fullWidth
                required={true}
                sx={{ mb: 2 }}
                name="mobile"
                type="number"
                onChange={(e) => setMobile(e.target.value)}
              />
              <TextField
                id="link"
                label="Gdrive Video Link"
                variant="standard"
                fullWidth
                required={true}
                sx={{ mb: 2 }}
                name="link"
                type="text"
                onChange={(e) => setUlink(e.target.value)}
              />
              <center>
                <Button
                  variant="text"
                  type="submit"
                  sx={{
                    color: "black",
                    border: "1px solid #CCCCCC",
                    width: "170px",
                    borderRadius: "50px",
                    mx: 2,
                    py: 1,
                    "&:hover": {
                      color: "#0099e6",
                      border: "1px solid #0099e6",
                      width: "170px",
                      borderRadius: "50px",
                      mx: 2,
                      py: 1,
                      background: "#fff",
                    },
                  }}
                 
                >
                  Upload
                </Button>
              </center>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
      
    </>
  );
};
export default Userform;
