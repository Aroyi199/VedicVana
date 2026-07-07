import { Box, Typography } from "@mui/material";

const features = [
  {
    title: "Beauty with purpose",
    description: "Landscapes rooted in ecological intelligence.",
  },
  {
    title: "A living environment",
    description: "Gardens that breathe, change, and deepen over time.",
  },
  {
    title: "Connection with nature",
    description: "Dissolving the boundary between inside and outside.",
  },
  {
    title: "Ecological balance",
    description: "Native species that work with your microclimate.",
  },
];

const ForMySpace = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#294C2A",
        py: "96px",
        px: "40px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
       
          px: "48px",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            {/* Circle */}
            <Box
              sx={{
                width: "48px",
                height: "52px",
                borderRadius: "50%",
                border: "1px solid #FFFFFF1A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "#F5EFE080",
                }}
              >
                02
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: "72.32px",
                lineHeight: "72.32px",
                letterSpacing: "-2.5px",
                color: "#F5EFE0",
              }}
            >
              For My Space
            </Typography>
          </Box>

          {/* Question */}
          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "19.29px",
              lineHeight:'27px',
              color: "#B08A3E",
            }}
          >
            How does this improve my surroundings?
          </Typography>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "rgba(255,255,255,.10)",
            mb: "42px",
          }}
        />

        {/* Features */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            columnGap: "36px",
            mb: "56px",
          }}
        >
          {features.map((item) => (
            <Box key={item.title}>
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight:'24px',
                  color: "#F5EFE0",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "13.5px",
                  lineHeight: "22px",
                  color: "#F5EFE08C",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Quote */}
          <Box
            sx={{
              width: "430px",
              background: "rgba(255,255,255,.06)",
              border: "1px solid rgba(255,255,255,.08)",
              borderRadius: "10px",
              px: "20px",
              py: "18px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "26px",
                color: "#B08A3E",
              }}
            >
              "A landscape designed with intention changes how you feel inside
              it — every morning, every season, for decades."
            </Typography>
          </Box>

          {/* Large Number */}
          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontWeight: 300,
              fontSize: "120.53px",
              lineHeight: "120.53px",
              letterSpacing:'-4px',
              color: "#F5EFE03B",
              userSelect: "none",
            }}
          >
            02
          </Typography>
        </Box>

       
      </Box>
    </Box>
  );
};

export default ForMySpace;