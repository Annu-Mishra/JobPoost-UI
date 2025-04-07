import { Box, CardContent, Divider } from "@mui/material";
import { RoleDescription, RoleTitle, SectionTitle2, StyledCard2 } from "./styleWrapper";

const ExperienceCard = ({ experiences }) => {
    return (
      <StyledCard2 variant="outlined">
        <CardContent>
          {experiences.map((experience, index) => (
            <Box key={index}>
              <SectionTitle2 variant="subtitle1">{experience.company}</SectionTitle2>
              <RoleTitle variant="body1">{experience.role}</RoleTitle>
              <RoleDescription variant="body2">{experience.description}</RoleDescription>
              {index < experiences.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))}
        </CardContent>
      </StyledCard2>
    );
  };
  
  export default ExperienceCard;