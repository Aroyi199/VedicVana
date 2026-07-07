import { Box, Typography } from "@mui/material";
import story from "../../assets/story.png";

const FullStoryHero = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 2.5, sm: 3, md: "40px" },
        pt: { xs: 6, md: "72px" },
        pb: { xs: 6, md: "72px" },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1120px", mx: "auto" }}>

        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontWeight: 500,
            fontSize: "10.5px",
            lineHeight: "15.75px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#5C3A21",
            mb: "18px",
            textAlign:'center',
          }}
        >
          The Story Behind Vedic Vanas
        </Typography>

        {/* Heading */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: { xs: "38px", md: "72px" },
            lineHeight: { xs: "46px", md: "80px", lg: "88px" },
            letterSpacing: "-2.5px",
            color: "#2A2520",
            mb: 2,
          }}
        >
          From Butterflies to{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
            Sacred Landscapes
          </Box>
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontSize: "17px",
            lineHeight: "29px",
            color: "#5C524A",
            maxWidth: "1096px",
            mb: { xs: 4, md: 5 },
          }}
        >
          The complete story of Dr. Veni Madhavi — botanist, educator,
          researcher, and founder of Vedic Vanas. A journey that began with a
          father&apos;s gentle instruction and led to decades of sacred ecology
          practice across India.
        </Typography>

        {/* Image */}
        <Box
          sx={{
            width: "100%",
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={story}
            alt="Dr. Veni Madhavi — Founder, Botanist, Researcher"
            sx={{
              width: "100%",
              display: "block",
              height: { xs: "300px", sm: "400px", md: "560px" },
              objectFit: "cover",
              objectPosition: "center 12%",
            }}
          />

          {/* Overlay */}
          <Box
            sx={{
              position: "absolute",
              left: { xs: "20px", md: "32px" },
              bottom: { xs: "20px", md: "28px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 400,
                fontSize: { xs: "22px", md: "28px" },
                lineHeight: { xs: "28px", md: "34px" },
                color: "#FBF7EC",
                mb: 0.5,
              }}
            >
              Dr. Veni Madhavi
            </Typography>
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10px",
                lineHeight: "15px",
                letterSpacing: "2px",
                fontWeight: 500,
                color: "rgba(245,239,224,0.58)",
                textTransform: "uppercase",
              }}
            >
              Founder · Botanist · Researcher · Vedic Vanas
            </Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default FullStoryHero;