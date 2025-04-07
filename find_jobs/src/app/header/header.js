'use client';

import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useRouter } from 'next/navigation';
import { CustomAppBar, CustomToolbar, CustomButton, NavItemsBox, TopAppBar, TopToolbar, BuyButton, customButtonStyle, drawerBoxStyle, closeIconStyle, CompanyLogo } from '../component/styleWrapper';
import { menuItems, pagesSubmenuItems } from '../data/data';
import { Box, Button, Drawer, Menu, MenuItem, Typography, useMediaQuery } from '@mui/material';
import { ClearIcon } from '@mui/icons-material';
import ThemeToggle from '../component/ThemeTongle'
import theme from '@/style/theme';
import Link from 'next/link';

function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = (path) => {
    router.push(path);
  };

  const handlePagesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePagesClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handlePagesClose();
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>

      <TopAppBar position="fixed">
        <TopToolbar>
          <Typography sx={{ fontWeight: 'bold', color: 'white' }}>envatomarket</Typography>
          <BuyButton variant="contained" onClick={() => navigate('/')}>
            Buy now
          </BuyButton>
        </TopToolbar>
      </TopAppBar>
      <CustomAppBar position="fixed" sx={{ top: '54px', zIndex: 1200 }}>
        <CustomToolbar>
          <Box
            component="img"
            src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/logo.png"
            alt="hiJOBS"
            sx={{
              width: { xs: "50%", sm: "30%", md: "21%", lg: "14%", xl: "14%", },
              maxWidth: "100%",
              height: "auto",
            }} />
          <Box sx={{ flexGrow: 1 }} />
          <NavItemsBox>
            {menuItems.map((menuItem) => (
              menuItem.item === "Pages" ? (
                <CustomButton onClick={(event) => handlePagesClick(event)} >  {menuItem.item} </CustomButton>
              ) : (
                <CustomButton onClick={() => navigate(menuItem.path)}  >  {menuItem.item} </CustomButton>
              )))}
          </NavItemsBox>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handlePagesClose}
          >
            {pagesSubmenuItems.map(({ label, path }) => (
              <MenuItem key={label} onClick={() => handleMenuItemClick(path)}>
                {label}
              </MenuItem>
            ))}
          </Menu>

          <Box sx={{ display: 'flex' }}>
            <Link href="#" passHref>
              <IconButton color="black"><SearchIcon /> </IconButton>
            </Link>
            <Link href='/myaccount'>
              <IconButton color="black"> <PersonIcon /> </IconButton>
            </Link>

            {!isSmallScreen && (
              <Box>
                <Button variant="contained"
                  onClick={() => navigate('/registration')}
                  sx={{ ml: 1, fontSize: { md: '9px', lg: '13px', xl: '15px' }, px: 1, borderRadius: '25px' }}>Post A Job</Button>
              </Box>
            )}
          </Box>
          {isSmallScreen && (
            <IconButton edge="end" color="black" aria-label="menu" onClick={() => setDrawerOpen(true)} >
              <MenuIcon />
            </IconButton>
          )}
          <ThemeToggle />
        </CustomToolbar>
      </CustomAppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={drawerBoxStyle} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <Box display="flex" flexDirection="column" px={2}>
            <Box sx={closeIconStyle}>
              <ClearIcon onClick={toggleDrawer(false)} />
            </Box>
            {menuItems.map(({ item, path }) => (
              menuItems.item === "Pages" ? (
                <CustomButton onClick={() => handlePagesClick} >
                  {item}
                </CustomButton>
              ) : (
                <CustomButton onClick={() => navigate({ path })} >
                  {item}
                </CustomButton>
              )
            ))}

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handlePagesClose}>
              {pagesSubmenuItems.map(({ label, path }) => (
                <MenuItem key={label} onClick={() => handleMenuItemClick(path)}>
                  {label}
                </MenuItem>
              ))}
            </Menu>
            <Box m={2} width={'100%'}>
              <Button variant="contained" color="primary" sx={{ width: '100%', fontSize: "1rem", px: 3, borderRadius: '25px' }}>
                Post A Job
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default NavBar;




// 'use client'
// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonIcon from "@mui/icons-material/Person";
// import MenuIcon from "@mui/icons-material/Menu";
// import ClearIcon from '@mui/icons-material/Clear';
// // import { useTheme } from '@emotion/react';
// import { useTheme } from '@mui/material/styles';
// import {Box,Button,Divider, Drawer,Menu,MenuItem,useMediaQuery,} from "@mui/material";
// import { useRouter } from "next/navigation";
// // import ThemeToggleButton from "../button/page";
// import { menuItems, pagesSubmenuItems } from '../data/data';


// function NavBar() {
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//     const router = useRouter();
//     const navigate = (path) => {
//         router.push(path)
//     }

//     const toggleDrawer = (open) => () => {
//         setDrawerOpen(open);
//     };

//     const handlePagesClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handlePagesClose = () => {
//         setAnchorEl(null);
//     };

//     const handleMenuItemClick = (path) => {
//         navigate(path);
//         handlePagesClose();
//     };


//     return (
//         <>
//             <AppBar position="fixed" sx={{ zIndex: 1300 }}>
//                 <Toolbar sx={{ bgcolor: "#262626", color: "white", height: "54px" }}>
//                     <Typography sx={{ fontWeight: "bold" }}>envatomarket</Typography>

