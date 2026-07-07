import { Box, Typography } from "@mui/material";

const projectHighlights = [
  "5 elements theme park around the Pyramid",
  "Forest ecosystem zones",
  "Fruit & fragrance theme parks",
  "Panchavati sacred grove",
  "Lily pond",
  "Navagraha Vana",
  "Nakshatra Vana",
  "Butterfly, bees & birds habitat",
  "Buddha Meditation Garden",
  "Native species nursery",
];

const ecologicalImpact = [
  "Increased pollinator activity",
  "Enhanced local biodiversity",
  "Native habitat creation",
  "Butterfly & bird support",
  "Improved ecological resilience",
  "Long-term environmental stewardship",
];

const spiritualImpact = [
  "Spaces for reflection & silence",
  "Meditation-supportive environment",
  "Sacred ecological education",
  "Deep connection with nature",
  "Living traditional landscape wisdom",
];

const ProjectImpact = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "40px" },
        py: { xs: 8, md: "90px" },
      }}
    >
      <Box
        sx={{
          maxWidth: "1320px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(3, minmax(0, 1fr))",
            },
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT CARD */}
          <Box
            sx={{
              background: "#FBF7EC",
              border: "1px solid rgba(92,58,33,0.12)",
              borderRadius: "20px",
              p: "30px",
              minHeight: "456px",
              boxShadow: "0px 8px 30px rgba(39,33,25,0.05)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: "2px",
                  height: "18px",
                  background: "#B58A35",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#5C3A21",
                }}
              >
                Project Highlights
              </Typography>
            </Box>

            {projectHighlights.map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  mb: 2.2,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#8E6A2C",
                    mt: "9px",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "#2A2520",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* CENTER CARD */}
          <Box
            sx={{
              background:
                "linear-gradient(180deg,#234F2D 0%,#1E4527 52%,#18371E 100%)",
              borderRadius: "20px",
              p: "30px",
              minHeight: "456px",
              boxShadow: "0px 8px 30px rgba(39,33,25,0.08)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: 4,
              }}
            >
              <Box
                sx={{
                  width: "2px",
                  height: "18px",
                  background: "#C3922E",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(251,247,236,.7)",
                }}
              >
                Ecological Impact
              </Typography>
            </Box>

            {ecologicalImpact.map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#C3922E",
                    mt: "9px",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "#FBF7EC",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* RIGHT CARD */}
          <Box
            sx={{
              background: "#FBF7EC",
              border: "1px solid #E7DDC8",
              borderRadius: "22px",
              p: "30px",
              minHeight: "456px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 8px 30px rgba(0,0,0,.04)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                mb: "38px",
              }}
            >
              <Box
                sx={{
                  width: "2px",
                  height: "18px",
                  background: "#2D4A2B",
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "JetBrains Mono",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#5C3A21",
                }}
              >
                Spiritual Impact
              </Typography>
            </Box>

            {spiritualImpact.map((item) => (
              <Box
                key={item}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  mb: "20px",
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#8E6A2C",
                    mt: "9px",
                    flexShrink: 0,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "#2A2520",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}

            <Box
              sx={{
                mt: "auto",
                pt: "42px",
                borderTop: "1px solid rgba(92,58,33,0.12)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Fraunces",
                  fontWeight: 300,
                  fontSize: "64px",
                  lineHeight: "60px",
                  letterSpacing: "-2px",
                  color: "#2A2520",
                }}
              >
                5+
              </Typography>
              <Typography
                sx={{
                  mt: 1,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#5C524A",
                  maxWidth: "220px",
                }}
              >
                interconnected sacred zones forming one living ecosystem
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectImpact;