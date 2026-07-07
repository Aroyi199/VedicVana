import ISRO from "../../assets/ISRO.png";
import Samrachana from "../../assets/Samrachanaa.png";
import IronLady from "../../assets/IronLady.png";
import Conference from "../../assets/Conference.png";
import LazyImage from "../Common/LazyImage";
const sections = [
  {
    heading: "Research & Scientific Institutions",
    items: [
      {
        image: ISRO,
        title: "ISRO",
      },
    ],
  },
  {
    heading: "Online Talks & Sessions",
    items: [
      {
        image: Samrachana,
        title: "Samrachana",
      },
      {
        image: IronLady,
        title: "Iron Lady Platform",
      },
    ],
  },
  {
    heading: "Conferences",
    items: [
      {
        image: Conference,
        title: "VVVS Conference – Tanjavur",
      },
    ],
  },
];
import { Box, Typography } from "@mui/material";

const ResearchTalks = () => {
  return (
    <Box
      sx={{
        background: "#F6F0E5",
        py: 8,
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          px: { xs: 3, md: 6 },
        }}
      >
        {sections.map((section, index) => (
          <Box key={index} sx={{ mb: 8 }}>
            <Typography
              sx={{
                fontSize: "11px",
                lineHeight:'16.5px',
                letterSpacing: "1.98px",
                textTransform: "uppercase",
                color: "#5C3A21",
                mb: 3,
              }}
            >
              {section.heading}
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: `repeat(${section.items.length}, 1fr)`,
                },
                gap: 3,
                alignItems: "start",
              }}
            >
              {section.items.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    background: "#FCFAF6",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid #E6DED0",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                    height: "fit-content",
                  }}
                >
                  <LazyImage src={item.image} alt={item.title} height="100%" />

                  <Typography
                    sx={{
                      px: 2,
                      py: 2,
                      fontSize: "18px",
                      lineHeight:'28px',
                      letterSpacing:'-0.2px',
                      color: "#2A2520",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ResearchTalks;