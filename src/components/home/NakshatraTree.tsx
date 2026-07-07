import { Box, Typography, Button } from "@mui/material";

const whatHappensNext = [
  "Fill your birth details in a simple form",
  "Pay ₹1515 via Razor pay",
  "You will receive Birth Tree details, local names, and personalized mantras to your mail",
];

const included = [
  "Birth Tree identification",
  "Local names and sacred association",
  "Personalized mantra guidance",
  "Consultant follow-up after payment",
];

const NakshatraTree = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "40px" },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1320px",
          mx: "auto",
          backgroundColor: "#2D4A2B",
          borderRadius: "24px",
          p: { xs: 4, md: 6 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 5 },
        }}
      >
        {/* Left side */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
            <Box sx={{ width: "14px", height: "1px", backgroundColor: "#B5A882" }} />
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono', 
                fontWeight:'500',
                fontSize: "11px",
                lineHeight:'17px',
                letterSpacing: "1.98px",
                color: "#B08A3E",
                textTransform: "uppercase",
              }}
            >
              Discover Your Sacred Tree
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontFamily: 'Fraunces',
              fontWeight: 300,
              fontSize: '58px',
              lineHeight: '60.9px',
              letterSpacing:'-0.58px',
              color: "#F5EFE0",
              mb: 4,
            }}
          >
            Connect with Your Nakshatra Tree
          </Typography>

          <Box sx={{ width:'601px',height:'224px',backgroundColor: "#4c6a6024", borderRadius: "12px", p: 3,gap:'10.01px' }}>
            <Typography
              sx={{
                fontFamily: 'Fraunces', 
                fontSize: "22.4px",
                fontWeight: 400,
                lineHeight:'35.84px',
                letterSpacing:'-0.45px',

                color: "#FBF7EC",
                mb: 2,
              }}
            >
              What happens next
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {whatHappensNext.map((step) => (
                <Box key={step} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                  <Typography sx={{ color: "#B5A882", fontSize: "14px" }}>•</Typography>
                  <Typography sx={{ fontSize: "16px", lineHeight: '25.6px', color: "#FEFEFE",fontWeight:'400' }}>
                    {step}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Right side */}
        <Box
          sx={{
            width:'430px',
            height:'402px',
            top:'80.29px',
            left:'723px',
            radius:'22px',
            border:'1px',
            padding:'28px',
            flex: 1,
            backgroundColor: "#FBF7EC",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: '28px',
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {included.map((item) => (
              <Box key={item} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                <Typography sx={{ color: "#2D4A2B", fontSize: "14px" }}>•</Typography>
                <Typography sx={{ fontSize: "14.5px", lineHeight: 1.6, color: "#3D2B1F" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box>
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono',
                fontWeight:'500', 
                fontSize: "11px",
                lineHeight:'17px',
                letterSpacing: "1.9spx",
                textTransform: "uppercase",
                color: "#5C3A21",
                mb: 0.5,
              }}
            >
              Amount
            </Typography>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, mb: 3 }}>
              <Typography
                sx={{
                  fontFamily: 'Fraunces', 
                  fontSize: "40px",
                  fontWeight: 400,
                  color: "#2A2520",
                  lineHeight: '56px',
                  letterSpacing:'-0.56px',
                }}
              >
                ₹1515 
              </Typography>
              <Typography sx={{ font:'Fraunces',fontWeight:'400',fontSize: "18px", color: "#8A7F72",lineHeight:'18px',letterSpacing:'-0.56px' }}>INR</Typography>
            </Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#2D4A2B",
                color: "#F5EFE0",
                textTransform: "none",
                borderRadius: "10px",
                py: 1.5,
                fontSize: "15px",
                fontWeight: 500,
                lineHeight:'23.25px',
                letterSpacing:'0.15px',
                boxShadow: "none",
                "&:hover": { backgroundColor: "#23391f", boxShadow: "none" },
              }}
            >
              Discover Your Sacred Tree
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NakshatraTree;