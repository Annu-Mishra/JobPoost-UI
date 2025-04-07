'use client'
import { ContainerBox, ImageContainer, OuterBox, OuterBox2, OverlayPaper, StyledDialog, StyledGrid, StyledIconButton, StyledImage, StyledVideo, VideoBackgroundBox, VideoSectionContainer } from "@/app/component/styleWrapper";
import Top from "@/app/component/top";
import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import WorkProcess from "../home/workProcess";
import { aboutAccordian, feedbacks, members, stats, steps } from "@/app/data/data";
import ReusableAccordion from '@/app/component/Accordian';
import { PlayArrow } from "@mui/icons-material";
import StatsSection from "../home/Stats";
import TeamSwiper, { Feedback } from "./Swiper";

function About() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behaviour: 'smooth'
    });
};

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Top title='About Us' />

      <OuterBox py={'100px'} px={'20px'}>
        <StyledGrid container  >
          <Box sm={12} md={6}>
            <ImageContainer>
              <StyledImage
                component="img"
                src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/img-2-1.jpg"
                alt="Freelancers" maxWidth={'78%'}
              />
              <OverlayPaper flexDirection={'column'} elevation={3} >
                <Typography sx={{ fontSize: '1.1rem', textAlign: 'left', color: 'black' }}>18K+</Typography>
                <Typography fontSize="12px" color="grey">Individual Freelancers</Typography>
                <Box component="img" src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/users.png" alt="Freelancers" sx={{ width: '100%', maxWidth: '80%', marginTop: '16px', height: 'auto' }} />
              </OverlayPaper>
            </ImageContainer>
          </Box>
          <Box sm={12} md={6}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="subtitle1" color="#0859F7">MORE ABOUT OUR COMPANY</Typography>
              <Typography variant="h4" fontWeight="500" gutterBottom sx={{ width: { md: '41vw', lg: '33vw' }, fontSize: { xs: '1.5rem', sm: '2.5rem' } }} >
                Get over 80,000 expert & talented freelancers in Hi’Jobs platform.
              </Typography>
              <Typography sx={{ width: { md: '41vw', lg: '29vw' }, fontSize: '0.8rem', color: 'grey' }}>
                Synergistically visualize alternative content before cross functional core Rapidiously
                and administra standardized value via focused benefits. Rapidly redefine highly
                efficient niche markets with plug-and-play materials professionally
              </Typography>
              <Box component="ul" sx={{ py: 3 }}>
                <Typography component="li" variant="body2">Seamless searching</Typography>
                <Typography component="li" variant="body2"> Get top 3% experts for your projects</Typography>
                <Typography component="li" variant="body2"> Protected payment system</Typography>
              </Box>
              <Button onClick={scrollToTop} borderRadius={'50px'} >{`Click Here >>`}</Button>
            </Box>
          </Box>
        </StyledGrid>
      </OuterBox>

      <WorkProcess steps={steps} />

      <OuterBox px={'20px'} py={'105px'} >
        <Box sx={{ mx: 'auto', display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
          <Box sx={{ alignItems: { lg: 'center' }, alignContent: 'center', width: { md: '42vw', lg: '28vw' }, p: 1 }}>
            <Typography fontSize={'15px'} color={'#0859F7'}>WHY CHOOSE US?</Typography>
            <Typography sx={{ mt: 1, width: { xs: '89vw', md: '31vw', lg: '24vw' }, fontSize: { xs: '27px', sm: '37px' }, fontWeight: '500', lineHeight: 1.1 }}>
              We've been helping customers globally
            </Typography>
          </Box>

          <Box sx={{ width: { md: '38vw', lg: '26vw' }, p: 1, mt: 1 }}>
            {aboutAccordian.map((accordian) => (
              <ReusableAccordion
                expanded={expanded === accordian.id}
                onChange={handleChange(accordian.id)}
                title={accordian.title}
                details={accordian.details}
              />
            ))}

          </Box>
        </Box>
      </OuterBox>


      <VideoSectionContainer>
        <VideoBackgroundBox>
          <StyledIconButton color="primary" onClick={handleOpen}>
            <PlayArrow sx={{ fontSize: 50 }} />
          </StyledIconButton>
        </VideoBackgroundBox>
        <StyledDialog open={open} onClose={handleClose}>
          <StyledVideo component="video" controls autoPlay>
            <source src="https://vimeo.com/100902001" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </StyledDialog>
      </VideoSectionContainer>

      <StatsSection stats={stats} />

      {/* <TeamSwiper members={members}/> */}

      <Feedback feedbacks={feedbacks} />


    </>
  );
}

export default About;
