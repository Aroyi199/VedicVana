import { Box } from "@mui/material";
import RasiVana from "../../assets/RasiVana.png";
import LazyImage from "../Common/LazyImage";

const RasiImage = () => {
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
            src={RasiVana}
            alt="Rasi Vana"
            height="100%"
            borderRadius="24px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RasiImage;