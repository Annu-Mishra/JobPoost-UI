'use client'
import { Box } from "@mui/material";
import { StyledBox, StyledButton2, StyledGrid, StyledTypographyBody1, StyledTypographyH4 } from "@/app/component/styleWrapper";

export default function Recruiter() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    });
  };
  return (
    <>
      <StyledBox>
        <StyledGrid>
          <Box display='flex' flexDirection={'column'}>
            <StyledTypographyH4>Start hiring your top talent’s here!</StyledTypographyH4>
            <StyledTypographyBody1>
              Congue malesuada nascetur lacus aliquet mattis, porta justo a pharetra orci himenaeos.
            </StyledTypographyBody1>
          </Box>
          <StyledButton2 onClick={scrollToTop}>Get Started &rarr;</StyledButton2>
        </StyledGrid>
      </StyledBox>
    </>
  );
}
