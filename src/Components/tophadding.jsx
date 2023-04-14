import Typography from "@mui/material/Typography";
const Tophadding = () => {
    return (
<Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", lg: "block" },
              background: "rgba(144,144,144,0.25)",
              position:"sticky",
              px: 4,mt:2,
              maxWidth: "430px",
              borderRadius: "5px",
            }}
          >
            INSAID Instructor Recruitment Program
          </Typography>
    );

}
export default Tophadding;