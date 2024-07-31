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
        width: { xs: "60%", sm: "70%" },
        margin: "15px",
        marginTop: "30px",
        overflowX: "auto",
        backgroundColor: "transparent",
        "&::-webkit-scrollbar": {
          height: "5px",
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
          title={"AudioAnalytica"}
          description={
            "Spotify statistics & neural net analysis website for your top tracks, artists, genres, and audio features."
          }
          repoLink={"https://github.com/martin0he/AudioAnalytica"}
          month={"July"}
          year={"2024"}
          imgSource={"gifs/AA.webm"}
          stack={[
            "TypeScript",
            "React",
            "MUI",
            "NodeJS",
            "Express",
            "Spotify Web API",
            "Python",
            "TensorFlow",
          ]}
        />
        <ProjectCard
          title={"CollegeRanks v2"}
          description={
            "Ground-up rewrite of CollegeRanks with a new design, improved performance, and additional features."
          }
          websiteLink="https://college-ranks-v2.vercel.app"
          repoLink={"https://github.com/martin0he/college-ranks-v2"}
          month={"July"}
          year={"2024"}
          imgSource={"gifs/CR2.webm"}
          stack={["TypeScript", "React", "MUI", "Chart.js", "Supabase"]}
        />
        <ProjectCard
          title={"Portfolio Website"}
          description={
            "Personal website to showcase who I am, my background, experience, projects and to occupy the rainy weekend I'm currently in."
          }
          websiteLink="https://martinhema.dev"
          repoLink={"https://github.com/martin0he/devpage"}
          month={"June"}
          year={"2024"}
          imgSource={"gifs/PORT.webm"}
          stack={["TypeScript", "React", "MUI", "Three.js", "Email.js"]}
        />
        <ProjectCard
          title={"theMarketplace"}
          description={
            "University-based online marketplace to sell and buy used items on campus for all schools worldwide. Uses academic '.edu' email for registration."
          }
          repoLink={"https://github.com/martin0he/theMarketplace"}
          websiteLink="https://www.themarketplace.dev/"
          month={"May"}
          year={"2024"}
          imgSource={"gifs/TM.webm"}
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
          title={"Finishline"}
          description={
            "Project management dashboard website for the team at Northeastern Electric Racing developing electric cars."
          }
          repoLink={
            "https://github.com/Northeastern-Electric-Racing/FinishLine"
          }
          websiteLink={"https://finishlinebyner.com/"}
          month={"September"}
          year={"2023 - Present"}
          imgSource={"gifs/FL.webm"}
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
          isIncomplete
          title={"RetroRoutes"}
          description={
            "Cross-platform mobile app to locate and review thrift/consignment/second-hand stores in your local area."
          }
          repoLink={"https://github.com/martin0he/RetroRoutes"}
          month={"February"}
          year={"2024"}
          imgSource={"incomplete.png"}
          stack={[
            "TypeScript",
            "React Native",
            "expo",
            "Supabase",
            "Google Maps API",
          ]}
        />
        <ProjectCard
          title={"CollegeRanks v1"}
          description={
            "Leaderboard-style global university ranking website based on a custom weighted scale and provided metrics."
          }
          websiteLink={"https://collegeranks.onrender.com/"}
          repoLink={"https://github.com/martin0he/CollegeRanks"}
          month={"December"}
          year={"2023"}
          imgSource={"gifs/CR1.webm"}
          stack={["TypeScript", "React", "CSS", "NodeJS", "Express", "MongoDB"]}
        />
      </Box>
    </Box>
  );
};

export default ProjectsPage;
