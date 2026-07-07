import { Box, Typography } from "@mui/material";

const nakshatras = [
  { no: "01", name: "Ashwini", botanical: "Strychnos nux vomica", common: "Poison nut" },
  { no: "02", name: "Bharani", botanical: "Emblica officinalis", common: "Amla" },
  { no: "03", name: "Krithika", botanical: "Ficus racemosa", common: "Fig" },
  { no: "04", name: "Rohini", botanical: "Syzygium jambolanum", common: "Jamoon" },
  { no: "05", name: "Mrugasira", botanical: "Acacia catechu", common: "Kadhira" },
  { no: "06", name: "Arudra", botanical: "Aquilaria agallocha", common: "Agar Wood" },
  { no: "07", name: "Punarvasu", botanical: "Bambusa", common: "Bamboo" },
  { no: "08", name: "Pushyami", botanical: "Ficus religiosa", common: "Peepal" },
  { no: "09", name: "Aslesha", botanical: "Mesua ferrea", common: "Naga Champa" },
  { no: "10", name: "Makha", botanical: "Ficus bengalensis", common: "Banyan" },
  { no: "11", name: "Pubba", botanical: "Butea monosperma", common: "Flame of the forest" },
  { no: "12", name: "Uttara", botanical: "Ficus infectoria", common: "Juvvi" },
  { no: "13", name: "Hastha", botanical: "Spondias mangifera", common: "Wild mango" },
  { no: "14", name: "Chitta", botanical: "Aegle marmelos", common: "Bilva" },
  { no: "15", name: "Swathi", botanical: "Terminalia arjuna", common: "Arjun" },
  { no: "16", name: "Visakha", botanical: "Limonia acidissima", common: "Elephant apple" },
  { no: "17", name: "Anuradha", botanical: "Mimusops elengi", common: "Bakul" },
  { no: "18", name: "Jyesta", botanical: "Pinus", common: "Pine" },
  { no: "19", name: "Moola", botanical: "Canarium strictum", common: "Black dammar" },
  { no: "20", name: "Purvashada", botanical: "Saraca indica", common: "Sita Asoka" },
  { no: "21", name: "Uttarashada", botanical: "Artocarpus heterophyllus", common: "Jack" },
  { no: "22", name: "Sravana", botanical: "Calotropis gigantea", common: "Milk weed" },
  { no: "23", name: "Dhanishta", botanical: "Acacia ferruginea", common: "Shami" },
  { no: "24", name: "Satabhisha", botanical: "Anthocephalus cadamba", common: "Kadamba" },
  { no: "25", name: "Uttarabhadra", botanical: "Mangifera indica", common: "Mango" },
  { no: "26", name: "Purvabhadra", botanical: "Azadirachta indica", common: "Neem" },
  { no: "27", name: "Revathi", botanical: "Madhuca indica", common: "Ippe" },
];

const NakshatraCards = () => {
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
          Nakshatra Cards
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: { xs: "32px", md: "46px" },
            lineHeight: { xs: "40px", md: "52px" },
            color: "#2A2520",
            mb: "16px",
          }}
        >
          Twenty-seven stellar tree correspondences
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
          Each card pairs the star name with its botanical and common-name
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
          {nakshatras.map((item) => (
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
              }}
            >
              {/* Number */}
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  color: "#9C8A73",
                  mb: "8px",
                }}
              >
                {item.no}
              </Typography>

              {/* Nakshatra name */}
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 400,
                  fontSize: "17px",
                  lineHeight: "22px",
                  letterSpacing: "-0.3px",
                  color: "#2A2520",
                  mb: "4px",
                }}
              >
                {item.name}
              </Typography>

              {/* Botanical */}
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  color: "#2D4A2B",
                  mb: "8px",
                }}
              >
                {item.botanical}
              </Typography>

              

              {/* Common name */}
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: 400,
                  lineHeight: "20px",
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

export default NakshatraCards;