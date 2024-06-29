import { Box, Typography, useTheme, Grid, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const InfoComponent = () => {
  return (
    <Box mt="35px" p={2} width="68%">
      <Grid container spacing={1}>
        <Grid item sm={6}>
          <Typography fontSize={20}>Location:</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>Boston, Massachussetts</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>Email:</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>martin.hema.mh@gmail.com</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>Education:</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>Northeastern University, Boston</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>Mobile No.:</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>(617)-735-7961</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>Languages:</Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography fontSize={20}>
            English, Albanian, Greek, French
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const BadgesComponent = () => {
  const theme = useTheme();
  return (
    <Box mt="35px" width="fit-content" p={2}>
      <Link target="_blank" href="https://www.github.com/martin0he">
        <GitHubIcon
          fontSize="small"
          sx={{
            "&:hover": { color: "#72e376" },
            color: theme.palette.secondary.main,
          }}
        />
      </Link>

      <Link target="_blank" href="www.linkedin.com/in/martin-hema">
        <LinkedInIcon
          fontSize="small"
          sx={{
            "&:hover": { color: "#72cde3" },
            color: theme.palette.primary.main,
          }}
        />
      </Link>

      <Link target="_blank" href="https://medium.com/@martin.hema.mh">
        <NewspaperIcon
          fontSize="small"
          sx={{
            "&:hover": { color: "#d672e3" },
            color: "#d040e2",
          }}
        />
      </Link>
    </Box>
  );
};

const ContactPage = () => {
  const theme = useTheme();
  return (
    <Box width="80%">
      <Typography>
        <span style={{ color: theme.palette.primary.main }}>Thank you</span> for
        taking a minute to look through my site!{" "}
        <span style={{ color: theme.palette.secondary.main }}>
          Hope you enjoyed!
        </span>
      </Typography>
      <InfoComponent />
      <BadgesComponent />
    </Box>
  );
};

export default ContactPage;
