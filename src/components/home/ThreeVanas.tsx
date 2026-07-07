import { Box, Typography } from "@mui/material";
import LazyImage from "../Common/LazyImage";
import { useNavigate } from "react-router-dom";
import NakshatraVana from "../../assets/NakshatraVana.png";
import RasiVana from "../../assets/RasiVana.png";
import NavagrahaVana from "../../assets/NavagrahaVana.png";

const VanaCards = [
  {
    sanskrit: "नक्षत्र वन",
    title: "Nakshatra Vana",
    description: "For Dosha Nivarana & Well-being",
    trees: "27",
    image: NakshatraVana,
    path: "/nakshatra-vana",
  },
  {
    sanskrit: "राशि वन",
    title: "Rasi Vana",
    description: "For Graha Shanti & Vastu Harmony",
    trees: "12",
    image: RasiVana,
    path: "/rasi-vana",
  },
  {
    sanskrit: "नवग्रह वन",
    title: "Navagraha Vana",
    description: "For Vighna Nashana & Growth Opportunities",
    trees: "9",
    image: NavagrahaVana,
    path: "/navagraha-vana",
  },
];

const ThreeVanas = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#EFE8D3",
        px: { xs: 3, md: 6, lg: 10 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
        {/* Top section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mb: 6,
          }}
        >
          {/* Left heading */}
          <Box>
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontWeight: 500,
                fontSize: "11px",
                lineHeight: "17px",
                letterSpacing: "1.98px",
                textTransform: "uppercase",
                color: "#5C3A21",
                mb: 2,
              }}
            >
              The Three Principal Vanas
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 300,
                fontSize: { xs: "34px", md: "64px" },
                lineHeight: { xs: "42px", md: "67px" },
                letterSpacing: "-0.64px",
                color: "#2A2520",
              }}
            >
              Three groves,
              <br />
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  color: "#2A2520",
                }}
              >
                three cosmologies.
              </Box>
            </Typography>
          </Box>

          {/* Right button */}
          <Typography
            onClick={() => navigate("/vanas")}
            sx={{
              borderRadius: "999px",
              border: "1px solid #B9AE98",
              color: "#2A2520",
              textTransform: "none",
              px: 3,
              py: 1.2,
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "21.7px",
              letterSpacing: "0.14px",
              alignSelf: { xs: "flex-start", md: "center" },
              cursor: "pointer",
            }}
          >
            View all vanas
          </Typography>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {VanaCards.map((card, index) => (
            <Box
              key={index}
              onClick={() => navigate(card.path)}
              sx={{
                backgroundColor: "#FBF7EC",
                borderRadius: "24px",
                p: 2,
                boxShadow: "0 4px 12px rgba(92, 58, 33, 0.04)",
                cursor: "pointer",
                transition: "0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 220, md: 240 },
                  borderRadius: "18px",
                  overflow: "hidden",
                  mb: 2.5,
                }}
              >
                <LazyImage
                  src={card.image}
                  alt={card.title}
                  height="100%"
                  borderRadius="18px"
                />
              </Box>

              {/* Sanskrit */}
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#5C524A",
                  mb: 1,
                }}
              >
                {card.sanskrit}
              </Typography>

              {/* Title + tree badge */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                  mb: 1.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontWeight: 300,
                    fontSize: { xs: "24px", md: "34px" },
                    lineHeight: 1.2,
                    color: "#2A2520",
                  }}
                >
                  {card.title}
                </Typography>

                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "#163A33",
                    color: "#F8F5EF",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Fraunces",
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      color: "#F5EFE0",
                    }}
                  >
                    {card.trees}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "JetBrains Mono",
                      fontSize: "8px",
                      lineHeight: "12.4px",
                      fontWeight: 400,
                      color: "#F5EFE0",
                    }}
                  >
                    TREES
                  </Typography>
                </Box>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "#5C524A",
                  mb: 3,
                }}
              >
                {card.description}
              </Typography>

              {/* Read link */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  color: "#2A2520",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Read the tradition →
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ThreeVanas;