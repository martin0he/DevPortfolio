import { Box } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { md: "flex-start", sm: "center", xs: "center" },
        alignItems: "flex-start",
        height: { md: "85vh", sm: "fit-content", xs: "fit-content" },
        width: "100%",
        margin: "15px",
        marginTop: "30px",
        overflow: "auto",
        backgroundColor: "transparent",
        "&::-webkit-scrollbar": {
          height: "5px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#676468",
          borderRadius: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#afacaf",
          borderRadius: "5px",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#8c878c",
          },
        },
      }}
    >
      <Box
        minWidth="fit-content"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          height: "94%",
        }}
      >
        <ProjectCard
          isIncomplete
          title={"Cookable"}
          description={
            "Full-stack social media platform to author, self-publish, share, and discover cookbooks and recipes."
          }
          repoLink={"https://github.com/martin0he/cookable"}
          month={"December"}
          year={"2024 - Present"}
          imgSource={"gifs/coming-soon.jpg"}
          stack={[
            "TypeScript",
            "React",
            "MUI",
            "Docker",
            "PostgreSQL",
            "NodeJS",
            "Express",
            "REST API",
            "bcrypt",
            "JWT",
          ]}
        />
        <ProjectCard
          title={"AudioAnalytica"}
          description={
            "Spotify statistics & neural net analysis website for your top tracks, artists, genres, and audio features."
          }
          repoLink={"https://github.com/martin0he/AudioAnalytica"}
          websiteLink={"https://audioanalytica.net"}
          month={"July"}
          year={"2024 - Present"}
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
            "Full Stack",
          ]}
        />
        <ProjectCard
          title={"CollegeRanks v2"}
          description={
            "Global university ranking website with a custom weighted scale, provided metrics, and user-submitted reviews."
          }
          websiteLink="https://thecollegeranks.com/"
          repoLink={"https://github.com/martin0he/college-ranks-v2"}
          month={"July"}
          year={"2024 - Present"}
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
          title="Retro Chatroom"
          description="Networking practice emulating a retro online chatroom hosted locally with mulitple clients and a server."
          repoLink={"https://github.com/martin0he/Retro-Chatroom"}
          month={"January"}
          year={"2024"}
          imgSource={"gifs/RC.webm"}
          stack={["Java", "JavaFX", "Sockets"]}
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
        <ProjectCard
          title={"Finishline"}
          description={
            "Project management dashboard website for the team at Northeastern Electric Racing developing electric cars."
          }
          repoLink={
            "https://github.com/Northeastern-Electric-Racing/FinishLine"
          }
          websiteLink={"https://finishlinebyner.com/"}
          month={"Sep"}
          year={"2023 -  Oct 2024"}
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
      </Box>
    </Box>
  );
};

export default ProjectsPage;
