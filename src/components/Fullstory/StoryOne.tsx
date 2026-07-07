import { Box, Typography } from "@mui/material";

const StoryOne = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        background: "rgba(245, 239, 224, 0.88)",
        px: "40px",
        py: "72px",
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
          Story 01
        </Typography>

        {/* Pull quote heading */}
        <Typography
          sx={{
            fontFamily: "Fraunces",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "42px",
            letterSpacing: "-0.5px",
            color: "#2A2520",
            mb: 4,
          }}
        >
          "My father had a unique way of waking me up."
        </Typography>

        {/* Body paragraphs */}
        {[
          "My journey into nature did not begin with a garden.",
          "It began with a father who taught me to notice.",
          `When I was a child, my father had a unique way of waking me up. Instead of calling my name, he would gently carry me outside and show me something fascinating from nature. One day it was an unusual insect called "Gollabhamal" — what I later learned was a Praying Mantis.`,
          `Another day he pointed to a shiny object hanging beneath a leaf of an Oleander plant. "A butterfly will emerge from it," he said.`,
          "I was fascinated.",
          "Though I never witnessed that particular emergence, I spent the following days searching for more. Soon I learned that the shining object was a pupa, and that it belonged to the Common Crow Butterfly.",
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

        {/* Block quote */}
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
              fontSize: "20.69px",
              lineHeight: "30px",
              letterSpacing:'-0.2px',
              color: "#2A2520",
            }}
          >
            That moment changed something in me.
          </Typography>
        </Box>

        {/* Remaining paragraphs */}
        {[
          "From then on, I spent countless hours in gardens observing caterpillars feeding, growing, pupating, and eventually emerging as butterflies. I watched nature's transformations unfold before my eyes.",
          `While most children played games, I searched for eggs, caterpillars, pupae, and butterflies. In school, when we learned about the butterfly life cycle, I proudly brought a tiny butterfly egg to my science teacher. She looked at it and said, "Butterfly eggs can't be that small."`,
          "I was too shy to argue.",
          "But I knew what I had seen.",
          `Over time, everyone around me began to recognize my obsession. My family, friends, neighbours, and even my grandmother would collect caterpillars and pupae for me whenever she found them. The children in my neighbourhood nicknamed me "Scientist."`,
          "Looking back, I realize that nature had already become my classroom.",
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
            width: "100%",
            height: "1px",
            backgroundColor: "#5C3A2126",
            mt: "48px",
            mb: "48px",
          }}
        />

       
      </Box>
    </Box>
  );
};

export default StoryOne;