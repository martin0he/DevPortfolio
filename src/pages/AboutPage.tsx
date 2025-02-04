import { Typography, Grid, useTheme, Link, Box } from "@mui/material";
import PageHeader from "../components/PageHeader";

const AboutPage = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="20px"
    >
      <PageHeader title="About Me" />
      <Grid
        container
        width="100%"
        flexDirection="row"
        columnSpacing="35px"
        rowSpacing="35px"
      >
        <Grid item sm={12} md={3}>
          <Typography sx={{ textDecoration: "underline" }}>
            what i do
          </Typography>
          <Typography fontSize={15}>
            I am a second-year student pursuing a Bachelor's of Science degree
            in Computer Science at Northeastern University Khoury College of
            Computer Sciences. My academic and professional journey was always
            clouded with uncertainty, not knowing what exactly I wanted to
            pursue for the longest time. Growing up in eastern Europe, where
            tech and gadgets were luxuries that felt like mystical tools
            bestowed upon me during holiday sales, I was always fascinated with
            the inner workings of the fabric of modern living—technology. That
            very passion drove me to become a tech lead at Northeastern Electric
            Racing, as well as becoming the founder and Co-President of my
            school's first professional tech fraternity, Kappa Theta Pi. While
            these are exciting and very fulfilling aspects of my daily life,
            nothing beats sitting down after a long day, looking at the work I
            created, and feeling accomplished and proud.
          </Typography>
        </Grid>

        <Grid item sm={12} md={3}>
          <Typography sx={{ textDecoration: "underline" }}>
            my outlook
          </Typography>
          <Typography fontSize={15}>
            I'm enthralled by blending the formulaic and technological aspect of
            software with the contemporary design and care put into presenting
            it; searching for balance between ingenuity and creativity. As a
            child, I was inseparably infatuated with technology. Over the years,
            my passion hasn't died down but my tunnel vision has been lifted and
            I've come to realize that the thing I love doesn't suffice alone.
            That's why I actively broaden my horizons in fields such as
            literature, fine art, film, cuisine, and philosophy; inherently
            non-technical areas so I can achieve balance akin to "music being
            the space between the notes". I need the 'silence' so my 'sounds'
            can flourish. I try to draw inspiration from my surroundings and my
            aforementioned interests to create inspired work with purpose and
            meaning.
          </Typography>
        </Grid>

        <Grid item sm={12} md={3}>
          <Typography sx={{ textDecoration: "underline" }}>
            technical journey
          </Typography>
          <Typography fontSize={15}>
            Contrary to my current path, hardware was actually what pushed me
            into the rabbit hole. I remember feeling like Inspector Gadget the
            first time I held a RAM stick and looked at it with a magnifying
            glass as if I had any clue what was going on internally. That
            inquisitiveness grew to assembling desktops for myself and my
            friends and even working for the IT support of a relative's
            business. It was during highschool that I started programming and
            fell in love with the power at my fingertips; anything in my
            imagination was within reach. From basic Java math to web
            development, I've let my imagination soar.
          </Typography>
        </Grid>
        <Grid item sm={12} md={3}>
          <Typography sx={{ textDecoration: "underline" }}>
            going forward
          </Typography>
          <Typography fontSize={15}>
            I want to take my web development skills to the next level, focusing
            on a hollistic approach to the conception, design, and
            implementation of scalable platforms that are both aesthetically
            pleasing and functionally robust. My work is the imprint I leave on
            the world, so I want to be sure it's pretty to look at. Thank you
            for reading my little rant :]
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link
            sx={{ textDecoration: "none" }}
            target="_blank"
            href="resume.pdf"
          >
            <Typography
              component="span"
              color={theme.palette.primary.main}
              sx={{
                "&:hover": { color: theme.palette.primary.dark },
                transition: "color 0.3s",
                width: "fit-content",
              }}
            >
              download resume
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
