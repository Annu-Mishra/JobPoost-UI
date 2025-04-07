'use client'
import CandidateSidebar from "@/app/component/CandidateSidebar";
import { ContainerBox2, LeftColumn, SectionTitle2, Text } from "@/app/component/styleWrapper";
import Top from "@/app/component/top";
import VideoDialog from "@/app/component/VideoDialog";
import { candidateData } from "@/app/data/data";
import { Box } from "@mui/material";
import React from "react";

export default function EmployerProfile() {
  return (

    <>

      <Top title='Employer Profile' />

      <ContainerBox2 py={'80px'}>
        <Box gap={4} display={'flex'} justifyContent={'center'} margin={'auto'} alignItems={'flex-start'} flexWrap={{ xs: 'wrap', sm: 'nowrap' }}>
          <LeftColumn>
            <SectionTitle2 variant="h5">About</SectionTitle2>
            <Text> Volutpat fusce integer facilisi vestibulum habitant urna est nullam lacinia ligula montes, egestas pulvinar per felis mus orci congue ullamcorper bibendum taciti pharetra, suscipit nulla semper aliquam nostra nec gravida rhoncus tempor cneqiut. Risus vitae dictumst dui convallis netus tellus eleifend leo, quisque est nec fusce euismod congue donec sat nascetur then magnis natoque semper non neque mattis tempor. Ligula litora vel mattis nibh tempus orci accumsan morbi volut pationi consequat, senectus facilisi porta elementum taciti tortor nostra fringilla donec, non in ultricies nec lacus at proin scelrise sociis. Cras suscipit spien leo est congue pretium venenatis ligula, integer vivamus lacus dignissim a orci posuere gravida, et cum tortor quam nascetur erat faucibus about hijobs company. </Text>
            <SectionTitle2 variant="h5">Quick Video</SectionTitle2>
            <VideoDialog />

            <VideoDialog />
          </LeftColumn>

          <CandidateSidebar name='Techno Info' contact='Contact Us' candidateData={candidateData} />
        </Box>

      </ContainerBox2>
    </>
  );
}
