import { Box, Typography } from "@mui/material";

const RasiHero = () => {
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
            Zodiac Garden
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
            Raasi Vana
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
            The zodiac's twelve are twelve sacred signs. These twelve trees
            represent each one's life path and are associated with traditional
            Jyotisha for meditation and reflection.
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
              12
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
              Zodiac trees corresponding to the cycle of birth.
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
              Influence
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
              Its botanical symbolism aligns with one's birth sign, nature, and
              planetary energies.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RasiHero;