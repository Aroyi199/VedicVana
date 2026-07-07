import { Box, Typography } from "@mui/material";
import LazyImage from "../Common/LazyImage";
import P1 from "../../assets/P1.jpg";
import P2 from "../../assets/P2.png";
import P3 from "../../assets/P3.png";
import P4 from "../../assets/P4.png";
import P5 from "../../assets/P5.png";

const ImageGallery = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: "40px",
        pb: "96px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
        }}
      >
        {/* Section Heading */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            mb: 4,
          }}
        >
          <Box
            sx={{
              width: "2px",
              height: "18px",
              backgroundColor: "#2D4A2B",
            }}
          />
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: "10.5px",
              fontWeight: 500,
              letterSpacing: "2.2px",
              color: "#5C3A21",
              textTransform: "uppercase",
            }}
          >
            Image Gallery
          </Typography>
        </Box>

        {/* Top Images */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
            mb: "12px",
          }}
        >
          <Box sx={{ width: "100%", height: "545px", borderRadius: "16px", overflow: "hidden" }}>
            <LazyImage src={P1} alt="Gallery 1" height="100%" borderRadius="16px" />
          </Box>
          <Box sx={{ width: "100%", height: "545px", borderRadius: "16px", overflow: "hidden" }}>
            <LazyImage src={P2} alt="Gallery 2" height="100%" borderRadius="16px" />
          </Box>
        </Box>

        {/* Bottom Images */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "12px",
          }}
        >
          {[P3, P4, P5].map((image, index) => (
            <Box
              key={index}
              sx={{ width: "100%", height: "360px", borderRadius: "16px", overflow: "hidden" }}
            >
              <LazyImage
                src={image}
                alt={`Gallery ${index + 3}`}
                height="100%"
                borderRadius="16px"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImageGallery;