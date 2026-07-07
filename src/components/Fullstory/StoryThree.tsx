import { Box, Typography } from "@mui/material";

const StoryThree = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "rgba(245, 239, 224, 0.88)",
        px: "40px",
        pt: "72px",
        pb: "72px",
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
          Story 03
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
            mb: 2,
          }}
        >
          A Life Saved. A Purpose Found.
        </Typography>

        {/* Subheading italic */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "17px",
            lineHeight: "28px",
            color: "#5C524A",
            mb: 4,
          }}
        >
          How a remarkable encounter with a Nakshatra Tree led me on a
          two-decade journey of discovery, research, and ecological restoration.
        </Typography>

        {/* First body paragraphs */}
        {[
          "More than two decades ago, while working in a school in Bengaluru, I heard a story that changed the course of my life.",
          "A close relative of our school chairman had been diagnosed with a serious illness. Doctors had given up hope and informed the family that there was little they could do. The family was devastated.",
          `In search of answers, they consulted their family astrologer. After studying his horoscope, the astrologer made an unusual recommendation: "Take him to his healing tree and spend sometime there for 40 days, while continuing the medication prescribed by the doctors."`,
          "The family followed the advice.",
          "To everyone's surprise, his health gradually improved. He recovered far beyond what the doctors had expected.",
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

        {/* Block quote — left border style */}
        <Box
          sx={{
            borderLeft: "3px solid #2D4A2B",
            pl: "24px",
            my: "40px",
          }}
        >
          {[
            `When asked why, the astrologer explained: "That was his Nakshatra Tree."`,
            "It was the first time I had heard those words.",
          ].map((line, i) => (
            <Typography
              key={i}
              sx={{
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "32px",
                color: "#2A2520",
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>

        {/* Remaining paragraphs */}
        {[
          "Intrigued, I was asked to meet the astrologer and learn more about these trees. What began as a simple inquiry soon became a lifelong quest.",
          "I collected the traditional list of Nakshatra Trees, researched their Sanskrit and regional names, decoded their botanical identities, and travelled across nurseries, government institutions, and research centres to locate them. Those first trees were planted in the school campus.",
          "One discovery led to another.",
          "Nakshatra Trees led me to Navagraha Trees, Rashi Trees, sacred groves, temple forests, and countless references hidden within our Puranas, epics, and traditional texts.",
          "Over the years, I realized that these traditions were far more than cultural practices. They were ingenious ways of connecting people with nature, conserving biodiversity, and nurturing wellbeing through living landscapes.",
          "What started with a life-changing encounter beneath a tree became my life's purpose.",
          "Today, through Vedic Vanas, I continue this journey by helping individuals, families, institutions, and communities reconnect with nature through meaningful, suitable, and purposeful plants.",
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
    </Box>
  );
};

export default StoryThree;