import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LazyImage from "../Common/LazyImage";
import NavagrahaVana from "../../assets/NavagrahaVana.png";
import RasiVana from "../../assets/RasiVana.png";
import NakshatraVana from "../../assets/NakshatraVana.png";

const vanas = [
  {
    id: "01",
    route: "/navagraha-vana",
    sanskrit: "नवग्रह वन",
    title: "Navagraha Vana",
    benefits: "Graha Shanti & Vastu Harmony",
    description:
      '"Nava" means nine and "Graha" refers to the nine planetary influences in Vedic tradition. Navagraha Vana features nine sacred plants associated with these celestial bodies, symbolizing planetary balance and creating an environment that supports harmony, protection, and positive energy.',
    image: NavagrahaVana,
    imageLeft: true,
  },
  {
    id: "02",
    route: "/rasi-vana",
    sanskrit: "राशि वन",
    title: "Rasi Vana",
    benefits: "Vighna Nashana & Growth Opportunities",
    description:
      "Rashi Vana is a sacred garden featuring twelve trees representing the twelve zodiac signs. Each tree reflects the unique qualities of its corresponding rashi, creating a meaningful connection between nature and astrology while inspiring personal growth, strength, and life balance.",
    image: RasiVana,
    imageLeft: false,
  },
  {
    id: "03",
    route: "/nakshatra-vana",
    sanskrit: "नक्षत्र वन",
    title: "Nakshatra Vana",
    benefits: "For Dosha Nivarana & Well being",
    description:
      '"Nakshatra" represents the twenty-seven birth stars in Vedic astrology, while "Vana" means a sacred grove. Nakshatra Vana brings together the twenty-seven star-associated trees, each corresponding to a specific birth star, creating a space for spiritual balance, inner peace, and holistic well-being.',
    image: NakshatraVana,
    imageLeft: true,
  },
];

const PrimaryVanas = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "40px" },
        pt: { xs: 8, md: "72px" },
        pb: { xs: 8, md: "96px" },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1320px", mx: "auto" }}>
        {/* Section label */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontSize: "11px",
            letterSpacing: "2.64px",
            textTransform: "uppercase",
            color: "#A56A43",
            mb: 4,
          }}
        >
          01 — The Three Principal Vanas
        </Typography>

        {/* Cards */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          {vanas.map((vana) => (
            <Box
              key={vana.id}
              sx={{
                backgroundColor: "#FBF7EC",
                borderRadius: "20px",
                p: { xs: "20px", md: "28px" },
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: { xs: "24px", md: "40px" },
                  alignItems: "center",
                }}
              >
                {/* IMAGE LEFT */}
                {vana.imageLeft && (
                  <Box
                    sx={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      height: { xs: "240px", md: "320px" },
                      order: { xs: -1, md: 0 },
                    }}
                  >
                    <LazyImage
                      src={vana.image}
                      alt={vana.title}
                      height="100%"
                      borderRadius="16px"
                    />
                  </Box>
                )}

                {/* CONTENT */}
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {/* Sanskrit */}
                  <Typography
                    sx={{
                      fontFamily: "Tiro Devanagari Sanskrit",
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#5C3A21",
                      mb: 1,
                    }}
                  >
                    {vana.sanskrit}
                  </Typography>

                  {/* Title */}
                  <Typography
                    sx={{
                      fontFamily: "Fraunces",
                      fontWeight: 400,
                      fontSize: { xs: "30px", md: "36px" },
                      lineHeight: { xs: "36px", md: "42px" },
                      letterSpacing: "-0.4px",
                      color: "#2A2520",
                      mb: 2,
                    }}
                  >
                    {vana.title}
                  </Typography>

                  {/* Benefits */}
                  <Typography
                    sx={{
                      fontFamily: "JetBrains Mono",
                      fontSize: "10px",
                      letterSpacing: "1.8px",
                      textTransform: "uppercase",
                      color: "#5C3A21",
                      mb: 1,
                    }}
                  >
                    Benefits
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "22px",
                      color: "#2A2520",
                      pb: 1.5,
                      mb: 2,
                      borderBottom: "1px solid #E6DED0",
                    }}
                  >
                    {vana.benefits}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "23px",
                      color: "#5C524A",
                      mb: 3,
                      maxWidth: "480px",
                    }}
                  >
                    {vana.description}
                  </Typography>

                  {/* Button */}
                  <Box
                    component="button"
                    onClick={() => navigate(vana.route)}
                    sx={{
                      width: "fit-content",
                      height: "44px",
                      px: "20px",
                      border: "none",
                      borderRadius: "999px",
                      backgroundColor: "#2D4A2B",
                      color: "#FBF7EC",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "#244022" },
                    }}
                  >
                    Open detailed reading →
                  </Box>
                </Box>

                {/* IMAGE RIGHT */}
                {!vana.imageLeft && (
                  <Box
                    sx={{
                      borderRadius: "16px",
                      overflow: "hidden",
                      height: { xs: "240px", md: "320px" },
                      order: { xs: -1, md: 0 },
                    }}
                  >
                    <LazyImage
                      src={vana.image}
                      alt={vana.title}
                      height="100%"
                      borderRadius="16px"
                    />
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PrimaryVanas;