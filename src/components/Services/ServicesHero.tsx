import { Box, Typography } from "@mui/material";

const ServicesHero = () => {
  return (
    <Box sx={{ width: "100%", background: "#F5EFE0", px: "40px", pt: "72px", pb: "64px" }}>
      <Box sx={{ maxWidth: "1120px", mx: "auto" }}>
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontWeight: "500",
            fontSize: "10.5px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#5C3A21",
            mb: 3,
          }}
        >
          Our Approach
        </Typography>

        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: "48px",
            lineHeight: "66px",
            letterSpacing: "-1.8px",
            color: "#2A2520",
            width:'1125px',
            height:'172px',
            pt:'40px',
            mb: 3,
          }}
        >
          Creating Meaningful Landscapes for{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
            You, Your Space, Your Family, Your Ancestors, and the Planet.
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "16px",
            lineHeight: "28px",
            color: "#5C524A",
            width:'1098px',
            height:'56px',
          }}
        >
          Every landscape we create is designed to generate lasting benefits that extend beyond
          aesthetics — supporting wellbeing, biodiversity, spiritual connection, family legacy,
          and ecological restoration.
        </Typography>
      </Box>
    </Box>
  );
};

export default ServicesHero;