import { Box, Typography } from "@mui/material";

const zodiacTrees = [
  {
    no: "01",
    zodiac: "Mesha Raasi",
    botanical: "Pterocarpus santalinus",
    common: "Raktha Chandana",
  },
  {
    no: "02",
    zodiac: "Vrishabha Raasi",
    botanical: "Alstonia scholaris",
    common: "Sapthaparni",
  },
  {
    no: "03",
    zodiac: "Midhuna Raasi",
    botanical: "Artocarpus heterophyllus",
    common: "Jack tree",
  },
  {
    no: "04",
    zodiac: "Karkataka Raasi",
    botanical: "Butea monosperma",
    common: "Flame of the forest",
  },
  {
    no: "05",
    zodiac: "Simha Raasi",
    botanical: "Stereospermum chelonoides",
    common: "Paadari",
  },
  {
    no: "06",
    zodiac: "Kanya Raasi",
    botanical: "Mangifera indica",
    common: "Mango",
  },
  {
    no: "07",
    zodiac: "Tula Raasi",
    botanical: "Mimusops elengi",
    common: "Pogada",
  },
  {
    no: "08",
    zodiac: "Vrishchika Raasi",
    botanical: "Acacia catechu",
    common: "Kadhira",
  },
  {
    no: "09",
    zodiac: "Dhanasu Raasi",
    botanical: "Ficus religiosa",
    common: "Peepal",
  },
  {
    no: "10",
    zodiac: "Makara Raasi",
    botanical: "Dalbergia sissoo",
    common: "Shisham",
  },
  {
    no: "11",
    zodiac: "Kumbha Raasi",
    botanical: "Prosopis cineraria",
    common: "Shami",
  },
  {
    no: "12",
    zodiac: "Meena Raasi",
    botanical: "Ficus bengalensis",
    common: "Banyan",
  },
];

const RasiCards = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#F5EFE0",
        px: "40px",
        pb: "96px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1120px",
          mx: "auto",
        }}
      >
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
          Raasi Cards
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: "46px",
            lineHeight: "52px",
            color: "#2A2520",
            mb: '16px',
          }}
        >
          Twelve zodiac-tree correspondences
        </Typography>
        <Typography sx={{
            fontWeight:400,
            fontSize:'16px',
            lineHeight:'25.6px',
            color:'#5C524A',
            mb:'48px',
        }}>
            Each card highlights a raasi with its associated botanical identity and common name.
        </Typography>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "18px",
          }}
        >
          {zodiacTrees.map((item) => (
            <Box
              key={item.no}
              sx={{
                background: "#FBF7EC",
                border: "1px solid #E7DDC8",
                borderRadius: "18px",
                px: "16px",
                py:'16px',
                display:'flex',
                flexDirection:'column',
                
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#9C8A73",
                  
                }}
              >
                {item.no}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight:400,
                  fontSize: "17.9px",
                  lineHeight:'20.61px',
                  letterSpacing:'-0.36px',
                  color: "#2A2520",
                  
                }}
              >
                {item.zodiac}
              </Typography>

              <Typography
                sx={{
                  fontSize: "15.4px",
                  fontWeight:600,
                  lineHeight: "24.58px",
                  color: "#2D4A2B",
                  fontStyle: "Semi Bold",
                  mb:'4px',
                }}
              >
                {item.botanical}
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  fontWeight:'400',
                  fontSize: "14.7px",
                  lineHeight: "23.55px",
                  color: "#8B5A2B",
                }}
              >
                {item.common}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default RasiCards;