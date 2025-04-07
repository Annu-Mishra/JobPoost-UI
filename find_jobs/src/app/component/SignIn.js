'use client'
import React from 'react';
import { Typography, Box, Link } from '@mui/material';
import { StyledPaper, FooterBox, FormBox2 } from './styleWrapper'; // Adjust the import path

const SignInSection = ({ title, children, footerLinkText, footerLinkHref }) => {
  return (
    <StyledPaper elevation={2}>
      {title && (
        <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: '16px' }}>
          {title}
        </Typography>
      )}
      <FormBox2>{children}</FormBox2>
      {footerLinkText && footerLinkHref && (
        <FooterBox>
          <Link href={footerLinkHref} sx={{ color: 'white' }}>
            {footerLinkText}
          </Link>
        </FooterBox>
      )}
    </StyledPaper>
  );
};

export default SignInSection;
