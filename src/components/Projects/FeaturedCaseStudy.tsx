import { Box, Typography } from "@mui/material";
import LazyImage from "../Common/LazyImage";
import PPVI from "../../assets/PPVI.png";

const FeaturedCaseStudy = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "40px" },
        pb: { xs: 8, md: "96px" },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto" }}>
        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: { xs: "38px", md: "60px" },
            lineHeight: { xs: "46px", md: "68px" },
            letterSpacing: "-1.5px",
            color: "#2A2520",
            maxWidth: "800px",
            mb: 3,
          }}
        >
          Transforming Land into a{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
            Living Ecosystem
          </Box>
        </Typography>
        {/* Subtext */}
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "30px",
            color: "#5C524A",
            maxWidth: "860px",
            mb: 5,
          }}
        >
          How Vedic Vanas designed a large-scale sacred landscape that
          nurtures biodiversity, wellbeing, meditation, and ecological
          harmony.
        </Typography>

        {/* Hero image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "300px", md: "520px" },
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <LazyImage
            src={PPVI}
            alt="Pyramid Valley International"
            height="100%"
            objectPosition="center"
          />

          {/* Dark gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 20, md: 28 },
              left: { xs: 20, md: 28 },
              right: { xs: 20, md: 28 },
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 2,
              zIndex: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  fontWeight: 400,
                  color: "rgba(245,239,224,0.55)",
                  textTransform: "uppercase",
                  mb: "6px",
                }}
              >
                Meditation Campus · Kanakapura PO, Bengaluru, Karnataka
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 400,
                  fontSize: { xs: "24px", md: "36px" },
                  lineHeight: 1.2,
                  color: "#FBF7EC",
                }}
              >
                Pyramid Valley International
              </Typography>
            </Box>

            {/* View full project button */}
            <Box
              component="button"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                px: "20px",
                height: "44px",
                border: "none",
                borderRadius: "999px",
                backgroundColor: "rgba(251,247,236,0.15)",
                color: "#FBF7EC",
                fontFamily: "Inter",
                fontSize: "14px",
                fontWeight: 500,
                cursor: "pointer",
                flexShrink: 0,
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "rgba(251,247,236,0.25)",
                },
              }}
            >
              View full project →
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedCaseStudy;