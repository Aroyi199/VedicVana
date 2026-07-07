import { Box, Typography } from "@mui/material";
import LazyImage from "../Common/LazyImage";
import Talk1 from "../../assets/Talk1.png";
import Talk2 from "../../assets/Talk2.png";
import Talk3 from "../../assets/Talk3.png";
import Talk4 from "../../assets/Talk4.png";
import Talk5 from "../../assets/Talk5.png";

const talks = [
  { image: Talk1, title: "CHIREC International School" },
  { image: Talk2, title: "Delhi Public School" },
  { image: Talk3, title: "ICFAI University" },
  { image: Talk4, title: "Malla Reddy University" },
  { image: Talk5, title: "Maris Stella College – Vijayawada" },
];

const GuestLectures = () => {
  return (
    <Box sx={{ background: "#F6F0E5", py: 10 }}>
      <Box sx={{ maxWidth: "1280px", mx: "auto", px: { xs: 3, md: 6 } }}>
        {/* Heading */}
        <Typography
          sx={{
            fontSize: "20px",
            lineHeight: "21px",
            fontWeight: 600,
            color: "#2D4A2B",
            mb: 1,
          }}
        >
          Guest Lectures / Conferences / Institutional Talks
        </Typography>
        <Box sx={{ width: 120, height: 2, bgcolor: "#2D4A2B", mb: 4 }} />
        <Typography
          sx={{
            fontSize: 11,
            lineHeight: "16.5px",
            letterSpacing: "1.98px",
            color: "#5C3A21",
            textTransform: "uppercase",
            mb: 4,
          }}
        >
          Educational Institutions
        </Typography>

        {/* Masonry layout: 2 columns, items split 3-2 */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          {/* LEFT COLUMN: CHIREC, ICFAI, Maris Stella */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[talks[0], talks[2], talks[4]].map((talk, index) => (
              <Box
                key={index}
                sx={{
                  background: "#FCFAF6",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #E6DED0",
                }}
              >
                <LazyImage src={talk.image} alt={talk.title} borderRadius="0px" />
                <Typography sx={{ px: 2, py: 2, fontSize: "18px", color: "#2E2B27" }}>
                  {talk.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* RIGHT COLUMN: Delhi Public School, Malla Reddy */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[talks[1], talks[3]].map((talk, index) => (
              <Box
                key={index}
                sx={{
                  background: "#FCFAF6",
                  borderRadius: "18px",
                  overflow: "hidden",
                  border: "1px solid #E6DED0",
                }}
              >
                <LazyImage src={talk.image} alt={talk.title} borderRadius="0px" />
                <Typography sx={{ px: 2, py: 2, fontSize: "18px", color: "#2E2B27" }}>
                  {talk.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GuestLectures;