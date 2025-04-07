import React from 'react'
import Facebook from '@mui/icons-material/Facebook';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Instagram from '@mui/icons-material/Instagram';
import { Box, Container, Typography, IconButton, TextField, Button, Grid2, Divider } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#0b1c39', color: '#fff', pl: { xs: 2, sm: 15, md: 10, lg: 22, xl: 48 }, pt: 10, pb: 2 }}>

      <Grid2 container spacing={{ xs: 5, sm: 10, md: 8, lg: 12 }} columnSpacing={{ xs: 18, md: 10 }} sx={{ textAlign: 'left', fontFamily: 'sans-serif' }}>

        <Grid2 item xs={12} sm={6} md={3}  >
          <img src='https://hijobs.e-plugins.com/wp-content/uploads/2023/06/footer-logo.png' alt='companylogo'
            style={{ maxWidth: '160px' }}
          ></img>
          <Typography variant="body2" sx={{ color: 'white', textAlign: 'left', fontSize: '13px', mt: 5, width: { md: '10vw', sm: '35vw', md: '14vw' }, lineHeight: 2 }} >
            It is a long established fact that is the read will been distracted there and readable an important content.
          </Typography>
          <Typography variant="subtitle2" sx={{ fontSize: '18px', mt: 2 }}>Find Us On:</Typography>
          <Box sx={{ mt: 1 }}>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Twitter /> </IconButton>
            <IconButton color="inherit"><LinkedIn /></IconButton>
            <IconButton color="inherit"> <Instagram /></IconButton>
          </Box>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={3} sx={{ ml: 2 }}>
          <Typography variant="h6" gutterBottom color='white'>
            Quick Links
          </Typography>
          <Typography variant="body2" sx={{ mt: 5 }}>
            <Box sx={{ listStyleType: 'none', color: 'white', padding: 0, fontSize: '13px', lineHeight: 2.5 }}>

              <li>» Job Packages</li>
              <li>» Jobs Listing</li>
              <li>» Jobs Grid View</li>
              <li>» Employer Listing</li>
              <li>» Candidate Listing</li>

            </Box>
          </Typography>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={3} sx={{ ml: 2 }}>
          <Typography variant="h6" gutterBottom color='white'>
            For Candidates
          </Typography>
          <Typography variant="body2" sx={{ mt: 5 }}>
            <ul style={{ listStyleType: 'none', color: 'white', padding: 0, lineHeight: 2.5 }}>
              <li>» User Dashboard</li>
              <li>» Candidates Listing</li>
              <li>» Candidates Grid</li>
              <li>» CV Packages</li>
              <li>» Candidates Login</li>
            </ul>
          </Typography>
        </Grid2>

        <Grid2 item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom color='white'>
            Get In Touch
          </Typography>
          <Typography variant="body2" sx={{ mt: 5 ,color:'white'}}>
            Fusce varius, dolor tempor interdum<br /> tristiquei bibendum service life.
          </Typography>

          <Box sx={{ alignItems: 'center', mt: 2 }}>
            <TextField variant="outlined"  placeholder="Your email address"sx={{  '& .MuiInputBase-input::placeholder': {
    color: 'white',
    opacity: 1
  }, borderRadius: '30px', mr: 1 }} /><br />
            <Button
              variant="contained"
              sx={{               
                whiteSpace: 'nowrap',
                padding: '10px 16px',
                borderRadius: '30px',
                mt: 2
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Grid2>




      </Grid2>




    </Box >
  )
}

export default Footer





// 'use client'
// import React from 'react';
// import { Grid, IconButton, Typography } from '@mui/material';
// import Facebook from '@mui/icons-material/Facebook';
// import Twitter from '@mui/icons-material/Twitter';
// import LinkedIn from '@mui/icons-material/LinkedIn';
// import Instagram from '@mui/icons-material/Instagram';
// import {
//   FooterContainer,
//   FooterGrid,
//   FooterItem,
//   FooterLogo,
//   FooterDescription,
//   FooterSocialIcons,
//   FooterQuickLinks,
//   FooterInput,
//   FooterButton,
// } from '../common/styleWrapper'// Import the styled components

// function Footer() {
//   return (
//     <FooterContainer px={{ xs: 2, sm: 15, md: 10, lg: 22, xl: 48 }}>
//       <FooterGrid container spacing={{ xs: 5, sm: 10, md: 8, lg: 12, xl: 15 }} columnSpacing={{ xs: 18, md: 10 }}>

//         {/* First Grid Item */}
//         <FooterItem item xs={12} sm={6} md={3}>
//           <FooterLogo src='https://hijobs.e-plugins.com/wp-content/uploads/2023/06/footer-logo.png' alt='companylogo' />
//           <FooterDescription variant="body2" color='white'>
//             It is a long established fact that is the read will been distracted there and readable an important content.
//           </FooterDescription>
//           <Typography variant="subtitle2" sx={{ color: 'white', fontSize: '18px' }}>Find Us On:</Typography>
//           <FooterSocialIcons>
//             <IconButton color="inherit"><Facebook /></IconButton>
//             <IconButton color="inherit"><Twitter /></IconButton>
//             <IconButton color="inherit"><LinkedIn /></IconButton>
//             <IconButton color="inherit"><Instagram /></IconButton>
//           </FooterSocialIcons>
//         </FooterItem>

//         {/* Second Grid Item */}
//         <FooterItem item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom color='white'>Quick Links</Typography>
//           <FooterQuickLinks>
//             <ul>
//               <li>» Job Packages</li>
//               <li>» Jobs Listing</li>
//               <li>» Jobs Grid View</li>
//               <li>» Employer Listing</li>
//               <li>» Candidate Listing</li>
//             </ul>
//           </FooterQuickLinks>
//         </FooterItem>

//         {/* Third Grid Item */}
//         <FooterItem item xs={12} sm={6} md={3} ml={2}>
//           <Typography variant="h6" gutterBottom color='white'>For Candidates</Typography>
//           <FooterQuickLinks>
//             <ul>
//               <li>» User Dashboard</li>
//               <li>» Candidates Listing</li>
//               <li>» Candidates Grid</li>
//               <li>» CV Packages</li>
//               <li>» Candidates Login</li>
//             </ul>
//           </FooterQuickLinks>
//         </FooterItem>

//         {/* Fourth Grid Item */}
//         <FooterItem item xs={12} sm={6} md={3} ml={2}>
//           <Typography variant="h6" gutterBottom color='white'>Get In Touch</Typography>
//           <Typography variant="body2">
//             Fusce varius, dolor tempor interdum tristiquei bibendum service life.
//           </Typography>

//           <FooterInput
//             variant="outlined"
//             placeholder="Your email address"
//           />
//           <FooterButton variant="contained">
//             Subscribe Now
//           </FooterButton>
//         </FooterItem>

//       </FooterGrid>
//     </FooterContainer>
//   );
// }

// export default Footer;

