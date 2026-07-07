import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const beliefs = [
  "Every plant has a purpose.",
  "Every landscape tells a story.",
  "Every child deserves a chance to experience wonder in nature.",
  "Every one of us can leave the Earth richer in life than we found it.",
];

const CoreBeliefsSection = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: 5, lg: 6 },
        py: { xs: 8, md: 12 },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto" }}>

        {/* TOP ROW: heading + beliefs list */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 10 },
            alignItems: "flex-start",
            mb: { xs: 8, md: 10 },
          }}
        >
          {/* LEFT: heading */}
          <Box sx={{ flexShrink: 0, maxWidth: { xs: "100%", md: "280px" } }}>
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
               
                fontSize: "11px",
                fontsize:'10.5px',
                letterSpacing: "2.5px",
                fontWeight: 500,
                color: "#5C3A21",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              Core Beliefs
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 300,
                fontSize: "36.16px",
                lineHeight: '43.39px',
                letterSpacing: "-0.6px",
                color: "#2A2520",
              }}
            >
              What we hold
              <br />
              <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
                true.
              </Box>
            </Typography>
          </Box>

          {/* RIGHT: beliefs list */}
          <Box
            sx={{
              flex: 1,
              pt: { xs: 0, md: 6 },
            }}
          >
            {beliefs.map((belief, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 2,
                  py: "18px",
                  borderBottom: i < beliefs.length - 1
                    ? "0.5px solid rgba(44,37,32,0.12)"
                    : "none",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#2D4A2B",
                    fontSize: "8px",
                    flexShrink: 0,
                    mt: "2px",
                  }}
                >
                  ✦
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontSize: '21px',
                    fontWeight: 400,
                    color: "#2A2520",
                    lineHeight: '30px',
                  }}
                >
                  {belief}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA BANNER */}
        <Box
          sx={{
            backgroundColor: "#2D4A2B",
            borderRadius: "16px",
            px: { xs: 4, md: 7 },
            py: { xs: 5, md: 6 },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10px",
                lineHeight:'15px',
                letterSpacing: "2.5px",
                fontWeight: 500,
                color: "#F5EFE066",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Read Full Story
            </Typography>
            <Typography
              component="h3"
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 300,
                fontSize:  "42.19px" ,
                lineHeight: '47.25px',
                letterSpacing: "-1px",
                color: "#F5EFE0",
                mb: 1.5,
              }}
            >
              The Complete Journey Behind Vedic Vanas
            </Typography>
            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight:'300',
                fontStyle: "italic",
                fontSize: "18px",
                lineHeight: '27px',
                color: "#F5EFE099",
                maxWidth: "520px",
              }}
            >
              Discover the experiences, inspirations, research, and stories that
              shaped a lifelong mission to reconnect people with nature through
              sacred landscapes.
            </Typography>
          </Box>

          <Box sx={{ flexShrink: 0 }}>
            <Box
           
              component="button"
              onClick={() => navigate("/full-story")}
              sx={{
                backgroundColor: "#FBF7EC",
                border: "none",
                borderRadius: "100px",
                px: 4,
                py: 1.75,
                fontFamily: "Fraunces",
                fontSize: "14px",
                lineHeight:'21px',
                fontWeight:'500',
                color: "#2A2520",
                cursor: "pointer",
                whiteSpace: "nowrap",
                display: "flex",
                alignItems: "center",
                gap: 1,
                "&:hover": { backgroundColor: "#EFE8D3" },
              }}
            >
              Read Full Story →
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default CoreBeliefsSection;