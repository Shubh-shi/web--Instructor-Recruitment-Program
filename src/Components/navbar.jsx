import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Nav.css";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      INSAID Instructor Recruitment Program
      </Typography>
      <Divider />
      <List>
      <Link to="/" style={{ textDecoration: "none",color:"#000" }}>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/bestpractices" style={{ textDecoration: "none",color:"#000" }}>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Best Practices"} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/sample/DS" style={{ textDecoration: "none",color:"#000" }}>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={" Sample"} />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to="/form" style={{ textDecoration: "none",color:"#000" }}>
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={"Demo"} />
            </ListItemButton>
          </ListItem>
          </Link>
    
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{display: { xs: "block", lg: "block" } }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
        
    background:"linear-gradient(144.39deg, #ffffff -278.56%,#6d6d6d -78.47%, #11101d 91.61%)!important",
          color: "#000",
          boxShadow: "none",
          // display: { xs: "block", lg: "none" },
          width: "100%",
          py:2
        }}
      >
        <Toolbar sx={{  }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "block" },
              // background: "rgba(144,144,144,0.25)",
              px: 4,
              maxWidth: "530px",
              borderRadius: "5px",

            }}
          >
            INSAID Instructor Recruitment Program
          </Typography> */}
          <div className="logo-6">
         
          <h3> INSAID Instructor  <span>Recruitment Program</span></h3>
       
      </div>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", lg: "none" },
              background: "rgba(144,144,144,0.25)",
              px: 4,
              maxWidth: "490px",
              borderRadius: "5px",
              fontSize:"1rem",
            }}
          >
            INSAID Instructor Recruitment Program
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" },ml:19 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                variant="text"
                sx={{
                  color: "#fff",
                  border: "1px solid #CCCCCC",
                  width: "170px",
                  borderRadius: "50px",
                  mx: 1,
                  py: 1,
                  "&:hover": {
                    color: "#fff",
                    border: "1px solid #0099e6",
                    width: "170px",
                    borderRadius: "50px",
                    mx: 1,
                    py: 1,
                  
                  },
                }}
              >
                Home
              </Button>
            </Link>
            <Link to="/bestpractices" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  color: "#fff",
                  border: "1px solid #CCCCCC",
                  width: "170px",
                  borderRadius: "50px",
                  mx: 1,
                  py: 1,
                  "&:hover": {
                    color: "#fff",
                    border: "1px solid #0099e6",
                    width: "170px",
                    borderRadius: "50px",
                    mx: 1,
                    py: 1,
                  
                  },
                }}
              >
                Best Practices
              </Button>
            </Link>
            <Link to="/sample/DS" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  color: "#fff",
                  border: "1px solid #CCCCCC",
                  width: "170px",
                  borderRadius: "50px",
                  mx: 1,
                  py: 1,
                  "&:hover": {
                    color: "#fff",
                    border: "1px solid #0099e6",
                    width: "170px",
                    borderRadius: "50px",
                    mx: 1,
                    py: 1,
                   
                  },
                }}
              >
                Sample
              </Button>
            </Link>
            <Link to="/form" style={{ textDecoration: "none" }}>
              <Button
                variant="text"
                sx={{
                  color: "#fff",
                  border: "1px solid #CCCCCC",
                  width: "170px",
                  borderRadius: "50px",
                  mx: 1,
                  py: 1,
                  "&:hover": {
                    color: "#fff",
                    border: "1px solid #0099e6",
                    width: "170px",
                    borderRadius: "50px",
                    mx: 1,
                    py: 1,
                   
                  },
                }}
              >
                Demo
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3, pt: 10 }}>
      
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
