import { Box, Typography } from "@mui/material";

const TempleGardensHero = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: "40px",
        pt: "72px",
        pb: "72px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1320px",
          mx: "auto",
        }}
      >
        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            lineHeight: "16px",
            letterSpacing: "2.64px",
            textTransform: "uppercase",
            color: "#7A5A3A",
            mb: 2,
          }}
        >
          — Temple Gardens
        </Typography>

        {/* Heading */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "Fraunces, serif",
            fontWeight: 300,
            fontSize: "72px",
            lineHeight: "78px",
            letterSpacing: "-2px",
            color: "#2A2520",
            mb: 3,

            // important
            width: "100%",
            maxWidth: "1320px",
            whiteSpace: "nowrap",
          }}
        >
          Where tradition meets living l
          <Box
            component="span"
            sx={{
              fontStyle: "italic",
              color: "#2D4A2B",
            }}
          >
            andscapes
          </Box>
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            maxWidth: "520px",
            fontFamily: "Inter, sans-serif",
            fontSize: "17px",
            lineHeight: "30px",
            color: "#5C524A",
          }}
        >
          Transforming spaces into sacred, healing landscapes through
          tradition and ecological design.
        </Typography>
      </Box>
    </Box>
  );
};

export default TempleGardensHero;