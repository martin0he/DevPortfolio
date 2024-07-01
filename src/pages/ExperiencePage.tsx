import { Box } from "@mui/material";
import ExpCard from "../components/ExpCard";

const ExperiencePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: "85vh",
        margin: "15px",
      }}
    >
      <Box
        sx={{
          width: { xs: "67%", sm: "77%", md: "77%", lg: "70%" },
          height: "90vh",
          overflowY: "auto",
          padding: "3px",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": {
            width: "5px",
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
        <ExpCard
          startYear={"2024"}
          endYear={"Present"}
          startMonth={"May"}
          endMonth={""}
          title={"Founder & Co-President"}
          company={"Kappa Theta Pi Omega Colony"}
          description={
            "Created the first professional co-ed technology fraternity at Northeastern University."
          }
          technologies={[
            "Collaboration",
            "Delegation",
            "Leadership",
            "Team-building",
            "Time management",
          ]}
        />
        <ExpCard
          startYear={"2024"}
          endYear={"Present"}
          startMonth={"January"}
          endMonth={""}
          title={"Technical Lead"}
          company={"Northeastern Electric Racing"}
          description={
            "Lead a team of developers to rollout features and optimization of the project management dashboard in coordination with other leadership."
          }
          technologies={[
            "GitHub",
            "Collaboration",
            "Project Management",
            "Code Reviews",
            "Delegation",
          ]}
        />
        <ExpCard
          startYear={"2023"}
          endYear={"Present"}
          startMonth={"September"}
          endMonth={""}
          title={"Software Developer"}
          company={"Northeastern Electric Racing"}
          description={
            "Develop a project management dashboard for the design and construction of electric race cars."
          }
          technologies={[
            "React",
            "Typescript",
            "NodeJS",
            "Prisma",
            "Web-Dev",
            "Full Stack",
            "GitHub",
            "Docker",
          ]}
        />
        <ExpCard
          startYear={"2024"}
          endYear={"2024"}
          startMonth={"January"}
          endMonth={"June"}
          title={"Product Designer"}
          company={"Northeastern Electric Racing"}
          description={
            "Design features with engineers' input for the product lifecycle of the dashboard."
          }
          technologies={["Product Life Cycle", "Design", "UI/UX", "Figma"]}
        />
        <ExpCard
          startYear={"2023"}
          endYear={"Present"}
          startMonth={"January"}
          endMonth={""}
          title={"Peer Tutor"}
          company={"Knack"}
          description={
            "Part-time peer tutor supporting fellow students in mandatory Mathematics and CS classes."
          }
          technologies={["Tutoring", "Exam Practice", "Communication"]}
        />
      </Box>
    </Box>
  );
};

export default ExperiencePage;
