import { Box, Typography } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import SelfImprovementOutlinedIcon from "@mui/icons-material/SelfImprovementOutlined";
import FlutterDashOutlinedIcon from "@mui/icons-material/FlutterDashOutlined";
import FamilyRestroomOutlinedIcon from "@mui/icons-material/FamilyRestroomOutlined";

const benefits = [
  {
    number: "01",
    title: "Wellbeing",
    description:
      "Create a space that supports emotional balance, peace of mind, and holistic wellbeing.",
    icon: <FavoriteOutlinedIcon sx={{ fontSize: 28, color: "#FBF7EC" }} />,
    align: "top",
  },
  {
    number: "02",
    title: "Harmony & Prosperity",
    description:
      "Invite positivity, balance, abundance, and meaningful growth into everyday life.",
    icon: <AutoAwesomeOutlinedIcon sx={{ fontSize: 28, color: "#FBF7EC" }} />,
    align: "bottom",
  },
  {
    number: "03",
    title: "Spiritual Connection",
    description:
      "Reconnect with ancient wisdom, sacred traditions, and a deeper relationship with nature.",
    icon: (
      <SelfImprovementOutlinedIcon sx={{ fontSize: 28, color: "#FBF7EC" }} />
    ),
    align: "top",
  },
  {
    number: "04",
    title: "Biodiversity Restoration",
    description:
      "Support birds, butterflies, pollinators, and native species while restoring ecological balance.",
    icon: <FlutterDashOutlinedIcon sx={{ fontSize: 28, color: "#FBF7EC" }} />,
    align: "bottom",
  },
  {
    number: "05",
    title: "Living Legacy",
    description:
      "Leave behind a meaningful landscape that benefits your family, future generations, and the planet.",
    icon: (
      <FamilyRestroomOutlinedIcon sx={{ fontSize: 28, color: "#FBF7EC" }} />
    ),
    align: "top",
  },
];

