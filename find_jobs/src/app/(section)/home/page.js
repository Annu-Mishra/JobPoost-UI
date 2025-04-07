'use client'
import React, { useState } from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import JobCard from '@/app/component/jobCard'
import TextSection from '@/app/component/textSection'
import Hero from '@/app/component/hero'
import {
  // RootContainer,
  HeaderBox,
  JobTitle,
  JobSubtitle,
  MainButton,
  CategoryButton,
  JobBoxContainer,
  CallToActionBox,
  CallToActionContent,
  OuterBox,
  OuterBox2,
  RootBox
} from '@/app/component/styleWrapper';
import { buttons } from '@/app/data/data';
// import ThemeToggle from '../common/ThemeTongle';

function HomePage({ jobData }) {
  const [selectedCategory, setSelectedCategory] = useState('Accounting');
  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };


  const filteredJobs = selectedCategory
    ? jobData.filter((job) => job.category.includes(selectedCategory))
    : jobData;

  // const handleClick = (label) => setSelectedCategory(label);

  return (
    <>

      <RootBox>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextSection />
            </Grid>
            <Grid item xs={12} md={6}>
              <Hero />
            </Grid>
          </Grid>
        </Container>
      </RootBox>

      {/* // <RootContainer> */}
      <OuterBox sx={{ px: '20px' }}>
        <OuterBox2>
          <HeaderBox>
            <Box >
              <JobTitle>Jobs of the day</JobTitle>
              <JobSubtitle>Find your favourite jobs and get the benefits of yourself</JobSubtitle>
            </Box>
            <Box mt={3}>
              <Button   variant="contained">See More Jobs &gt;&gt;</Button></Box>
          </HeaderBox>

          <Grid container spacing={2} sx={{ paddingTop: '24px' }}>
            {buttons.map((category) => (
              <Grid item xs={6} sm={4} md={3} lg={2} xl={12 / 7} key={category.label}>
                <CategoryButton isSelected={selectedCategory === category.label} onClick={() => handleCategoryClick(category.label)} startIcon={category.icon}>
                  {category.label}
                </CategoryButton>
              </Grid>
            ))}
          </Grid>

          <JobBoxContainer container spacing={4} width={'100%'}>

            {filteredJobs.length > 0 && (
              filteredJobs.map((job, index) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                  <JobCard job={job} />
                </Grid>
              ))
            )
            }
          </JobBoxContainer>

          <CallToActionBox>
            <CallToActionContent>
              <Typography >Do you want to post a job for your company?</Typography>
              <Link sx={{ color: '#6200ff' }}>We can help. Click here</Link>
            </CallToActionContent>
          </CallToActionBox>
          {/* // </RootContainer> */}
        </OuterBox2>
      </OuterBox>
    </>

  );
}

export default HomePage;

