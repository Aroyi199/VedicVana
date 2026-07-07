import { Box, Typography } from "@mui/material";

const NakshatraHero = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#F5EFE0",
        px: "40px",
        pt: "72px",
        pb: "48px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1120px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "40px",
        }}
      >
        {/* LEFT */}
        <Box sx={{ flex: 1, maxWidth: "640px" }}>
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontWeight:'500',
              fontSize: "11px",
              lineHeight:'13.2px',
              letterSpacing: "1.98px",
              textTransform: "uppercase",
              color: "#5C3A21",
              mb: 2,
            }}
          >
            Birth Star Garden
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontWeight: 400,
              fontSize: "80px",
              lineHeight: "76px",
              letterSpacing:'-1.6px',
              color: "#2A2520",
              mb: 3,
            }}
          >
            Nakshatra Vana
          </Typography>

          <Typography
            sx={{
              fontFamily: "Inter",
              fontWeight:'400',
              fontSize: "16.8px",
              lineHeight: "26.88px",
              color: "#5C524A",
              maxWidth: "560px",
            }}
          >
            "Nakshatra" means stars and "Vana" means garden. Every person belongs to one
of the twenty-seven birth stars, and each tree here corresponds to a particular
star.
          </Typography>
        </Box>

        {/* RIGHT */}
        <Box
          sx={{
            width: "320px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {/* Card 1 */}
          <Box
            sx={{
              background: "#FBF7EC",
              borderRadius: "18px",
              border: "1px solid #E7DDC8",
              p: "24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontSize: "28px",
                fontWeight:'400',
                letterSpacing:'-0.56px',
                lineHeight: "28px",
                color: "#2A2520",
                mb: 1,
              }}
            >
              27
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight:'400',

                fontSize: "15.2px",
                lineHeight: "24.32px",
                color: "#5C524A",
              }}
            >
              Star-linked trees presented together in one sacred
grove.
            </Typography>
          </Box>

          {/* Card 2 */}
          <Box
            sx={{
              background: "#FBF7EC",
              borderRadius: "18px",
              border: "1px solid #E7DDC8",
              p: "24px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight:'400',
                fontSize: "28px",
                lineHeight: "28px",
                letterSpacing:'-0.56px',
                color: "#2A2520",
                mb: 1,
              }}
            >
              Well-being
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter",
                fontWeight:'400',
                fontSize: "15.2px",
                lineHeight: "24.32px",
                color: "#5C524A",
              }}
            >
              Traditionally associated with physical, mental,
psychological, and spiritual harmony..
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NakshatraHero;