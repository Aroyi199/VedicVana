import { Box, Typography } from "@mui/material";
import templeGardenPhoto from "../../assets/templeGarden.png";
import LazyImage from "../Common/LazyImage";

const philosophyPoints = [
  {
    title: "Tradition",
    description: "Every plant chosen from Vedic and Puranic texts.",
  },
  {
    title: "Ecology",
    description: "Native species. No pesticides. Slow-grown.",
  },
  {
    title: "Continuity",
    description: "Designed to last three human generations.",
  },
  {
    title: "Support",
    description: "Guidance on tree rituals and remedies.",
  },
];

const PhilosophySection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "40px" },
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1240px",
          mx: "auto",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, md: "64px" },
        }}
      >
        {/* Photo */}
        <Box
          sx={{
            width: { xs: "100%", md: "588px" },
            height: { xs: "320px", md: "588px" },
            borderRadius: "8px",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <LazyImage
            src={templeGardenPhoto}
            alt="Temple garden with sacred grove"
            height="100%"
            borderRadius="8px"
          />
        </Box>

        {/* Content */}
        <Box sx={{ width: "100%", maxWidth: "588px" }}>
          {/* Eyebrow */}
          <Typography
            sx={{
              fontFamily: "'JetBrains Mono', monospace",
              lineHeight: "17px",
              fontSize: "11px",
              letterSpacing: "1.98px",
              fontWeight: 500,
              color: "#5C3A21",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            Our Philosophy
          </Typography>

          {/* Heading */}
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 300,
              fontSize: { xs: "36px", md: "48px" },
              lineHeight: "55.2px",
              letterSpacing: "-0.48px",
              color: "#2A2520",
              mb: 3,
            }}
          >
            Gardens that{" "}
            <Box
              component="span"
              sx={{ fontStyle: "italic", color: "#2D4A2B" }}
            >
              remember.
            </Box>
          </Typography>

          {/* Paragraphs */}
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16.5px",
              lineHeight: "27.23px",
              letterSpacing: "0%",
              color: "#5C524A",
              mb: 3,
            }}
          >
            We believe a temple without its grove is incomplete. The
            śilpa-śāstra describe the garden as a necessary organ of worship —
            shelter for deities, medicine for devotees, habitat for the
            unseen.
          </Typography>

          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "16.5px",
              lineHeight: "27.23px",
              letterSpacing: "0%",
              color: "#5C524A",
              mb: 3,
            }}
          >
            Our work begins with listening. To the priest, to the soil, to
            the prevailing winds. Every design proceeds from what the site
            asks of us, not from what we wish to impose.
          </Typography>

          {/* Philosophy points grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              rowGap: "24px",
              columnGap: "24px",
            }}
          >
            {philosophyPoints.map((point) => (
              <Box key={point.title}>
                <Typography
                  sx={{
                    fontFamily: "'Fraunces', serif",
                    lineHeight: "31px",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#2A2520",
                    letterSpacing: "-0.2px",
                    mb: 0.5,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color: "#2D4A2B",
                      fontSize: "20px",
                      mr: 1,
                    }}
                  >
                    •
                  </Box>
                  {point.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "13.5px",
                    lineHeight: "20.93px",
                    letterSpacing: "0%",
                    color: "#5C524A",
                  }}
                >
                  {point.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PhilosophySection;