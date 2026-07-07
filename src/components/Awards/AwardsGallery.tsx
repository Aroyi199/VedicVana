import { Box } from "@mui/material";
import LazyImage from "../Common/LazyImage";
import AP1 from "../../assets/AP1.png";
import AP2 from "../../assets/AP2.png";
import AP3 from "../../assets/AP3.png";
import AP4 from "../../assets/AP4.png";
import AP5 from "../../assets/AP5.png";
import AP6 from "../../assets/AP6.png";

const images = [AP1, AP2, AP3, AP4, AP5, AP6];
const rowHeights = [340, 280, 340];

const AwardsGallery = () => {
  return (
    <Box
      sx={{
        background: "rgba(245, 239, 224, 1)",
        pb: 10,
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 3,
        }}
      >
        {images.map((image, index) => {
          const rowIndex = Math.floor(index / 2);
          return (
            <LazyImage
              key={index}
              src={image}
              alt={`Award ${index + 1}`}
              height={rowHeights[rowIndex]}
              borderRadius="18px"
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default AwardsGallery;