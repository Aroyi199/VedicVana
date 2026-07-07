import { Box, Typography } from "@mui/material";

const StoryTwo = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "rgba(245, 239, 224, 0.88)",
        px: "40px",
        pt: "72px",
        pb: 0,
      }}
    >
      <Box sx={{ maxWidth: "740px", mx: "auto" }}>
        {/* Story label */}
        <Typography
          sx={{
            fontFamily: "JetBrains Mono",
            fontWeight: "500",
            fontSize: "11px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#5C3A21",
            mb: 3,
          }}
        >
          Story 02
        </Typography>

        {/* Heading */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontWeight: 400,
            fontSize: "36px",
            lineHeight: "44px",
            letterSpacing: "-0.5px",
            color: "#2A2520",
            mb: 4,
          }}
        >
          Before There Was Vedic Vanas, There Were Butterflies
        </Typography>

        {/* First body paragraphs */}
        {[
          "Years later, when I joined a school as a teacher, my passion naturally found a larger purpose. A Nature Club was created and I was entrusted with leading it.",
          "I began introducing students to the incredible stories hidden within leaves, flowers, insects, and trees.",
          "One day I displayed a pupa of an Oleander Hawk Moth before thousands of students during the morning assembly and challenged them to guess what would emerge. A few days later, when the magnificent moth appeared, I carried it from classroom to classroom, sharing the wonder of transformation.",
          "The excitement was contagious.",
          `Soon I became known across the campus as "Butterfly Ma'am" and "Puchi Ma'am." Chairman, Students, teachers, drivers, security staff, gardeners, and even the management would bring insects, caterpillars and other creatures to me for identification.`,
        ].map((para, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "27px",
              color: "#3A3026",
              mb: 3,
            }}
          >
            {para}
          </Typography>
        ))}

        
        <Box
          sx={{
            borderLeft: "3px solid #2D4A2B",
            pl: "24px",
            my: "40px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "32px",
              color: "#2A2520",
            }}
          >
            Nature became a language that connected the entire school community.
          </Typography>
        </Box>

        {/* Middle paragraphs */}
        {[
          "That passion eventually led me to create butterfly gardens and living nature spaces where children could experience science, biodiversity, and wonder firsthand. I often called them Living Laboratories.",
          "Today, the same curiosity continues through Vedic Vanas. Every landscape we create is rooted in a simple belief:",
        ].map((para, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "27px",
              color: "#3A3026",
              mb: 3,
            }}
          >
            {para}
          </Typography>
        ))}

        
        <Box
          sx={{
            background: "#2D4A2B1A",
            borderRadius: "16px",
            border: "1px solid #E7DDC8",
            width:'840px',
            height:'153.6px',
            p: "28px 32px",
            my: "40px",
          }}
        >
          {[
            "People protect what they understand.",
            "People cherish what they experience.",
            "And sometimes, all it takes is one butterfly, one tree, or one moment of wonder to change a life forever.",
          ].map((line, i) => (
            <Typography
              key={i}
              sx={{
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "30px",
                color: "#2D4A2B",
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>

        {/* Final paragraphs */}
        {[
          `For that first moment of wonder, I owe everything to my father. One day he told me: "That school is lucky to have you as a teacher." Those words still echo in my heart.`,
          "He left us far too soon, but the gift he gave me continues to grow — in every child inspired, every butterfly garden created, and every landscape that reconnects people with nature.",
        ].map((para, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "27px",
              color: "#3A3026",
              mb: 3,
            }}
          >
            {para}
          </Typography>
        ))}
      </Box>

      
      <Box
        sx={{
          width: "100%",
          maxWidth:'740px',
          height: "1px",
          backgroundColor: "#5C3A2126",
          mt: "48px",
          mx:'auto',
          
          
        }}
      />
    </Box>
  );
};

export default StoryTwo;