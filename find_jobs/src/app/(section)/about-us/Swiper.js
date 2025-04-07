'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import {
  swiperConfig,
  SwiperSectionContainer,
  SectionTitleContainer,
  SectionTitle,
  MemberCard,
  FabIconsContainer,
  StyledFab,
  OuterBox2,
  OuterBox,
  TestimonialContainer,
  Heading,
  FeedbackCard,
  FeedbackQuote,
} from '@/app/component/styleWrapper';
import { Typography, Box, CardMedia, CardContent, Avatar, Divider } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { Autoplay, Pagination } from 'swiper/modules';

const TeamSwiper = ({ members, icons }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFabClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SwiperSectionContainer px={'20px'} py={'100px'}>
      <Box mx="auto" width={{ md: '90vw', lg: '70vw' }} >
        <SectionTitleContainer>
          <Typography color="#0859F7" fontSize={'1rem'} mt={2}>
            TEAM MEMBER
          </Typography>
          <Box display="flex">
            <SectionTitle gutterBottom>Our Team Members</SectionTitle>
          </Box>
        </SectionTitleContainer>f
        <Swiper  {...swiperConfig}>
          {members.map((member, index1) => (
            <SwiperSlide key={index1}>
              <MemberCard>
                <CardMedia component="img" height="220" image={member.imageUrl} alt={member.name} />
                <CardContent>
                  {activeIndex === index1 && (
                    <FabIconsContainer>
                      {icons.map((item, index2) => (
                        <StyledFab key={index2} size="small" onClick={item.clickHandler}>
                          {item.icon}
                        </StyledFab>
                      ))}
                    </FabIconsContainer>
                  )}
                  <StyledFab
                    size="small"
                    sx={{ position: 'absolute', right: 15, bottom: { xs: 140, sm: 120, md: 100 } }}
                    onClick={() => handleFabClick(index1)}
                  >
                    <ShareIcon />
                  </StyledFab>
                  <Box display="flex" flexDirection="column" textAlign="left" p={1}>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="body2" color="primary">
                      {member.title}
                    </Typography>
                  </Box>
                </CardContent>
              </MemberCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </SwiperSectionContainer>
  );
};

export const Feedback = ({ feedbacks }) => {
  return (
    <TestimonialContainer>
      <Box sx={{ maxWidth: 1020, mx: 'auto' }}>
        <SectionTitle>COMPANY FEEDBACKS</SectionTitle>
        <Heading gutterBottom>People Who Already Love Us</Heading>

        <Swiper
          modules={[Pagination, Autoplay]}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            300: { slidesPerView: 1 },
            960: { slidesPerView: 2 },
          }}
        >
          {feedbacks.map((feedback, index) => (
            <SwiperSlide key={index}>
              <FeedbackCard>
                <Typography
                  component="p"
                  sx={{ textAlign: 'left', mb: 3 }}
                >
                  <FeedbackQuote>“{feedback.quote}”</FeedbackQuote>
                </Typography>
                <Divider />
                <Box display="flex" alignItems="center" mt={3}>
                  <Avatar
                    src={feedback.avatarUrl}
                    alt={feedback.name}
                    sx={{ width: 50, height: 50, mr: 2 }}
                  />
                  <Box textAlign="left">
                    <Typography variant="h6">{feedback.name}</Typography>
                    <Typography variant="body2" color="primary">
                      {feedback.title}
                    </Typography>
                  </Box>
                  <Box ml="auto" display={{ xs: 'none', sm: 'block' }}>
                    <img
                      src={feedback.companyLogoUrl}
                      alt="Company Logo"
                      style={{ height: 30 }}
                    />
                  </Box>
                </Box>
              </FeedbackCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </TestimonialContainer>
  );
};



export default TeamSwiper;


