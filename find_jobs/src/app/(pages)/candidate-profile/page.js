'use client'
import React, { useState } from 'react';
import { Typography, IconButton, Avatar, Dialog, Box, Divider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Facebook, Twitter, WhatsApp, Reddit } from '@mui/icons-material';

import {
  ContainerBox,
  LeftColumn,
  SectionTitle,
  Text,
  // StyledCard,
  VideoWrapper,
  Sidebar,
  AvatarWrapper,
  SocialIcons,
  OuterBox,
  StyledButton,
  SectionTitle2,
  Sidebar2,
  ContainerBox2,
  StyledGrid
  // DownloadButton,
} from '@/app/component/styleWrapper'; // Import styled components
import Top from '@/app/component/top';
import { candidateData, experiences, posts } from '@/app/data/data';
import ExperienceCard from '@/app/component/ExperienceCard';
import CandidateSidebar from '@/app/component/CandidateSidebar';
import VideoDialog from '@/app/component/VideoDialog';
// import { OuterBox } from '@/app/common/styleWrapper';

const CandidateProfile = () => {


  return (
    <>
      <Top title='Candidate Profile' />

      <ContainerBox2 py={'80px'}>
        <Box gap={4} display={'flex'} justifyContent={'center'} margin={'auto'} alignItems={'flex-start'} flexWrap={{ xs: 'wrap', sm: 'nowrap' }}>
          <LeftColumn>
            <SectionTitle2 variant="h5">About</SectionTitle2>
            <Text> Volutpat fusce integer facilisi vestibulum habitant urna est nullam lacinia ligula montes, egestas pulvinar per felis mus orci congue ullamcorper bibendum taciti pharetra, suscipit nulla semper aliquam nostra nec gravida rhoncus tempor cneqiut. Risus vitae dictumst dui convallis netus tellus eleifend leo, quisque est nec fusce euismod congue donec sat nascetur then magnis natoque semper non neque mattis tempor. Ligula litora vel mattis nibh tempus orci accumsan morbi volut pationi consequat, senectus facilisi porta elementum taciti tortor nostra fringilla donec, non in ultricies nec lacus at proin scelrise sociis. Cras suscipit spien leo est congue pretium venenatis ligula, integer vivamus lacus dignissim a orci posuere gravida, et cum tortor quam nascetur erat faucibus about hijobs company. </Text>
            <SectionTitle2 variant="h5" fontWeight="bold" mt={4} mb={2}> Education  </SectionTitle2>
            <ExperienceCard experiences={experiences} />
            <SectionTitle2 variant="h5" fontWeight="bold" mt={4} mb={2}> Working Experience </SectionTitle2>
            <ExperienceCard experiences={experiences} />
            <SectionTitle2 variant="h5">Quick Video</SectionTitle2>
            <VideoDialog />
          </LeftColumn>

          <CandidateSidebar name='Olan Zeka' contact={'Message Me'} candidateData={candidateData} />
        </Box>

      </ContainerBox2>
    </>
  );
};

export default CandidateProfile;
