import { Box, Typography } from "@mui/material";

const secondaryVanas = [
  { id: "04", title: "Panchavati Vana" },
  { id: "05", title: "Nandhana Vana" },
  { id: "06", title: "Brindavana" },

  { id: "07", title: "Ashoka Vana" },
  { id: "08", title: "Santana Vana" },
  { id: "09", title: "Saraswati Vratha Vana" },

  { id: "10", title: "Saptarishi Vratha Vana" },
  { id: "11", title: "Shiva Panchayata Vana" },
  { id: "12", title: "Sri Siddhi Vinyaka Vratha Vana" },

  { id: "13", title: "Sri Vara Laxmi Vratha Vana" },
  { id: "14", title: "Sri Satyanarayana Vana" },
  { id: "15", title: "Sri Uma Maheshwara Vana" },
];

const SecondaryVanas = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "rgba(239, 232, 211, 1)",
        px: "40px",
        pt: "88px",
        pb: "96px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
        }}
      >
        {/* Label */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontWeight:'500',

            fontSize: "11px",
            lineHeight:'17px',
            letterSpacing: "1.98px",
            textTransform: "uppercase",
            color: "#5C3A21",
            mb: 2,
          }}
        >
          02 — The Secondary Vanas
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: "52px",
            lineHeight: "54.6px",
            letterSpacing:'-0.52px',
            color: "#2A2520",
            mb: "48px",
          }}
        >
          Names, for now.{" "}
          <Box
            component="span"
            sx={{
              fontStyle: "italic",
              color: "#2D4A2B",
            }}
          >
            Stories, in due time.
          </Box>
        </Typography>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "18px",
          }}
        >
          {secondaryVanas.map((item) => (
            <Box
              key={item.id}
              sx={{
                background: "#FBF8F1",
                border: "1px solid #E7DDC8",
                borderRadius: "14px",
                width:'398.33px',
                justify:'space-between',
                height: "112px",
                px: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                transition: ".25s",

                "&:hover": {
                  boxShadow: "0 10px 24px rgba(0,0,0,.08)",
                  transform: "translateY(-2px)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontWeight:'400',
                  fontSize: "13px",
                  color: "#5C3A21",
                  lineHeight:'20.15px',
                  letterSpacing: "0%",
                  mb: "8px",
                }}
              >
                {item.id}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 400,
                  fontSize: "22px",
                  lineHeight: "34.1px",
                  letterSpacing:'-0.22px',
                  color: "#2A2520",
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SecondaryVanas;