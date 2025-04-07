import React from 'react';
import { Box } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', sm: 'none', md: 'flex' },
        justifyContent: 'flex-end',
        width: '100%',
      }}
    >
      <img
        src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/banner-right-image.png"
        alt="Right Banner"
        style={{ maxWidth: '80%', height: 'auto' }}
      />
    </Box>
  );
};

export default Hero
