import { Box, Typography } from "@mui/material";

const ProjectHero = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "40px" },
        pt: { xs: 8, md: "80px" },
        pb: { xs: 6, md: "64px" },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto" }}>

        {/* Eyebrow */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
          <Box
            sx={{
              width: "32px",
              height: "1px",
              backgroundColor: "#2D4A2B",
            }}
          />
          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: "10.5px",
              lineHeight: "15.57px",
              letterSpacing: "2.2px",
              fontWeight: 500,
              color: "#5C3A21",
              textTransform: "uppercase",
            }}
          >
            — Projects
          </Typography>
        </Box>

        {/* Heading */}
        <Typography
          component="h1"
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            fontSize: { xs: "42px", md: "72px" },
            lineHeight: { xs: "50px", md: "76px" },
            letterSpacing: "-2.5px",
            color: "#2A2520",
            maxWidth: "1125.33px",
            mb: 4,
            height:'116px',
            pt:'40px',
          }}
        >
          Sacred landscapes{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
            we have brought to life
          </Box>
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            fontSize: "18px",
            lineHeight: "30px",
            color: "#5C524A",
            maxWidth: "580px",
            mb: 5,
          }}
        >
          A selection of sacred landscapes across temples, meditation
          campuses, and wellness centres throughout India.
        </Typography>

        {/* Button + divider row */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>

          {/* Featured Case Study button */}
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
              backgroundColor: "#2D4A2B",
              color: "#FBF7EC",
              fontFamily: "JetBrains Mono",
              fontSize: "11px",
              letterSpacing: "2px",
              fontWeight: 500,
              textTransform: "uppercase",
              cursor: "pointer",
              flexShrink: 0,
              "&:hover": { backgroundColor: "#244022" },
            }}
          >
            <Box
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#C3922E",
                flexShrink: 0,
              }}
            />
            Featured Case Study
          </Box>

          {/* Divider line */}
          <Box
            sx={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(92, 58, 33, 0.13)",
            }}
          />

        </Box>

      </Box>
    </Box>
  );
};

export default ProjectHero;