import { useState } from "react";
import { Box } from "@mui/material";

interface LazyImageProps {
  src: string;
  alt: string;
  height?: string | number;
  borderRadius?: string;
  objectPosition?: string;
}

const LazyImage = ({
  src,
  alt,
  height = "100%",
  borderRadius = "12px",
  objectPosition = "center center",
}: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        height,
        borderRadius,
        overflow: "hidden",
        backgroundColor: "#E6DED0",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition,
          display: "block",
          filter: loaded ? "blur(0px)" : "blur(20px)",
          transform: loaded ? "scale(1)" : "scale(1.05)",
          transition: "filter 0.5s ease-out, transform 0.5s ease-out",
        }}
      />
    </Box>
  );
};

export default LazyImage;