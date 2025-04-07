'use client'
import React from 'react'
import { DirectoryAvatar,DirectoryMainCard, StyledButton2, TagButton } from './styleWrapper'
import { Box, Button, CardContent, Divider, Typography } from '@mui/material'
import { LocationOn } from '@mui/icons-material'

const DirectoryCard = ({logo,name,tags,location,salary}) => {
  return (
   

    <DirectoryMainCard>
    <CardContent>
      <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
        <DirectoryAvatar src={logo} alt={name} />
        <Typography fontWeight={500} fontSize="1.2rem" mt={1}>
          {name}
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" gap={1} flexWrap="wrap" justifyContent="center">
          {tags.map((tag, index) => (
            <TagButton key={index} variant="contained">
              {tag}
            </TagButton>
          ))}
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box display="flex" justifyContent="space-between" width="100%">
          <Box display="flex" alignItems="center">
            <LocationOn fontSize="small" color="action" />
            <Typography fontSize="12px" color="textSecondary">
              {location}
            </Typography>
          </Box>
          <Typography variant="subtitle2" color="primary">
            {salary}
          </Typography>
        </Box>
        <Button variant="contained" fullWidth sx={{ mt: 2, backgroundColor: '#0859F7' }}>
          View Profile
        </Button>
        <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
          Message
        </Button>
      </Box>
    </CardContent>
  </DirectoryMainCard>
  )
}

export default DirectoryCard
