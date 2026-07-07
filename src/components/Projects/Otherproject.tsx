import { Box, Typography } from "@mui/material";
import LazyImage from "../Common/LazyImage";
import Proj1 from "../../assets/Proj1.png";
import Proj2 from "../../assets/Proj2.png";
import Proj3 from "../../assets/Proj3.png";
import Proj4 from "../../assets/Proj4.png";

const projects = [
  {
    category_label: "Retreat Landscape",
    category: "Udayapura Post, South, Agara, Karnataka",
    image: Proj1,
    title: "Art of Living Foundation & Sri Sri College of Ayurvedic Science and Research",
    description: "Calm institutional and spiritual campus environment.",
    features: ["Nakshatra Vana", "Butterfly park", "Avenue tree plantation"],
    footer: "Sacred plants surrounding healing walkways create a nature-based Ayurvedic destination.",
  },
  {
    category_label: "Wellness Campus",
    category: "Medchal, near Hyderabad, India",
    image: Proj2,
    title: "Sri Venkateshwara Gold Age Home & Naturopathy Centre",
    description: "Healing, medicinal and naturopathy-based landscape.",
    features: ["Nakshatra Vanam", "Siva Panchayatana Vanam", "Parimala Vanam & Panchavati"],
    footer: "Restorative landscapes supporting physical recovery, healthy ageing and emotional wellbeing.",
  },
  {
    category_label: "Temple Gardens",
    category: "near Chikkavaram, Gannavaram, Andhra Pradesh",
    image: Proj3,
    title: "Hanumanthapuram Temple",
    description: "Sacred healing and temple ecology landscape.",
    features: ["Hanuman Divya Vanam", "Nakshatra & Rasi Vanam", "Lotus pond & Naga Puja Garden"],
    footer: "Temple landscapes designed to nurture devotion while preserving sacred biodiversity.",
  },
  {
    category_label: "Sacred Learning Landscape",
    category: "Thubarahalli, Marathahalli, Bengaluru, Karnataka",
    image: Proj4,
    title: "Vagdevi Vilas School",
    description: "Educational biodiversity-based landscape.",
    features: ["Butterfly park", "Navagraha Vana", "Nakshatra Vana"],
    footer: "Nature classrooms where children experience ecology through sacred landscapes.",
  },
];

const OtherProjects = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "rgba(239, 232, 211, 1)",
        px: "40px",
        py: "96px",
      }}
    >
      <Box sx={{ maxWidth: "1140px", mx: "auto" }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: "72px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mb: 3,
            }}
          >
            <Box sx={{ flex: 1, height: "1px", background: "#5C3A2126" }} />
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontSize: "10.5px",
                lineHeight: "15.17px",
                fontWeight: 500,
                letterSpacing: "2.2px",
                color: "#5C3A21",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              OTHER PROJECTS
            </Typography>
            <Box sx={{ flex: 1, height: "1px", background: "#5C3A2126" }} />
          </Box>
          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontWeight: 300,
              fontSize: "48.21px",
              lineHeight: "53.03px",
              letterSpacing: "-1px",
              color: "#2A2520",
            }}
          >
            Sacred Landscapes{" "}
            <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
              Across India
            </Box>
          </Typography>
          <Typography
            sx={{
              mt: 3,
              maxWidth: "520px",
              mx: "auto",
              fontSize: "16px",
              lineHeight: "27px",
              color: "#5C524A",
              textAlign: "center",
            }}
          >
            Every project reflects a unique combination of sacred ecology,
            biodiversity restoration and Vedic landscape traditions adapted
            to its community and environment.
          </Typography>
        </Box>

        {/* Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "548px 548px" },
            justifyContent: "center",
            columnGap: "28px",
            rowGap: "28px",
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#FBF7EC",
                borderRadius: "20px",
                overflow: "hidden",
                border: "1px solid rgba(92,58,33,0.08)",
                boxShadow: "0 4px 20px rgba(0,0,0,.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image with badge + location overlay */}
              <Box sx={{ position: "relative", flexShrink: 0, height: "512px" }}>
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  height="100%"
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    backgroundColor: "rgba(239, 232, 211, 1)",
                    backdropFilter: "blur(6px)",
                    borderRadius: "999px",
                    px: "14px",
                    py: "6px",
                    zIndex: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "JetBrains Mono",
                      fontSize: "9.5px",
                      fontWeight: 500,
                      letterSpacing: "1.8px",
                      color: "#5C3A21",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {project.category_label}
                  </Typography>
                </Box>
                {/* BOTTOM gradient */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "90px",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                    zIndex: 1,
                  }}
                />
                {/* BOTTOM-LEFT: Location label */}
                <Typography
                  sx={{
                    position: "absolute",
                    bottom: "14px",
                    left: "20px",
                    fontFamily: "JetBrains Mono",
                    fontSize: "10.5px",
                    lineHeight: "15.75px",
                    letterSpacing: "2.2px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    zIndex: 2,
                  }}
                >
                  {project.category}
                </Typography>
              </Box>

              {/* Content */}
              <Box sx={{ p: "32px", display: "flex", flexDirection: "column" }}>
                {/* Title */}
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "30px",
                    color: "#2A2520",
                    mb: 1.5,
                  }}
                >
                  {project.title}
                </Typography>
                {/* Description */}
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "15px",
                    lineHeight: "24px",
                    color: "#5C524A",
                    mb: 3,
                  }}
                >
                  {project.description}
                </Typography>
                {/* Features */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", mb: 3 }}>
                  {project.features.map((item) => (
                    <Box key={item} sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <Box
                        sx={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "#8B6A48",
                          flexShrink: 0,
                        }}
                      />
                      <Typography sx={{ fontSize: "14px", lineHeight: "24px", color: "#2A2520" }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                {/* Footer */}
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "21px",
                    color: "#2D4A2B",
                  }}
                >
                  {project.footer}
                </Typography>
                {/* Divider */}
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "rgba(92,58,33,0.12)",
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OtherProjects;