'use client'
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Components
const StyledWrapper = styled(Box)(({ theme }) => ({
  paddingBottom: '105px',
  paddingLeft: '20px',
  paddingRight: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  margin: 'auto',
  padding: theme.spacing(2.5),
  width: '85vw',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#EFF2F6',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    
    paddingLeft: '45px',
    paddingRight: '45px',
    width: '80vw',
    paddingTop: '45px',
    paddingBottom: '45px',
  },
  [theme.breakpoints.up('md')]: {
    width: '80vw',
    paddingTop: '4px',
    flexDirection: 'row',
  },
  [theme.breakpoints.up('lg')]: {
    width: '66vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '52vw',
    justifyContent:'flex-Start'
  },
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});

const StyledTextContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@media (min-width: 960px)': { 
    flexDirection: 'row',
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  textTransform: 'none',
  color: 'white',
  borderRadius: '25px',
  backgroundColor: '#0859F7',
}));

// Component
const AnswerSection = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledImage src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/hi.png" alt="Image" />
        <StyledTextContainer>
          <Box>
            <Typography fontSize={'1.4rem'} fontWeight="500" color='black'>
              Don't get your answer?
            </Typography>
            <Typography sx={{ fontSize: '10px', color: 'grey' }}>
              Luctus sapien pellentesque arcu fermentum accumsan.
            </Typography>
          </Box>
          <Box>
            <StyledButton>
              {`Get started>>`}
            </StyledButton>
          </Box>
        </StyledTextContainer>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default AnswerSection;
