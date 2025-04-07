'use client'
import React from 'react';
import {
  StyledBox2,
  StyledGridContainer,
  StyledCard,
  StyledCardContent,
  StyledIconBox,
  StyledTypographyTitle,
  StyledTypographyDetails,
  OuterBox3,
  InnerBox,
  ContentBox,
  StyledTypography,
  TitleTypography,
  FormBox,
  StyledTextField,
  MessageTextField,
  StyledButton,
} from '@/app/component/styleWrapper';
import { infoData } from '@/app/data/data';
import { Box, Grid2 } from '@mui/material';
import Top from '@/app/component/top';

const Contact = () => {
  return (
    <>
      <Top title='Contact Us' />
      <StyledBox2>
        <StyledGridContainer container spacing={3}>
          {infoData.map((info, index) => (
            <Grid2 item xs={12} sm={6} md={4} key={index}>
              <StyledCard>
                <StyledCardContent>
                  <StyledIconBox>{info.icon}</StyledIconBox>
                  <StyledTypographyTitle variant="h6" gutterBottom>
                    {info.title}
                  </StyledTypographyTitle>
                  <StyledTypographyDetails variant="body2">
                    {info.details}
                  </StyledTypographyDetails>
                </StyledCardContent>
              </StyledCard>
            </Grid2>
          ))}
        </StyledGridContainer>
      </StyledBox2>

      <OuterBox3>
        <InnerBox>
          <ContentBox>
            <StyledTypography>GET IN TOUCH</StyledTypography>
            <TitleTypography>Have Any Questions ?</TitleTypography>
            <FormBox>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 3,
                  width: '100%',
                }}
              >
                <StyledTextField placeholder="Name*" />
                <StyledTextField placeholder="Email*" />
              </Box>
              <Box sx={{ marginTop: 3, width: '100%' }}>
                <MessageTextField
                  placeholder="Subject*"
                />
              </Box>
              <Box sx={{ marginTop: 3, width: '100%' }}>
                <MessageTextField placeholder="Message" height='21vh' />
              </Box>
              <Box sx={{ marginTop: 3 }}>
                <StyledButton width={'100%'}>{`SEND MESSAGE >>`}</StyledButton>
              </Box>
            </FormBox>
          </ContentBox>
        </InnerBox>
      </OuterBox3>
    </>
  );
};

export default Contact;


