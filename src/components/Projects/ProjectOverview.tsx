import { Box, Typography } from "@mui/material";

const projectDetails = [
  { label: "Project Type", value: "Meditation Campus" },
  { label: "Location", value: "Kanakapura Rd, Bengaluru" },
  { label: "Character", value: "Meditative & Spiritual" },
  { label: "Themed Zones", value: "5 parks" },
  { label: "Approach", value: "Biodiversity-first" },
];

const ProjectOverview = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "40px" },
        py: { xs: 8, md: "80px" },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 380px" },
            gap: { xs: 6, md: "80px" },
            alignItems: "start",
          }}
        >

          {/* LEFT — overview text */}
          <Box>
            {/* Eyebrow with left border */}
            <Box
              sx={{
                borderLeft: "2px solid #2D4A2B",
            
                pl: 2,
                mb: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10.5px",
                  lineHeight:'15.75px',
                  letterSpacing: "2.2px",
                  fontWeight: 500,
                  color: "#5C3A21",
                  textTransform: "uppercase",
                }}
              >
                Project Overview
              </Typography>
            </Box>

            
            <Typography
              sx={{
                fontSize: "17px",
                fontWeight:'400',
                lineHeight: "30px",
                color: "#2A2520",
                mb: 4,
              }}
            >
              Pyramid Valley International envisioned a landscape that would
              support meditation, biodiversity, learning, and spiritual
              wellbeing. Vedic Vanas designed a sacred ecological environment
              that integrates traditional wisdom with biodiversity-focused
              landscape planning.
            </Typography>

            
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight:'400',

                lineHeight: "28px",
                color: "#5C524A",
              }}
            >
              The result is a living campus where every zone — from the
              Nakshatra Vana to the butterfly habitat — functions both as a
              spiritual resource and an ecological one, creating a
              self-sustaining ecosystem that deepens and matures over time.
            </Typography>
          </Box>

          {/* RIGHT — project detail cards */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {projectDetails.map((detail) => (
              <Box
                key={detail.label}
                sx={{
                  backgroundColor: "#FBF7EC",
                  border: "1px solid #E7DDC8",
                  borderRadius: "14px",
                  px: "20px",
                  py: "16px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "9.5px",
                    letterSpacing: "1.8px",
                    fontWeight: 400,
                    lineHeight:'14.25px',
                    color: "#5C3A21",
                    textTransform: "uppercase",
                    mb: "6px",
                  }}
                >
                  {detail.label}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontSize: "14.5px",
                    fontWeight: 500,
                    lineHeight: "21.75px",
                    color: "#2A2520",
                  }}
                >
                  {detail.value}
                </Typography>
              </Box>
            ))}
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default ProjectOverview;