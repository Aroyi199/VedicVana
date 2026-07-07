import { Box, Typography } from "@mui/material";

const features = [
  {
    title: "Wellbeing",
    description: "Plants chosen for your birth star and personal energy.",
  },
  {
    title: "Harmony",
    description: "Spaces that restore balance and quiet the mind.",
  },
  {
    title: "Prosperity",
    description: "Traditional wisdom encoded in every selection.",
  },
  {
    title: "Spiritual connection",
    description: "A daily relationship with living, breathing nature.",
  },
];

const ForMe = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#F5EFE0",
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
            {/* Number Circle */}
            <Box
              sx={{
                width: "48px",
                height: "52px",
                borderRadius: "50%",
                border: "1px solid #5C3A211C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "11px",
                  lineHeight:"16.5px",
               
                  color: "#5C3A21",
                }}
              >
                01
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
                color: "#2A2520",
              }}
            >
              For Me
            </Typography>
          </Box>

          {/* Question */}
          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "19.29px",
              color: "#2D4A2B",
            }}
          >
            How does this benefit me?
          </Typography>
        </Box>

        {/* Divider */}
        <Box
          sx={{
            height: "1px",
            background: "rgba(92,58,33,.12)",
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
                  color: "#2A2520",
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: "13.5px",
                  lineHeight: "22px",
                  color: "#5C524A",
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
              width: "560px",
              background: "#2D4A2B0D",
              border: "1px solid #E5DAC5",
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
                color: "#2D4A2B",
              }}
            >
              "Every plant we select is aligned with your Nakshatra and your
              story — not chosen from a generic catalogue."
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
              color: "#2D4A2B3B",
              userSelect: "none",
            }}
          >
            01
          </Typography>
        </Box>

        {/* Bottom Divider */}
        <Box
          sx={{
            mt: "40px",
            height: "1px",
            background: "#5C3A211C",
          }}
        />
      </Box>
    </Box>
  );
};

export default ForMe;