const SacredGarden = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#EFE8D3",
        px: { xs: 2.5, md: 5 },
        py: { xs: 7, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto" }}>
        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontSize: "11px",
            lineHeight: "16px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            textAlign: "center",
            color: "#7A5A3A",
            mb: 2.5,
          }}
        >
          Benefits of Sacred Gardens
        </Typography>

        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 300,
            textAlign: "center",
            color: "#241F1A",
            letterSpacing: "-0.03em",
            fontSize: { xs: "34px", md: "64px" },
            lineHeight: { xs: 1.2, md: "72px" },
            maxWidth: "1000px",
            mx: "auto",
            mb: 3,
          }}
        >
          Don&apos;t Just Wear a Remedy.
          <br />
          <Box
            component="span"
            sx={{
              fontStyle: "italic",
              color: "#2D4A2B",
            }}
          >
            Plant Your Remedy.
          </Box>
          <br />
          Reap a Lifetime of Blessings.
        </Typography>

        {/* Subtext */}
        <Typography
          sx={{
            maxWidth: "900px",
            mx: "auto",
            textAlign: "center",
            color: "#3F3934",
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: { xs: "28px", md: "34px" },
            mb: { xs: 7, md: 9 },
          }}
        >
          A sacred garden is more than a collection of plants. It is a living
          ecosystem that nurtures wellbeing, harmony, biodiversity, spiritual
          growth, and lasting positive impact.
        </Typography>

        
        <Box
          sx={{
            position: "relative",
            minHeight: { xs: "auto", lg: "560px" },
            mb: 10,
          }}
        >
          {/* Dotted wave */}
          <Box
            sx={{
              display: { xs: "none", lg: "block" },
              position: "absolute",
              left: 0,
              right: 0,
              top: "170px",
              height: "160px",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <svg
              viewBox="0 0 1320 180"
              preserveAspectRatio="none"
              style={{ width: "100%", height: "100%" }}
            >
              <path
                d="
                  M 20 95
                  C 110 95, 155 40, 260 40
                  S 430 150, 560 150
                  S 720 40, 860 40
                  S 1030 150, 1160 150
                  S 1260 95, 1320 95
                "
                fill="none"
                stroke="#CEC3AF"
                strokeWidth="1.6"
                strokeDasharray="5 6"
              />
            </svg>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(5, 1fr)",
              },
              gap: { xs: 4, sm: 5, lg: 2 },
              position: "relative",
              zIndex: 2,
              alignItems: "start",
            }}
          >
            {benefits.map((benefit) => {
              const isTop = benefit.align === "top";

              return (
                <Box
                  key={benefit.number}
                  sx={{
                    position: "relative",
                    minHeight: { xs: "auto", lg: "520px" },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {/* TOP TEXT */}
                  {isTop ? (
                    <Box
                      sx={{
                        maxWidth: "220px",
                        mb: { xs: 2.5, lg: 0 },
                        minHeight: { lg: "150px" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Fraunces",
                          fontSize: { xs: "24px", md: "24px" },
                          lineHeight: 1.25,
                          fontWeight: 400,
                          color: "#241F1A",
                          mb: 1.5,
                        }}
                      >
                        {benefit.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4B443D",
                          fontSize: "15px",
                          lineHeight: "1.75",
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ display: { xs: "none", lg: "block" }, minHeight: "150px" }} />
                  )}

                  {/* ICON */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      backgroundColor: "#2D4A2B",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 12px 28px rgba(6,46,42,0.16)",
                      mt: {
                        xs: 0,
                        lg: isTop ? "40px" : "140px",
                      },
                      mb: {
                        xs: 2.5,
                        lg: isTop ? "0" : "0",
                      },
                      flexShrink: 0,
                    }}
                  >
                    {benefit.icon}

                    <Box
                      sx={{
                        position: "absolute",
                        top: -4,
                        right: -4,
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        backgroundColor: "#B17A2A",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "9px",
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {benefit.number}
                    </Box>
                  </Box>

                  {/* BOTTOM TEXT */}
                  {!isTop ? (
                    <Box
                      sx={{
                        maxWidth: "220px",
                        mt: { xs: 2.5, lg: 4 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Fraunces",
                          fontSize: { xs: "24px", md: "24px" },
                          lineHeight: 1.25,
                          fontWeight: 400,
                          color: "#241F1A",
                          mb: 1.5,
                        }}
                      >
                        {benefit.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#4B443D",
                          fontSize: "15px",
                          lineHeight: "1.75",
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Box>
                  ) : (
                    <Box sx={{ display: { xs: "none", lg: "block" }, mt: 4, minHeight: "160px" }} />
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* QUOTE BANNER */}
        <Box
          sx={{
            maxWidth: "1120px",
            mx: "auto",
            borderRadius: "24px",
            overflow: "hidden",
            background:
              "linear-gradient(90deg, #15392F 0%, #1A523E 50%, #174736 100%)",
            px: { xs: 3, md: 8 },
            py: { xs: 4, md: 5.5 },
            textAlign: "center",
            boxShadow: "0 18px 42px rgba(22,58,51,0.16)",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 16,
              top: 10,
              width: 120,
              height: 120,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
              pointerEvents: "none",
            }}
          />

          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontSize: { xs: "24px", md: "40px" },
              lineHeight: 1.35,
              fontWeight: 300,
              color: "#FBF7EC",
            }}
          >
            Every tree you plant today becomes a blessing
          </Typography>

          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontSize: { xs: "20px", md: "30px" },
              lineHeight: 1.35,
              color: "#C7B06C",
              mt: 0.5,
              mb: 2.5,
            }}
          >
            that continues to grow for generations.
          </Typography>

          <Typography
            sx={{
              fontFamily: "JetBrains Mono",
              fontSize: "11px",
              lineHeight: "16px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(251,247,236,0.65)",
            }}
          >
            Vedic Vanas
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SacredGarden;
