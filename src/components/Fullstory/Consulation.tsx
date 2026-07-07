import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Consultation = () => {
    const navigate = useNavigate();
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "40px" },
        pt: { xs: 6, md: "72px" },
        pb: { xs: 8, md: "96px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
     
          <Box
            sx={{
              width: "740px",
              height: "1px",
              backgroundColor: "rgba(92, 58, 33, 0.16)",
              mb: "32px",
            }}
          />

          {/* Quote */}
          <Typography
            sx={{

              fontFamily: "Fraunces",
             
              fontStyle: "italic",
              fontWeight: 300,
              fontSize:'31.34px',
              lineHeight: '43.31px',
              letterSpacing: "-0.4px",
              color: "#2A2520",
              textAlign: "center",
              mb: "32px",
            }}
          >
            “Perhaps your journey begins with a tree too.”
          </Typography>

          
          <Typography
          onClick={() => navigate("/book a consultation")}
            sx={{
              minWidth: "216px",
              height: "53px",
              left:'262.33px',
              pt:'16px',
              pr:'32px',
              pb:'16px',
              pl:'32px',
              gap:'8px',
              px: "20px",
              borderRadius: "22369600px",
              backgroundColor: "#2D4A2B",
              color: "#F5EFE0",
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "21px",
              
              
            
            }}
          >
            Book a Consultation →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Consultation;