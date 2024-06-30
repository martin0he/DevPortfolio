import { Box } from "@mui/material";
import ExpCard from "../components/ExpCard";

const ExperiencePage = () => {
  return (
    <Box>
      <Box width="70%" height="70%" overflow="auto">
        <ExpCard
          startYear={"2023"}
          endYear={"2024"}
          startMonth={"June"}
          endMonth={"January"}
          title={"SoftwareDev"}
          company={"Intel"}
          description={"Lorem Ipsum kjjhe iudi we d"}
          technologies={["React", "Figma", "Typescript", "NodeJS", "Prisma"]}
        />
        <ExpCard
          startYear={"2023"}
          endYear={"2024"}
          startMonth={"June"}
          endMonth={"January"}
          title={"SoftwareDev"}
          company={"Intel"}
          description={"Lorem Ipsum kjjhe iudi we d"}
          technologies={["React", "Figma", "Typescript", "NodeJS", "Prisma"]}
        />
        <ExpCard
          startYear={"2023"}
          endYear={"2024"}
          startMonth={"June"}
          endMonth={"January"}
          title={"SoftwareDev"}
          company={"Intel"}
          description={"Lorem Ipsum kjjhe iudi we d"}
          technologies={["React", "Figma", "Typescript", "NodeJS", "Prisma"]}
        />
      </Box>
    </Box>
  );
};

export default ExperiencePage;
