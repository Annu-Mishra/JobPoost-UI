'use client'
import React, { useState } from 'react'
import { VideoWrapper } from './styleWrapper'
import { Box, Dialog, IconButton } from '@mui/material'
import { PlayArrow } from '@mui/icons-material'

const VideoDialog = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
   <>
    <VideoWrapper style={{ backgroundImage: `url(https://hijobs.e-plugins.com/wp-content/uploads/2023/06/page-banner.jpg)`, }} mb={3} >
          <IconButton onClick={handleOpen} style={{ backgroundColor: 'white' }} >
            <PlayArrow fontSize="large" />
          </IconButton>
        </VideoWrapper>
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <Box component="video" controls autoPlay style={{ width: '100%' }}>
            <source src="https://www.youtube.com/watch?v=ScMzIvxBSi4" type="video/mp4" />
          </Box>
        </Dialog>
   </>
  )
}

export default VideoDialog
