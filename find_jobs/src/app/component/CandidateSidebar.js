import React from 'react'
import { AvatarWrapper, Sidebar2, SocialIcons, StyledButton } from './styleWrapper'
import { Avatar, Box, Divider, IconButton, Paper, Typography } from '@mui/material'
import { Facebook, Reddit, Twitter, WhatsApp } from '@mui/icons-material'

const CandidateSidebar = ({name,contact, candidateData}) => {
  return (
    <Sidebar2>
        <Paper sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <AvatarWrapper>
      <Avatar src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/candidate-12.png" alt="Profile Picture" width={'60px'} height={'60px'} />
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography color="primary" fontSize={'12px'}><a href="mailto:candidate12@e-plugins.com">{contact}</a> </Typography>
      </Box>
    </AvatarWrapper>
    </Paper>

    {candidateData.map((post, index) => (
      <Box key={index} sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', }} >
          <Typography sx={{ fontSize: '12px' }}>{post.label} </Typography>
          <Typography sx={{ fontSize: '12px' }}>{post.detail}</Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
      </Box>
    ))}

    <SocialIcons>
      <IconButton><Facebook /></IconButton>
      <IconButton><Twitter /></IconButton>
      <IconButton><WhatsApp /></IconButton>
      <IconButton><Reddit /></IconButton>
    </SocialIcons>
    <StyledButton>Download CV</StyledButton>
  </Sidebar2>
  )
}

export default CandidateSidebar
