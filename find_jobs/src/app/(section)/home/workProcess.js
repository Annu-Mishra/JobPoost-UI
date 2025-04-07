'use client'

import { Grid2, Typography } from "@mui/material";
import { OuterBox, OuterBox2, ProcessBox, HeaderBox2, Line, StepBox, StepCircle, StepDescription, StepTitle } from "@/app/component/styleWrapper";

const WorkProcess = ({ steps }) => {
  return (
    <>
      <OuterBox py={'100px'}>
        <OuterBox2>
          <HeaderBox2>
            <Typography sx={{ color: '#0000FF', fontWeight: '400' }}>
              OUR WORK PROCESS
            </Typography>
            <Typography sx={{ fontSize: '31px', fontWeight: '500' }}>
              How it Works ?
            </Typography>
          </HeaderBox2>

          <ProcessBox>
            <Line />
            <Grid2 container justifyContent="center" alignItems="center" spacing={{ xs: 7, sm: 3, md: 0, lg: 7 }} rowSpacing={{ sm: 7 }}>
              {steps.map((step, index) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 3, xl: 3 }} key={index}>
                  <StepBox>
                    <StepCircle>{step.icon}</StepCircle>
                    <StepTitle variant="h6">{step.title}</StepTitle>
                    <StepDescription variant="body2">
                      You need to create an account to find the best preferred job.
                    </StepDescription>
                  </StepBox>
                </Grid2>
              ))}
            </Grid2>
          </ProcessBox>
        </OuterBox2>
      </OuterBox>
    </>
  );
};

export default WorkProcess;