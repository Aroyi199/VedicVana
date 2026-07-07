import { Box, Typography } from "@mui/material";

const IntroductionSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: 8, lg: 14 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          columnGap: { xs: 4, md: 10, lg: 16 },
          rowGap: { xs: 6, md: 0 },
          alignItems: "start",
        }}
      >
        {/* LEFT SIDE */}
        <Box>
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontWeight: 500,
              fontSize: "11px",
              lineHeight: "16px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#5C3A21",
              mb: 3,
            }}
          >
            — Introduction
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontWeight: 300,
              fontSize: { xs: "38px", md: "56px" },
              lineHeight: { xs: "48px", md: "66px" },
              letterSpacing: "-0.8px",
              color: "#2A2520",
            }}
          >
            Guided by
            <br />
            <Box
              component="span"
              sx={{
                fontStyle: "italic",
                display: "inline-block",
                color:'#2D4A2B',
              }}
            >
              Sacred Vision
            </Box>
          </Typography>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 5, md: 8 },
            pt: { xs: 0, md: 2 },
          }}
        >
          {/* Aim */}
          <Box>
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: { xs: "34px", md: "54px" },
                lineHeight: 1.1,
                color: "#111111",
                mb: 2,
              }}
            >
              Aim
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 300,
                fontSize: { xs: "24px", md: "32px" },
                lineHeight: { xs: "36px", md: "46px" },
                color: "#2A2520",
                maxWidth: "520px",
              }}
            >
              To reconnect people with nature.
            </Typography>
          </Box>

          {/* Vision */}
          <Box>
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: { xs: "34px", md: "54px" },
                lineHeight: 1.1,
                color: "#111111",
                mb: 2,
              }}
            >
              Vision
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 300,
                fontSize: { xs: "24px", md: "32px" },
                lineHeight: { xs: "36px", md: "46px" },
                color: "#2A2520",
                maxWidth: "520px",
              }}
            >
              To create purposeful landscapes.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroductionSection;