import { Box } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "85vh",
        width: "70%",
        margin: "15px",
        marginTop: "30px",
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
          height: "90%",
        }}
      >
        <ProjectCard
          title={"CollegeRanks"}
          description={
            "Leaderboard-style global university ranking website based on a custom weighted scale and provided metrics."
          }
          websiteLink={"https://collegeranks.onrender.com/"}
          repoLink={"https://github.com/martin0he/CollegeRanks"}
          month={"December"}
          year={"2023"}
          imgSource={"CollegeRanksSS.png"}
          stack={["TypeScript", "React", "CSS", "NodeJS", "Express", "MongoDB"]}
        />
        <ProjectCard
          title={"RetroRoutes"}
          description={
            "Cross-platform mobile app to locate and review thrift/consignment/second-hand stores in your local area."
          }
          repoLink={"https://github.com/martin0he/RetroRoutes"}
          month={"February"}
          year={"2024"}
          imgSource={"portfolioSS.png"}
          stack={[
            "TypeScript",
            "React Native",
            "expo",
            "Supabase",
            "Google Maps API",
          ]}
        />
        <ProjectCard
          title={"Finishline"}
          description={
            "Project management dashboard website for the team at Northeastern Electric Racing developing electric cars."
          }
          repoLink={
            "https://github.com/Northeastern-Electric-Racing/FinishLine"
          }
          month={"September"}
          year={"2023 - Present"}
          imgSource={"FinishlineSS.png"}
          stack={[
            "React",
            "TypeScript",
            "NodeJS",
            "Express",
            "Prisma",
            "Docker",
            "GitHub",
          ]}
        />
        <ProjectCard
          title={"theMarketplace"}
          description={
            "University-based online marketplace to sell and buy used items on campus for all schools worldwide. Utilizes academic '.edu' email for account registration."
          }
          repoLink={"https://github.com/martin0he/theMarketplace"}
          websiteLink="https://www.themarketplace.dev/"
          month={"May"}
          year={"2024 - Present"}
          imgSource={"theMarketplaceSS.png"}
          stack={[
            "TypeScript",
            "React",
            "NodeJS",
            "Supabase",
            "Mapbox API",
            "MUI",
          ]}
        />
        <ProjectCard
          title={"Portfolio Website"}
          description={
            "Personal website to showcase who I am, my background, experience, projects and to occupy the rainy weekend I'm currently in."
          }
          repoLink={"https://github.com/martin0he/devpage"}
          month={"June"}
          year={"2024"}
          imgSource={"portfolioSS.png"}
          stack={["TypeScript", "React", "MUI"]}
        />
      </Box>
    </Box>
  );
};

export default ProjectsPage;
