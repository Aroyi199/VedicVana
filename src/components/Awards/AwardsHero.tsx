import { Box, Typography } from "@mui/material";

const AwardsHero = () => {
  return (
    <Box
      sx={{
        background: "rgba(245, 239, 224, 1)",
        pt: { xs: 10, md: 14 },
        pb: 6,
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 3, md: 6 },
        }}
      >
        <Typography
          sx={{
            font:'JetBrains Mono',
            fontSize: "11px",
            lineHeight:'17px',
            letterSpacing: "1.98px",
            textTransform: "uppercase",
            color: "#5C3A21",
            mb: 2,
          }}
        >
          — Awards & Recognition
        </Typography>

        <Typography
          sx={{
            fontFamily: "Fraunces",
            width:'1240px',
            
            fontSize: '86px',
            lineHeight: '94px',
            letterSpacing:'-1.92px',
            color: "#2A2520",
            mb: 3,
          }}
        >
          Quiet work,
          <Box
            component="span"
            sx={{
              color: "#2D4A2B",
              fontStyle: "italic",
            }}
          >
            {" "}
            gratefully acknowledged.
          </Box>
        </Typography>

        <Typography
          sx={{
            maxWidth: 640,
            fontSize: "18px",
            color: "#5C524A",
            lineHeight: '28.8px',
          }}
        >
          A scalable archive of honors, citations, and memorials — added as
          time and practice allow.
        </Typography>
      </Box>
    </Box>
  );
};

export default AwardsHero;