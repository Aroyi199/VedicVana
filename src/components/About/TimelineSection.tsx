import { Box, Typography } from "@mui/material";

const milestones = [
  { year: "2006", label: "Founded", items: [] },
  { year: "2008", label: "Vagdevi Vilas School", items: [] },
  { year: "2010", label: null, items: ["Pyramid Valley International", "Art of Living Center"] },
  {
    year: "2012",
    label: null,
    items: ["Sri Venkateshwara Old Age Home and Naturopathy Center", "Hanumathpuram Temple near Gannavaram"],
  },
  { year: "2010 - 24", label: "14 years of contribution to Aaradhana Magazine", items: [] },
];

const TimelineSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#EFE8D3",
        px: { xs: 3, md: "40px" },
        py: { xs: 6, md: 8 },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1320px", mx: "auto" }}>

        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontSize: "11px",
            letterSpacing: "2px",
            fontWeight: 500,
            color: "#5C3A21",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          — Timeline
        </Typography>

        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 400,
            fontSize: { xs: "28px", md: "36px" },
            color: "#2A2520",
            mb: 6,
          }}
        >
          From Sacred Roots to{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
            Expanding Horizons
          </Box>
        </Typography>

        {/* Milestones row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 2 },
          }}
        >
          {milestones.map((milestone) => (
            <Box key={milestone.year} sx={{ flex: 1 }}>

              {/* Per-column solid top line */}
              <Box
                sx={{
                  width: "100%",
                  borderTop: "1px solid rgba(92, 58, 33, 0.4)",
                  mb: 3,
                }}
              />

              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "#3D2B1F",
                  mb: 1,
                }}
              >
                {milestone.year}
              </Typography>

              {milestone.label && (
                <Typography
                  sx={{
                    fontSize: "12px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    color: "#5C524A",
                    lineHeight: 1.6,
                  }}
                >
                  {milestone.label}
                </Typography>
              )}

              {milestone.items.length > 0 && (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0.75 }}>
                  {milestone.items.map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        fontSize: "12px",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                        color: "#5C524A",
                        lineHeight: 1.6,
                      }}
                    >
                      • {item}
                    </Typography>
                  ))}
                </Box>
              )}

            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default TimelineSection;