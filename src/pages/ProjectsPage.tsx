import { Box } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "88vh",
        width: "70%",
        margin: "15px",
        overflowX: "auto",

        backgroundColor: "transparent",
        "&::-webkit-scrollbar": {
          height: "0px",
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          height: "90%",
        }}
      >
        <ProjectCard
          title={"First Project"}
          description={
            "bke b webjb kjwq kjb kjw dqkjbk jkuh j cjkjnkjewuiqiwdhgvdq  udh qhdoh"
          }
          websiteLink={"fakeWebsite.com"}
          repoLink={"https://github.com/martin0he/theMarketplace"}
          month={"June"}
          year={"2024"}
          imgSource={"https://picsum.photos/1920/1080"}
          stack={["TypeScript", "React"]}
        />
      </Box>
    </Box>
  );
};

export default ProjectsPage;
