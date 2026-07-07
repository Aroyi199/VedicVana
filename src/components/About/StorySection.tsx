import { Box, Typography } from "@mui/material";
import story from "../../assets/story.png";

const journeyItems = [
  {
    number: "01",
    label: "The Child",
    quote: "A father who taught her to notice nature.",
    body: "A childhood filled with butterflies, caterpillars, insects, and curiosity that sparked a lifelong connection with the natural world.",
  },
  {
    number: "02",
    label: "The Teacher",
    quote: "Before there was Vedic Vanas, there were butterflies.",
    body: "Through nature clubs, butterfly gardens, and environmental education, she inspired children to discover the wonder hidden in everyday biodiversity.",
  },
  {
    number: "03",
    label: "The Explorer",
    quote: "A life saved. A purpose found.",
    body: "The discovery of Nakshatra Trees led to years of research into sacred ecology, biodiversity conservation, and India’s traditional environmental wisdom.",
  },
  {
    number: "04",
    label: "The Founder",
    quote: "From research to a movement.",
    body: "Those years of learning, teaching, and exploration eventually became Vedic Vanas — a platform dedicated to creating meaningful landscapes rooted in nature, culture, and wellness.",
  },
];

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "45+", label: "Sacred landscapes" },
  { value: "9", label: "Indian states" },
];

const StorySection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: 5, lg: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto" }}>
        {/* TOP ROW */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: { xs: 6, md: 8, lg: 10 },
            mb: { xs: 8, md: 12 },
          }}
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1, maxWidth: "720px" }}>
            {/* Eyebrow */}
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "11px",
                fontWeight: 500,
                lineHeight: "15.75px",
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#5C3A21",
                mb: 3,
              }}
            >
              — About
            </Typography>

            {/* Heading */}
            <Typography
              component="h2"
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 300,
                fontSize: { xs: "40px", md: "62px", lg: "72px" },
                lineHeight: { xs: "48px", md: "68px", lg: "76px" },
                letterSpacing: "-2px",
                color: "#2A2520",
                maxWidth: "760px",
                mb: 3,
              }}
            >
              From Butterflies to{" "}
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  color: "#2D4A2B",
                }}
              >
                Sacred Landscapes
              </Box>
            </Typography>

            {/* Intro paragraph */}
            <Typography
              sx={{
                fontWeight:'400',
                maxWidth: "650px",
                fontSize: "17px",
                lineHeight: "29px",
                color: "#5C524A",
                mb: 5,
              }}
            >
              For over two decades, Dr. Veni Madhavi has explored the
              relationship between people, plants, culture, and biodiversity —
              transforming curiosity into a lifelong mission to reconnect
              communities with nature.
            </Typography>

            {/* Stats row */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns:'repeat(3,1fr)',
                mt:4,
                borderRadius:'2px',
                overflow:'visible',
                border: "0.5px solid rgba(44,37,32,0.2)",
                
              }}
            >
              {stats.map((stat,i) => (
                <Box key={i} sx={{px: 4,py:3,borderRight: i < 2 ? "0.5px solid rgba(44,37,32,0.2)" : "none",}}>
                  <Typography
                    sx={{
                      fontFamily: "Fraunces",
                      fontWeight: 300,
                      fontSize: '48px',
                      lineHeight: '48px',
                      letterSpacing:'-1px',
                      color: "#2A2520",
                      mb: 0.5,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight:'400',
                      fontSize: "12.5px",
                      lineHeight: "18px",
                      color: "#5C524A",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT IMAGE CARD */}
          <Box
            sx={{
              width: { xs: "100%", sm: "420px", lg: "380px" },
              flexShrink: 0,
              display:'flex',
              justifyContent:{xs:'center',lg:"flex-end"},
            }}
          >
            <Box
              sx={{
                position: "relative",
                width:'100%',
                maxWidth:'360px',
                height:'470px',
                boxShadow: "#2D4A2B2E",
                backgroundColor:'transparent',
                borderRadius: "22px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={story}
                alt="Dr. Veni Madhavi"
                sx={{
                  width: "380px",
                  top:'100%',
                  objectPosition:'center top',
                  height: '100%',
                  left:'730px',
                  radius:'22px',
                  objectFit: "cover",
                  display: "block",
                  
                }}
              />

              
            </Box>
          </Box>
        </Box>

        {/* JOURNEY SECTION */}
        <Box>
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: "10.5px",
              fontWeight: 500,
              lineHeight: "15.75px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#5C3A21",
              mb: 5,
            }}
          >
            The Journey
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 4, md: 5, lg: 6 },
            }}
          >
            {journeyItems.map((item) => (
              <Box key={item.number}>
                <Typography
                  sx={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#5C3A21",
                    mb: 2,
                  }}
                >
                  {item.number} — {item.label}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "19px",
                    lineHeight: "24.7px",
                    color: "#2A2520",
                    mb: 2,
                  }}
                >
                  “{item.quote}”
                </Typography>

                <Typography
                  sx={{
                    fontWeight:'400',
                    fontSize: "13.5px",
                    lineHeight: "22px",
                    color: "#5C524A",
                  }}
                >
                  {item.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StorySection;