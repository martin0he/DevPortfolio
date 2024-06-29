import { Typography, Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <Grid
      container
      width="70%"
      flexDirection="row"
      columnSpacing="35px"
      rowSpacing="15px"
    >
      <Grid item xs={4}>
        <Typography>what i do</Typography>
        <Typography fontSize={15} sx={{ wordBreak: "break-all" }}>
          I am a second-year student pursuing a Bachelor's of Science degree in
          Computer Science at Northeastern University Khoury College of Computer
          Sciences. My academic and professional journey was always clouded with
          uncertainty, not knowing what exactly I wanted to pursue for the
          longest time. Growing up in eastern Europe, where tech and gadgets
          were luxuries that felt like mystical tools bestowed upon me during
          holiday sales, I was always fascinated with the inner workings of the
          fabric of modern living—technology. That very passion drove me to
          become a tech lead at Northeastern Electric Racing, as well as
          becoming the founder and Co-President of my school's first
          professional tech fraternity, Kappa Theta Pi. While these are exciting
          and very fulfilling aspects of my daily life, nothing beats sitting
          down after a long day, looking at the work I created, and feeling
          accomplished and proud.
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography>my outlook</Typography>
        <Typography fontSize={15} sx={{ wordBreak: "break-all" }}>
          I'm enthralled by blending the formulaic and technological aspect of
          software with the contemporary design and care put into presenting it;
          searching for balance between ingenuity and creativity. As a child,
          technology and I were truly inseparable and I was infatuated to say
          the least. Over the years, my passion hasn't died down but my tunnel
          vision has been lifted and I've come to realize that the longer I stay
          in the 'tech bubble' the more I miss out on. That's why I actively
          broaden my horizons in fields such as literature, fine art, film,
          cuisine, and philosophy; inherently non-technical areas so I can
          achieve balance akin to "music being the space between the notes". I
          need the 'silence' so my 'sounds' can flourish. I try to draw
          inspiration from my surroundings and my aforementioned interests to
          create inspired work with purpose and meaning.
        </Typography>
      </Grid>

      <Grid item xs={4}>
        <Typography>technical journey</Typography>
        <Typography fontSize={15} sx={{ wordBreak: "break-all" }}>
          Contrary to my current path, hardware was actually what pushed me into
          the rabbit whole.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>my resume</Typography>
      </Grid>
    </Grid>
  );
};

export default AboutPage;
