import { Box, Grid } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "85vh",
      }}
    >
      <Grid
        container
        spacing="10px"
        sx={{
          width: { xs: "67%", sm: "77%", md: "77%", lg: "70%" },
          height: "90vh",
          overflowY: "auto",
          paddingX: "25px",
          paddingY: "3px",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#afacaf",
            borderRadius: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#676468",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#423d42",
            },
          },
        }}
      >
        <Grid item xs={12} sm={12} md={4}>
          <ProjectCard
            title={"project 1"}
            description={"df"}
            link={"ewf"}
            month={"dec"}
            year={"2022"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProjectCard
            title={"project 2"}
            description={"df"}
            link={"ewf"}
            month={"dec"}
            year={"2022"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProjectCard
            title={"project 3"}
            description={"df"}
            link={"ewf"}
            month={"dec"}
            year={"2022"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProjectCard
            title={"project 4"}
            description={"df"}
            link={"ewf"}
            month={"dec"}
            year={"2022"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProjectCard
            title={"project 4"}
            description={"df"}
            link={"ewf"}
            month={"dec"}
            year={"2022"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProjectCard
            title={"project 4"}
            description={"df"}
            link={"ewf"}
            month={"dec"}
            year={"2022"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProjectCard
            title={"project 4"}
            description={"df"}
            link={"ewf"}
            month={"dec"}
            year={"2022"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ProjectCard
            title={"project 4"}
            description={"df"}
            link={"ewf"}
            month={"dec"}
            year={"2022"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
