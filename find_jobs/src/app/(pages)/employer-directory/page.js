'use client'
import React from 'react';
import { Box, Grid2 } from '@mui/material';
// import Grid2 from '@mui/material'; 
// import DirectoryCard from './DirectoryCard';
import { directory } from '@/app/data/data';
import Top from '@/app/component/top';
import DirectoryCard from '@/app/component/DirectoryCard';



const EmployerDirectory = () => {
  return (
    <>
      <Top title='Employer Directory' />
      <Box py={8} display="flex" justifyContent="center">
        <Grid2
          container
          spacing={{ xs: 4, sm: 2, md: 3 }}
          sx={{ mx: 'auto', pl: { xs: 2, sm: 4 }, justifyContent: 'center' }}
        >
          {directory.map((directory, index) => (
            <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
              <DirectoryCard
                logo={directory.logo}
                name={directory.name}
                tags={directory.tags}
                location={directory.location}
                salary={directory.salary}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
};

export default EmployerDirectory;

