import { Box } from "@mui/material";
import NakshatraVana from "../../assets/NakshatraVana.png";
import LazyImage from "../Common/LazyImage";

const NakshatraImage = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "#F5EFE0",
        px: "40px",
        pb: "72px",
      }}
    >
      <Box
        sx={{
          maxWidth: "1120px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "520px",
            overflow: "hidden",
            borderRadius: "24px",
          }}
        >
          <LazyImage
            src={NakshatraVana}
            alt="Nakshatra Vana"
            height="100%"
            borderRadius="24px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NakshatraImage;