import { Box, Typography } from "@mui/material";

const MediaHero = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#F5EFE0",
        px: { xs: 3, md: "40px" },
        pt: { xs: "80px", md: "110px" },
        pb: { xs: "56px", md: "72px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
          
          px: { xs: 3, md: "48px" },
        }}
      >
        {/* Eyebrow */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            mb: "24px",
          }}
        >
          

          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: "11px",
              fontWeight: 500,
              lineHeight: "17px",
              letterSpacing: "1.98px",
              color: "#5C3A21",
              textTransform: "uppercase",
            }}
          >
            — Media
          </Typography>
        </Box>

        {/* Heading */}
        <Typography
          sx={{
            width:'1240px',
            height:'94px',
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize:'96px',
            lineHeight: '94px',
            letterSpacing: "-1.92px",
            color: "#2A2520",
            mb: "24px",
          }}
        >
          Our work in{" "}
          <Box
            component="span"
            sx={{
              fontStyle: "italic",
              color: "#2D4A2B",
            }}
          >
            print and on screen.
          </Box>
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            maxWidth: "520px",
            fontFamily: "Inter",
            fontSize: "16px",
            lineHeight: "28px",
            color: "#5C524A",
          }}
        >
          A living archive of features, interviews, and the quarterly Aaradhana
journal.
        </Typography>
      </Box>
    </Box>
  );
};

export default MediaHero;