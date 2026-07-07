import { Box, Typography } from "@mui/material";

const NavagrahaHero = () => {
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
            Planetary Garden
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
            Navagraha Vana
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
            "Nava" means nine and "Graha" refers to the nine planetary influences in Vedic tradition. Navagraha Vana features nine sacred plants associated with these celestial bodies, symbolizing planetary balance and creating an environment that supports harmony, protection, and positive energy.
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
              9
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
              Planetary plants arranged by direction and influence.
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
              Protection
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
              Associated with balance, prosperity, health, and relief
from adverse planetary effects.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NavagrahaHero;