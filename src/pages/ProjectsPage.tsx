import { Box, Grid } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../components/ProjectCard";
import PageHeader from "../components/PageHeader";

const Cookable: ProjectCardProps = {
  title: "Cookable",
  description:
    "Full-stack social media platform to author, self-publish, share, and discover cookbooks and recipes.",
  repoLink: "",
  month: "December",
  year: "2024 - Present",
  isIncomplete: true,
  imgSource: "gifs/coming-soon.jpg",
  stack: [
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
  ],
};

const AudioAnalytica: ProjectCardProps = {
  title: "AudioAnalytica",
  description:
    "Spotify statistics & neural net analysis website for your top tracks, artists, genres, and audio features.",
  repoLink: "https://github.com/martin0he/AudioAnalytica",
  websiteLink: "https://audioanalytica.net",
  month: "July",
  year: "2024 - Present",
  imgSource: "gifs/AA.webm",
  stack: [
    "TypeScript",
    "React",
    "MUI",
    "NodeJS",
    "Express",
    "Spotify Web API",
    "Python",
    "TensorFlow",
    "Full Stack",
  ],
};

const CollegeRanksV2: ProjectCardProps = {
  title: "CollegeRanks v2",
  description:
    "Global university ranking website with a custom weighted scale, provided metrics, and user-submitted reviews.",
  websiteLink: "https://thecollegeranks.com/",
  repoLink: "https://github.com/martin0he/college-ranks-v2",
  month: "July",
  year: "2024 - Present",
  imgSource: "gifs/CR2.webm",
  stack: ["TypeScript", "React", "MUI", "Chart.js", "Supabase"],
};

const PortfolioWebsite: ProjectCardProps = {
  title: "Portfolio Website",
  description:
    "Personal website to showcase who I am, my background, experience, projects and to occupy the rainy weekend I'm currently in.",
  websiteLink: "https://martinhema.dev",
  repoLink: "https://github.com/martin0he/devpage",
  month: "June",
  year: "2024",
  imgSource: "gifs/PORT.webm",
  stack: ["TypeScript", "React", "MUI", "Three.js", "Email.js"],
};

const TheMarketplace: ProjectCardProps = {
  title: "theMarketplace",
  description:
    "University-based online marketplace to sell and buy used items on campus for all schools worldwide. Uses academic '.edu' email for registration.",
  repoLink: "https://github.com/martin0he/theMarketplace",
  websiteLink: "https://www.themarketplace.dev/",
  month: "May",
  year: "2024",
  imgSource: "gifs/TM.webm",
  stack: ["TypeScript", "React", "NodeJS", "Supabase", "Mapbox API", "MUI"],
};

const RetroRoutes: ProjectCardProps = {
  title: "RetroRoutes",
  description:
    "Cross-platform mobile app to locate and review thrift/consignment/second-hand stores in your local area.",
  repoLink: "https://github.com/martin0he/RetroRoutes",
  month: "February",
  year: "2024",
  imgSource: "incomplete.png",
  stack: ["TypeScript", "React Native", "expo", "Supabase", "Google Maps API"],
  isIncomplete: true,
};

const RetroChatroom: ProjectCardProps = {
  title: "Retro Chatroom",
  description:
    "Networking practice emulating a retro online chatroom hosted locally with mulitple clients and a server.",
  repoLink: "https://github.com/martin0he/Retro-Chatroom",
  month: "January",
  year: "2024",
  imgSource: "gifs/RC.webm",
  stack: ["Java", "JavaFX", "Sockets"],
};

const CollegeRanksV1: ProjectCardProps = {
  title: "CollegeRanks v1",
  description:
    "Leaderboard-style global university ranking website based on a custom weighted scale and provided metrics.",
  websiteLink: "https://collegeranks.onrender.com/",
  repoLink: "https://github.com/martin0he/CollegeRanks",
  month: "December",
  year: "2023",
  imgSource: "gifs/CR1.webm",
  stack: ["TypeScript", "React", "CSS", "NodeJS", "Express", "MongoDB"],
};

const FinishLine: ProjectCardProps = {
  title: "Finishline",
  description:
    "Contributed to the project management dashboard website for the team at Northeastern Electric Racing developing electric cars.",
  repoLink: "https://github.com/Northeastern-Electric-Racing/FinishLine",
  websiteLink: "https://finishlinebyner.com/",
  month: "September",
  year: "2023 - October 2024",
  imgSource: "gifs/FL.webm",
  stack: ["React", "TypeScript", "NodeJS", "Express", "Prisma", "Docker"],
};

const Projects = [
  Cookable,
  AudioAnalytica,
  CollegeRanksV2,
  TheMarketplace,
  PortfolioWebsite,
  RetroChatroom,
  RetroRoutes,
  CollegeRanksV1,
  FinishLine,
];

const ProjectsPage = () => {
  return (
    <Box
      justifyContent="flex-start"
      flexDirection="column"
      display="flex"
      width="100%"
      rowGap="20px"
      height="fit-content"
      alignItems="flex-start"
    >
      <PageHeader title="Projects" />
      <Grid
        container
        rowSpacing={0}
        columnSpacing={2}
        width="92%"
        alignItems="stretch"
      >
        {Projects.map((project, index) => (
          <Grid item xs={12} sm={12} md={6} key={index} display="flex">
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