//                     <Button
//                         variant="contained"
//                         onClick={() => navigate('/')}
//                         sx={{ bgcolor: "#8cc751", color: "white", ml: 'auto' }}
//                     >
//                         {" "}
//                         Buy now{" "}
//                     </Button>
//                 </Toolbar>
//             </AppBar>
//             <Toolbar sx={{ minHeight: '54px' }} />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     height: "120px",
//                     top: '50px',
//                     px: { xs: 0, md: 3, lg: 4, xl: 26 },
//                     backdropFilter: 'blur(15px)', opacity: 1,
//                     backgroundColor: (theme) => theme.palette.background.default,
//                     color: theme.palette.text.primary,

//                 }}
//             >
//                 <Toolbar sx={{
//                     height: "100%",
//                 }}>

//                     <Typography
//                         variant="h6"
//                         sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
//                     >
//                         <Box
//                             component="img"
//                             src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/logo.png"
//                             alt="hiJOBS"
//                             sx={{
//                                 width: {
//                                     xs: "50%",
//                                     sm: "30%",
//                                     md: "56%",
//                                     lg: "32%",
//                                     xl: "30%",
//                                 },
//                                 paddingLeft: 5,
//                                 maxWidth: "100%",
//                                 height: "auto",
//                             }}
//                         />
//                     </Typography>


//                     {!isMobile && (
//                         <Box
//                             sx={{
//                                 display: { md: 'flex', xl: 'flex', lg: 'flex' },
//                                 gap: { md: '9px', lg: "30px" },
//                                 alignItems: "center",
//                                 // color: "#333",
//                                 fontSize: "1rem",
//                             }}
//                         >

//                             {menuItems.map(({ item, path }) => (
//                                 item === "Pages" ? (
//                                     <Button
//                                         key={item}
//                                         color="inherit"
//                                         onClick={handlePagesClick}
//                                         sx={{ textTransform: "none", fontSize: "1rem" }}
//                                     >
//                                         {item}
//                                     </Button>
//                                 ) : (
//                                     <Button
//                                         key={item}
//                                         color="inherit"
//                                         onClick={() => navigate(path)}
//                                         sx={{ textTransform: "none", fontSize: "1rem" }}
//                                     >
//                                         {item}
//                                     </Button>
//                                 )
//                             ))}

//                         </Box>

//                     )}


//                     <Menu
//                         anchorEl={anchorEl}
//                         open={Boolean(anchorEl)}
//                         onClose={handlePagesClose}
//                     >
//                         {pagesSubmenuItems.map(({ label, path }) => (
//                             <MenuItem key={label} onClick={() => handleMenuItemClick(path)}>
//                                 {label}
//                             </MenuItem>
//                         ))}
//                     </Menu>


//                     <Box sx={{ display: "flex", alignItems: "center", ml: 3 }}>
//                         <IconButton color="inherit">
//                             <SearchIcon />
//                         </IconButton>
//                         <IconButton color="inherit">
//                             <PersonIcon />
//                         </IconButton>
//                         {!isMobile && (
//                             <Box>

//                                 <Button variant="contained"
//                                     sx={{ textTransform: 'none', bgcolor: '#0859F7', ml: 1, fontSize: { md: '9px', lg: '13px', xl: '15px' }, px: 1, borderRadius: '25px' }}>Post A Job</Button>
//                             </Box>
//                         )}
//                     </Box>

//                     {isMobile && (
//                         <IconButton
//                             edge="end"
//                             color="inherit"
//                             aria-label="menu"
//                             onClick={toggleDrawer(true)}
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                     )}

//                     {/* <ThemeToggleButton /> */}
//                 </Toolbar>
//             </AppBar>


//             <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//                 <Box
//                     sx={{ width: '100vw', pt: 10, height: '100vh' }}
//                     role="presentation"
//                     onClick={toggleDrawer(false)}
//                     onKeyDown={toggleDrawer(false)}
//                     backgroundColor='#1d1e21'
//                     color='white'
//                     p={2}
//                 >
//                     <Box display='flex'
//                         flexDirection='column' px={2} >
//                         <Box display={'flex'} justifyContent={'flex-end'}> <ClearIcon onClose={toggleDrawer(false)} /></Box>
//                         {menuItems.map(({ item, path }) => (

//                             item === "Pages" ? (



//                                 <Button
//                                     key={item}
//                                     color="inherit"
//                                     onClick={handlePagesClick}
//                                     sx={{ textTransform: "none", fontSize: "1rem" }}
//                                 >
//                                     {item}
//                                 </Button>
//                             ) : (

//                                 <Button
//                                     key={item}
//                                     color="inherit"

//                                     sx={{ textTransform: "none", fontSize: "1rem" }}
//                                 >
//                                     {item}
//                                     <Divider />
//                                 </Button>

//                             )


//                         ))}


//                         <Menu
//                             anchorEl={anchorEl}
//                             open={Boolean(anchorEl)}
//                             onClose={handlePagesClose}
//                         >
//                             {pagesSubmenuItems.map(({ label, path }) => (
//                                 <MenuItem key={label} onClick={() => handleMenuItemClick(path)}>
//                                     {label}
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                         <Box m={2} width={'100%'}>
//                             <Button variant="contained" color="primary" sx={{ width: '100%', fontSize: "1rem", px: 3, borderRadius: '25px' }}>
//                                 Post A Job
//                             </Button>

//                         </Box>

//                     </Box>
//                 </Box>
//             </Drawer>
//         </>
//     );
// }

// export default NavBar;

