import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import templeImage from "../../assets/temple.png";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: 5, lg: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1320px",
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 4, lg: 6 },
        }}
      >
        {/* Left content */}
        <Box
          sx={{
            width: { xs: "100%", md: "46%" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: "11px",
              lineHeight: "17px",
              letterSpacing: "1.98px",
              fontWeight: 500,
              color: "#5C3A21",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            Our Guiding Purpose
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontFamily: "Fraunces",
              fontWeight: 400,
              fontSize: { xs: "48px", md: "72px", lg: "84px" },
              lineHeight: { xs: "56px", md: "78px", lg: "90px" },
              letterSpacing: "-2px",
              color: "#2A2520",
              mb: 3,
            }}
          >
            It&apos;s Time to{" "}
            <Box
              component="span"
              sx={{ fontStyle: "italic", color: "#2D4A2B" }}
            >
              Move Beyond
            </Box>{" "}
            Copy-Paste Gardening.
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28px",
              color: "#5C524A",
              maxWidth: "460px",
              mb: 4,
            }}
          >
            At Vedic Vanas, we interview every plant before it enters your
            space, hand-picking only those that are suitable, meaningful, and
            uniquely aligned with you.
          </Typography>

          <Button
            variant="contained"
            onClick={() => navigate("/personal-tree")}
            sx={{
              backgroundColor: "#2D4A2B",
              color: "#F5EFE0",
              textTransform: "none",
              borderRadius: "30px",
              px: 3,
              py: 1.5,
              fontSize: "15px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#23391f",
                boxShadow: "none",
              },
            }}
          >
            What is your personal tree?
          </Button>
        </Box>

        {/* Right image */}
        <Box
          sx={{
            width: { xs: "100%", md: "620px" },
            position: "relative",
            display: "flex",
            overflow:'visible',
           
          }}
        >
          <Box
            component="img"
            src={templeImage}
            alt="Sacred garden"
            sx={{
              width: "554px",
              maxWidth: "620px",
              height: '614px',
              objectFit: "cover",
              borderRadius: "24px",
              display: "block",
              boxShadow:'#FFFFFF0D',
            }}
          />

          {/* Stat card */}
          <Box
            sx={{
              height:'138.59px',
              position: "absolute",
              left: { xs: "12px", md: "-40px" },
              bottom: { xs: "-18px", md: "-22px" },
              
              gap:'5px',
              width: '240px',
              backgroundColor: "#FBF7EC",
              borderRadius: "18px",
              px: { xs: 2.5, md: 3 },
              py: { xs: 2, md: 2.5 },
              boxShadow: "0 8px 32px rgba(45, 74, 43, 0.15)",
              zIndex:3,
              display: "flex",
              flexDirection: "column",
              
            }}
          >
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontWeight: 500,
                fontSize: "11px",
                lineHeight: "17px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#5C3A21",
              }}
            >
              Guided Projects
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontSize: { xs: "38px", md: "46px" },
                fontWeight: 400,
                color: "#2A2520",
                lineHeight: 1,
                letterSpacing: "-0.46px",
              }}
            >
              45+
            </Typography>

            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                color: "#5C524A",
              }}
            >
              across 9 Indian states
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;