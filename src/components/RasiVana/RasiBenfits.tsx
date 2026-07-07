import { Box, Typography } from "@mui/material";

const RasiBenefits = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#F5EFE0",
        px: "40px",
        pb: "72px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1180px",
          
          mx: "auto",
          background: "#FBF7EC",
          borderRadius: "24px",
          border: "1px solid #E7DDC8",
          p: "48px 56px",
        }}
      >
        {/* Label */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontWeight: "500",
            fontSize: "11px",
            lineHeight: "13.2px",
            letterSpacing: "1.98px",
            textTransform: "uppercase",
            color: "#5C3A21",
            mb: 2,
          }}
        >
          Benefits
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            width:'1126px',
            height:'44px',
            fontFamily: "Fraunces",
            fontWeight: 400,
            fontSize: "41.6px",
            lineHeight: "43.68px",
            letterSpacing: "-0.83px",
            color: "#2A2520",
            mb: 3,
            maxWidth: "860px",
          }}
        >
          For Vighna Nashana & Growth Opportunities
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "25.6px",
            color: "#5C524A",
            maxWidth: "900px",
          }}
        >
          Rashi Vana is traditionally associated with overcoming obstacles
          (Vighna Nashana) and attracting opportunities for personal and
          professional growth. The symbolic connection between zodiac signs and
          sacred trees is believed to encourage confidence, prosperity, positive
          transformation, and success in life's journey.
        </Typography>
      </Box>
    </Box>
  );
};

export default RasiBenefits;