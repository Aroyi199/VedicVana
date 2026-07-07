import { Box, Typography } from "@mui/material";

const navagrahas = [
  {
    no: "01",
    botanical: "Achyranthus aspera",
    graha: "Budha / Mercury",
    direction: "North East",
  },
  {
    no: "02",
    botanical: "Ficus racemosa",
    graha: "Sukra / Venus",
    direction: "East",
  },
  {
    no: "03",
    botanical: "Butea monosperma",
    graha: "Moon / Chandra / Soma",
    direction: "South East",
  },
  {
    no: "04",
    botanical: "Ficus religiosa",
    graha: "Guru / Jupiter",
    direction: "North",
  },
  {
    no: "05",
    botanical: "Acacia catechu",
    graha: "Kuja / Mangala / Mars",
    direction: "South",
  },
  {
    no: "06",
    botanical: "Calotropis procera",
    graha: "Represents Sun / Surya",
    direction: "Middle",
  },
  {
    no: "07",
    botanical: "Imperata cylindrica",
    graha: "Kethu",
    direction: "North West",
  },
  {
    no: "08",
    botanical: "Prosopis cineraria",
    graha: "Sani / Saturn",
    direction: "West",
  },
  {
    no: "09",
    botanical: "Cynodon dactylon",
    graha: "Rahu",
    direction: "South West",
  },
];

const NavagrahaCards = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#F5EFE0",
        px: { xs: 3, md: "40px" },
        pb: { xs: 8, md: "96px" },
      }}
    >
      <Box sx={{ maxWidth: "1120px", mx: "auto" }}>

        {/* Label */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontSize: "11px",
            letterSpacing: "2.6px",
            textTransform: "uppercase",
            color: "#8A6847",
            mb: 2,
          }}
        >
          Navagraha Cards
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: { xs: "36px", md: "46px" },
            lineHeight: { xs: "44px", md: "52px" },
            color: "#2A2520",
            mb: "16px",
          }}
        >
          Nine sacred botanical correspondences
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "25.6px",
            color: "#5C524A",
            mb: "48px",
          }}
        >
          Each card pairs a plant with its traditional direction and planetary
          association.
        </Typography>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(5, 1fr)",
            },
            gap: "18px",
            alignItems: "start",
          }}
        >
          {navagrahas.map((item) => (
            <Box
              key={item.no}
              sx={{
                backgroundColor: "#FBF7EC",
                border: "1px solid #E7DDC8",
                borderRadius: "18px",
                px: "16px",
                py: "16px",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              {/* Number */}
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#9C8A73",
                  mb: "4px",
                }}
              >
                {item.no}
              </Typography>

              {/* Botanical name */}
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "22px",
                  letterSpacing: "-0.3px",
                  color: "#2A2520",
                }}
              >
                {item.botanical}
              </Typography>

              {/* Graha */}
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: "#2D4A2B",
                  mb: "8px",
                }}
              >
                {item.graha}
              </Typography>

              {/* Divider */}
              <Box
                sx={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "rgba(92,82,74,0.2)",
                  mb: "8px",
                }}
              />

              {/* Direction label */}
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "9px",
                  letterSpacing: "1.8px",
                  textTransform: "uppercase",
                  color: "#9C8A73",
                  mb: "2px",
                }}
              >
                Direction
              </Typography>

              {/* Direction value */}
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "22px",
                  color: "#2A2520",
                }}
              >
                {item.direction}
              </Typography>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default NavagrahaCards;