import { Box, Typography } from "@mui/material";

import VideoCard2 from "../../assets/VideoCard2.png";
import VideoCard3 from "../../assets/VideoCard3.png";
import VideoCard4 from "../../assets/VideoCard4.png";
import VideoCard5 from "../../assets/VideoCard5.png";
import VideoCard from "../../assets/VideoCard.png";
import VideoCard6 from "../../assets/VideoCard6.png";

const images = [
  VideoCard2,
  VideoCard3,
  VideoCard4,
  VideoCard5,
  VideoCard,
  VideoCard6,
];

const YouTubeSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#F5EFE0",
        px: { xs: 3, md: "40px" },
        pb: { xs: "70px", md: "90px" },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto", px: { xs: 3, md: "48px" } }}>

        {/* Heading */}
        <Box sx={{ mb: "32px" }}>
          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "21px",
              color: "#2D4A2B",
              mb: "10px",
            }}
          >
            YouTube Videos
          </Typography>
          <Box sx={{ width: "70px", height: "2px", background: "#2D4A2B" }} />
        </Box>

        {/* Images Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: "18px",
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "14px",
                overflow: "hidden",
                aspectRatio: "16/9",
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`Media ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default YouTubeSection;