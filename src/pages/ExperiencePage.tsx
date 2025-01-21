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
          width: { lg: "87%", md: "90%", sm: "95%", xs: "100%" },
          height: "90vh",
          overflowY: "auto",
          padding: "3px",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": {
            width: "5px",
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
        <ExpCard
          startYear={"2024"}
          endYear={"Present"}
          startMonth={"May"}
          endMonth={""}
          title={"Founder & Co-President"}
          company={"Kappa Theta Pi Omega Chapter"}
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
          imageUrl={"./exp-images/ktp.png"}
        />
        <ExpCard
          startYear={"2024"}
          endYear={"2024"}
          startMonth={"November"}
          endMonth={"December"}
          title={"Front End Developer"}
          company={"Khoury College of Computer Sciences"}
          description={
            "Worked on redesigning and implementing Khoury's new personalized learning management platform, Odyssey."
          }
          technologies={["NextJS", "TailwindCSS", "Figma", "UI/UX", "Strapi"]}
          imageUrl={"./exp-images/khoury.jpg"}
        />
        <ExpCard
          startYear={"2024"}
          endYear={"2024"}
          startMonth={"January"}
          endMonth={"October"}
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
          imageUrl="./exp-images/ner.png"
        />
        <ExpCard
          startYear={"2024"}
          endYear={"2024"}
          startMonth={"January"}
          endMonth={"April"}
          title={"Product Designer"}
          company={"Northeastern Electric Racing"}
          description={
            "Design features with engineers' and operations' input for our custom project managament dashboard."
          }
          technologies={["Product Lifecycle", "Design", "UI/UX", "Figma"]}
          imageUrl="./exp-images/ner.png"
        />
        <ExpCard
          startYear={"2024"}
          endYear={"2024"}
          startMonth={"January"}
          endMonth={"April"}
          title={"Peer Tutor"}
          company={"Knack"}
          description={
            "Part-time peer tutor supporting fellow students in mandatory Mathematics and CS classes."
          }
          technologies={["Tutoring", "Exam Practice", "Communication"]}
          imageUrl="./exp-images/knack.png"
        />
        <ExpCard
          startYear={"2023"}
          endYear={"2023"}
          startMonth={"September"}
          endMonth={"December"}
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
            "Express",
            "Web-Dev",
            "Full Stack",
            "GitHub",
            "Docker",
          ]}
          imageUrl="./exp-images/ner.png"
        />
      </Box>
    </Box>
  );
};

export default ExperiencePage;
