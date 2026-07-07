import { Box, Typography } from "@mui/material";
import cultureConnectCover from "../../assets/CultureConnectCover.png";
import aradhanaSpread from "../../assets/aradhanaSpread.png";
import nakshatraVanaThumb from "../../assets/nakshatraVanaThumb.png";
import srisailamThumb from "../../assets/SrisailamThumb.png";
import LazyImage from "../Common/LazyImage";

const books = [
  {
    image: cultureConnectCover,
    imagePosition: "left",
    credit: "Co-authored by Dr. Veni Madhavi",
    title: "Telangana Forest Development Corporation",
    description:
      "A publication focused on forest development, biodiversity awareness, and ecological preservation, highlighting the planning and development of 75 theme parks with an emphasis on sustainable landscapes, native flora, and environmental conservation.",
  },
  {
    image: aradhanaSpread,
    imagePosition: "left",
    credit: "By Dr. Veni Madhavi",
    title: "AP Govt. Endowment Department Publication",
    subtitle: "Aaradhana – Divyanalu Vishishtatha",
    description:
      "A spiritual and botanical contribution to a monthly magazine, exploring the significance of sacred flora through references from Puranas, Samhitas, and Itihasas. The writings highlight the relevance of traditional ecological wisdom in biodiversity conservation, environmental sustainability, and addressing modern ecological challenges through devotional and cultural perspectives.",
  },
];

const researchPapers = [
  {
    image: nakshatraVanaThumb,
    title:
      "The Vedic and Puranic roots and the contemporary relevance of Nakshatra Vana",
    abstract:
      "Nakshatra Vana - An ancient concept given by Hindu sages which addresses the present-day challenges, offering solutions like enriching biodiversity, conserving native, vulnerable plant species with medicinal and healing properties, religious and spiritual significance, supports local fauna, encourages afforestation etc. This paper aims at two things. Firstly, tracing the nakshatra vana concept from original puranas. And secondly, an overview of the scientific research and experiments done till now with regard to these 27 nakshatra trees and herbs, which in itself is a trans disciplinary subject with both theoretical and practical facts involving varied faculties of astrology, astronomy, medicinal botany, human physiology, ayurveda, phenology, religious beliefs and spirituality.",
  },
  {
    image: srisailamThumb,
    title:
      "The Botanical Roots of Srisailam Mallikarjuna Swamy Temple: Integrating the Sacred Tree Traditions and Archaeological Aspects.",
    abstract:
      "This paper explores the profound connection between ancient temples and sacred trees in India, with a focus on Srisailam temple, located 230 km from Hyderabad. The main deity at Srisailam, Lord Shiva, is worshipped as Mallikarjuna Swamy, a name derived from Jasmine flowers (Mallika) and the Arjuna tree. The legends and local lore (sthala purana) of Srisailam are deeply intertwined with these plants. Literary evidence, such as the Sivananda Lahari composed by Sri Adi Shankaracharya in the 7th century CE, highlights the sacredness of these trees, specifically mentioning jasmine flowers, the bumblebee, Mallikarjuna Swamy and Goddess Bhramarambika Devi. Additionally, the temple premises feature the Vruddha Shiva, a tree fossil of the Terminalia arjuna species, which is said to be carbon-dated as 50,000 years old, the factual evidence is yet to be established.",
  },
];

const ResearchSection = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "rgba(245, 239, 224, 0.88)",
        px: { xs: 3, md: "32px" },
        py: { xs: 6, md: "80px" },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1320px", mx: "auto" }}>
        {/* Eyebrow */}
        <Typography
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "1.98px",
            fontWeight: 500,
            color: "#5C3A21",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          — Scholarly Work
        </Typography>
        {/* Heading */}
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 300,
            fontSize: "80px",
            lineHeight: "84px",
            color: "#2A2520",
            letterSpacing: "-2px",
            mb: 2,
          }}
        >
          Books & Research{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
            Contributions
          </Box>
        </Typography>
        {/* Intro line */}
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "28.8px",
            color: "#5C524A",
            maxWidth: "720px",
            mb: 8,
          }}
        >
          Selected publications, research papers, and scholarly contributions
          in sacred flora, temple ecology, and biodiversity.
        </Typography>
        {/* Published Books */}
        <Typography
          sx={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 300,
            fontSize: "48px",
            lineHeight: "55px",
            letterSpacing: "-0.96px",
            color: "#3D2B1F",
            mb: 4,
          }}
        >
          Published{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
            Books
          </Box>
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6, mb: 10 }}>
          {books.map((book) => (
            <Box
              key={book.title}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: book.imagePosition === "right" ? "row-reverse" : "row",
                },
                gap: { xs: 4, md: "48px" },
              }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "200px" },
                  height: { xs: "320px", md: "280px" },
                  borderRadius: "6px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <LazyImage
                  src={book.image}
                  alt={book.title}
                  height="100%"
                  borderRadius="6px"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "JetBrains Mono",
                    fontSize: "11px",
                    fontWeight: 500,
                    lineHeight: "16.5px",
                    letterSpacing: "1.8px",
                    color: "#B5651D",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  {book.credit}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Fraunces",
                    fontSize: "42px",
                    fontWeight: 400,
                    color: "#2A2520",
                    lineHeight: "48px",
                    letterSpacing: "-0.84px",
                    mb: 3,
                  }}
                >
                  {book.title}
                </Typography>
                {book.subtitle && (
                  <Typography
                    sx={{
                      fontFamily: "'Fraunces', serif",
                      fontWeight: 300,
                      fontStyle: "italic",
                      fontSize: "20px",
                      lineHeight: "28px",
                      color: "#2D4A2B",
                      mb: 3,
                    }}
                  >
                    {book.subtitle}
                  </Typography>
                )}
                <Box
                  sx={{
                    width: "48px",
                    height: "1px",
                    backgroundColor: "rgba(92, 58, 33, 0.3)",
                    mb: 3,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "16.5px",
                    lineHeight: "27px",
                    color: "#5C524A",
                    maxWidth: "480px",
                  }}
                >
                  {book.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        {/* Research Papers & Conference Publications */}
        <Typography
          sx={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 300,
            fontSize: "48px",
            color: "#2A2520",
            lineHeight: "55px",
            letterSpacing: "-0.96px",
            mb: 4,
          }}
        >
          Research Papers &{" "}
          <Box component="span" sx={{ fontStyle: "italic", color: "#2D4A2B" }}>
            Conference Publications
          </Box>
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {researchPapers.map((paper, index) => (
            <Box key={paper.title}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 4, md: "48px" },
                  py: 5,
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "200px" },
                    height: { xs: "260px", md: "300px" },
                    borderRadius: "6px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <LazyImage
                    src={paper.image}
                    alt={paper.title}
                    height="100%"
                    borderRadius="6px"
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Fraunces', serif",
                      fontSize: "26px",
                      fontWeight: 500,
                      color: "#3D2B1F",
                      lineHeight: 1.3,
                      mb: 2,
                    }}
                  >
                    {paper.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "11px",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        color: "#B5651D",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Abstract
                    </Typography>
                    <Box
                      sx={{
                        flex: 1,
                        height: "1px",
                        backgroundColor: "rgba(92, 58, 33, 0.2)",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "14.5px",
                      lineHeight: 1.7,
                      color: "#5C524A",
                    }}
                  >
                    {paper.abstract}
                  </Typography>
                </Box>
              </Box>
              {index < researchPapers.length - 1 && (
                <Box
                  sx={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "rgba(92, 58, 33, 0.15)",
                  }}
                />
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ResearchSection;