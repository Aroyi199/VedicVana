import { Box, Typography } from "@mui/material";
import LazyImage from "../Common/LazyImage";
import { useNavigate } from "react-router-dom";

import PVI from "../../assets/PVI.png";
import Arts from "../../assets/Arts.png";
import SVGAH from"../../assets/SVGAH.png";
import HPT from "../../assets/HPT.png";
import VVI from "../../assets/VVI.png";

const proj = [
  {
    title: "Pyramid Valley International",
    image: PVI,
    gridArea: "card1",
  },
  {
    title: "Art of Living Foundation & Sri Sri College of Ayurvedic Science and Research",
    image: Arts,
    gridArea: "card2",
  },
  {
    title: "Sri Venkateshwara Gold Age Home and Naturopathy Center",
    image: SVGAH,
    gridArea: "card3",
  },
  {
    title: "Hanumathpuram Temple",
    image: HPT,
    gridArea: "card4",
  },
  {
    title: "Vagdevi Vilas School",
    image: VVI,
    gridArea: "card5",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#F8F4EA",
        px: { xs: 3, md: '40px'},
        py: { xs: 6, md: 10 },
      }}
    >
      <Box sx={{ maxWidth: "1320px", mx: "auto" }}>
        {/* Top heading row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mb: 5,
          }}
        >
          {/* Left heading */}
          <Box>
            <Typography
              sx={{
                fontFamily: "JetBrains Mono",
                fontWeight: 500,
                fontSize: "11px",
                lineHeight: "16px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#5C3A21",
                mb: 2,
              }}
            >
              Projects
            </Typography>

            <Typography
              sx={{
                fontFamily: "Fraunces",
                fontWeight: 300,
                fontSize: { xs: "34px", md: "56px" },
                lineHeight: { xs: "42px", md: "62px" },
                letterSpacing: "-0.8px",
                color: "#2A2520",
              }}
            >
              Sacred landscapes
              <br />
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  display: "inline-block",
                  color:'#2D4A2B',
                }}
              >
                we have brought to life
              </Box>
            </Typography>
          </Box>

          {/* Right button */}
          <Typography
            
            onClick={() => navigate("/projects")}
            sx={{
              borderRadius: "999px",
              border: "1px solid #C9BCA8",
              color: "#2A2520",
              textTransform: "none",
              px: 3,
              py: 1.2,
              fontSize: "14px",
              fontWeight: 500,
              whiteSpace:'nowrap',
              alignSelf: { xs: "flex-start", md: "center" },
            }}
          >
            All projects →
          </Typography>
        </Box>

        {/* Project Grid */}
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gridTemplateAreas: {
              xs: `
                "card1"
                "card2"
                "card3"
                "card4"
                "card5"
              `,
              md: `
                "card1 card2"
                "card3 card3"
                "card4 card5"
              `,
            },
          }}
        >
          {proj.map((project, index) => (
            <Box
              key={index}
              onClick={() => navigate("/projects")}
              sx={{
                gridArea: project.gridArea,
                position: "relative",
                overflow: "hidden",
                borderRadius: "18px",
                cursor: "pointer",
                minHeight:
                  project.gridArea === "card3"
                    ? { xs: '220px', md: '320px' }
                    : { xs: '220px', md: '300px' },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                }}
              >
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  height="100%"
                  borderRadius="0px"
                />
              </Box>

              {/* Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.1))",
                }}
              />

              {/* Title */}
              <Typography
                sx={{
                  position: "absolute",
                  left: 20,
                  bottom: 18,
                  right: 20,
                  font:'Fraunces',
                  color: "#fff",
                  fontSize: { xs: "13px", md: "15px" },
                  fontWeight: 700,
                  lineHeight: '29.9px',
                  letterSpacing:'-0.26px',
                  zIndex: 2,
                }}
              >
                {project.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;