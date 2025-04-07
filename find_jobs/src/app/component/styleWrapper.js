// NavBarStyles.ts (or .js)
import styled from "@emotion/styled";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Card, Dialog, Divider, Fab, IconButton, ListItem, Paper, Select } from "@mui/material";
import { Pagination, Autoplay } from 'swiper/modules';
import { AppBar, Toolbar, Button, Box, Grid, Typography, TextField } from '@mui/material';
import Link from "next/link";



export const TopAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: 1300,
  backgroundColor: '#262626',
}));

export const TopToolbar = styled(Toolbar)(({ theme }) => ({
  height: '54px',
  display: 'flex',
  justifyContent: 'space-between',
  color: 'white',
}));

export const BuyButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#8cc751',
  color: 'white',
  marginLeft: 'auto',
  textTransform: 'none',
}));

// Custom AppBar styling
export const CustomAppBar = styled(AppBar)(({ theme }) => ({

  //  backgroundColor:

  position: 'fixed',
  zIndex: theme.zIndex.drawer + 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  px: { xs: 0, md: 3, lg: 4, xl: 34 },
}));

// Custom Toolbar styling
export const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  maxWidth: '1200px',
  width: '100%',
  height: '80px',
  [theme.breakpoints.down('sm')]: {
    height: '80px',

  },
}));



// Custom Button styling
export const CustomButton = styled(Button)(({ theme }) => ({

  textTransform: 'none',
  borderRadius: '25px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0859F7' : 'white', // Background for dark/light modes
  color: theme.palette.mode === 'dark' ? 'white' : 'black',



  fontSize: "1rem"
  // '&:hover': {
  //   backgroundColor: theme.palette.secondary.dark,
  // },
}));

// Custom Box for Navigation Items
export const NavItemsBox = styled(Box)(({ theme }) => ({
  display: 'flex',

  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },


}));



// Custom AppBar Style
export const customAppBarStyle = styled(Box)(({ theme }) => ({

  position: 'fixed',
  zIndex: 1300,
  top: '54px',
}));

// Custom Toolbar Style
export const customToolbarStyle = styled(Box)(({ theme }) => ({
  // bgcolor: "#262626",
  // color: "white",
  height: "54px",
}));

// Custom Button Style (for both AppBar and Drawer)
export const customButtonStyle = styled(Box)(({ theme }) => ({
  textTransform: "none",
  fontSize: "1rem",
  color: "inherit",
  mb: 1,
}));

// Drawer Style
export const drawerBoxStyle = styled(Box)(({ theme }) => ({
  width: '100vw',
  pt: 10,
  height: '100vh',
  backgroundColor: '#1d1e21',
  color: 'white',
  p: 2
}));

// Drawer Close Icon Style
export const closeIconStyle = styled(Box)(({ theme }) => ({
  justifyContent: 'flex-end',
}));

// NavItem Box Style (for Nav Items Container)
export const navItemsBoxStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: 'center',
  alignItems: "center",
  gap: 3,
  marginLeft: "auto",
}));



export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0b1c39',
  color: '#ffffff',

  paddingTop: '10rem',
  paddingBottom: '2rem',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '1rem',
    paddingTop: '5rem',
  },
}));

export const FooterGrid = styled(Grid)(({ theme }) => ({
  textAlign: 'left',
  fontFamily: 'sans-serif',
  [theme.breakpoints.down('sm')]: {
    textAlign: 'center',
  },
}));

export const FooterItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    marginBottom: '2rem',
  },
}));

export const FooterLogo = styled('img')(() => ({
  maxWidth: '160px',
}));

export const FooterDescription = styled(Typography)(({ theme }) => ({
  textAlign: 'left',
  color: 'white',
  fontSize: '13px',
  marginTop: '3rem',
  width: '10vw',
  lineHeight: 2,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center',
  },
}));

export const FooterSocialIcons = styled(Box)(() => ({
  marginTop: '1rem',
  '& .MuiIconButton-root': {
    color: 'inherit',
  },
}));

export const FooterQuickLinks = styled(Box)(({ theme }) => ({
  marginTop: '5rem',
  '& ul': {
    listStyleType: 'none',
    padding: 0,
    fontSize: '13px',
    lineHeight: 2.5,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '0',
    },
  },
}));

export const FooterInput = styled(TextField)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '30px',
  marginRight: '1rem',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginRight: '0',
  },
}));

export const FooterButton = styled(Button)(() => ({
  backgroundColor: '#007bff',
  color: '#fff',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  padding: '10px 16px',
  borderRadius: '30px',
  marginTop: '2rem',
}));

export const OuterBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',



}))

export const OuterBox2 = styled(Box)(() => ({
  margin: 'auto',
  width:'100%',
  maxWidth: '1200px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
}))

export const HeaderBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: '90px',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

// Job Title styling
export const JobTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 550,
  fontSize: '44px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
  },
}));

// Job Subtitle styling
export const JobSubtitle = styled(Typography)(({ theme }) => ({
  color: 'grey',
  fontSize: '13px',
}));

// Main Button styling
export const MainButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  textTransform: 'none',
  // margingTop:2,
  marginLeft: 'auto',
  padding: theme.spacing(1, 2),
}));

// Category Button styling
export const CategoryButton = styled(Button)(({ theme, isSelected }) => ({

  width: '100%',

  textTransform: 'none',
  border: '1px solid',
  borderColor: isSelected ? 'purple' : '#ddd',
  color: isSelected ? 'purple' : 'inherit',
  fontWeight: isSelected ? 'bold' : 'normal',
  fontSize: '12px'

}));

// Job Box Container styling
export const JobBoxContainer = styled(Grid)(({ theme }) => ({

  paddingTop: theme.spacing(6),
  width: '100%',
  display: 'flex'

}));

// Call to Action Box styling
export const CallToActionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  width: '100%'
}));

export const CallToActionContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: 'solid 1px',
  borderRadius: '20px',
  padding: theme.spacing(1),
}));

export const RootBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(23),
  paddingLeft: theme.spacing(2),
  minHeight: '60vh',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));


export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '0 auto',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const LargeImage = styled(Box)(({ theme }) => ({
  maxWidth: '86%',
  width: '100%',
  height: 'auto',
  borderTopLeftRadius: '20%',
  borderTopRightRadius: '89px',
  zIndex: 2,

}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  borderRadius: '50%',
  position: 'absolute',
  bottom: 30,
  right: 25,
  border: '10px solid white',
  boxShadow: theme.shadows[3],
  [theme.breakpoints.up('sm')]: {
    width: 170,
    height: 170,
    bottom: 80,
    right: 126,
  },
  [theme.breakpoints.up('md')]: {
    width: 190,
    height: 190,
    bottom: 50,
    right: -67,
  },
  [theme.breakpoints.up('lg')]: {
    width: 177,
    height: 177,
    right: -48,
  },
  [theme.breakpoints.up('xl')]: {
    right: 39,
  },
}));

export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 500,
  color: '#0000FF',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
}));

export const MainHeading = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
  fontSize: '1.5rem',
  width: '94vw',
  fontWeight: 600,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {

    width: '47vw',
  },
  [theme.breakpoints.up('lg')]: {

    width: '39vw',
  },
  [theme.breakpoints.up('xl')]: {

    width: '31vw',
  },
}));

export const SubText = styled(Typography)(({ theme }) => ({
  color: 'grey',
  marginTop: theme.spacing(4),
  fontSize: '0.9rem',
  fontFamily: 'sans-serif',
  [theme.breakpoints.up('xs')]: {
    width: '91vw',
  },
  [theme.breakpoints.up('sm')]: {
    width: '96vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '44vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '38vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '31vw',
  },
}));

export const ButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  alignItems: 'center',
  justifyContent: 'flex-start',
}));

export const FeatureBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: theme.spacing(2),
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  textTransform: 'none',
}));

export const StatsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#0859F7',
  color: 'white',
  textAlign: 'center',
  padding: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(6),
  },
}));

export const ContainerStyle = styled(Box)(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  flexWrap: 'wrap',
  [theme.breakpoints.up('sm')]: {
    flexWrap: 'nowrap'
  },
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
}));

export const StatBox = styled(Box)(({ theme }) => ({
  // padding: theme.spacing(4),
  flex: '1 1 50%',
  maxWidth: '47%',
  textAlign: 'center',
  padding: '16px',
  [theme.breakpoints.up('md')]: {
    flex: '1 1 25%',
    maxWidth: '21%',
  },
}));

export const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3.5rem',
  },
}));

export const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
}));

export const HeaderBox2 = styled(Box)(({ theme }) => ({
  textAlign: 'center'
}))

export const ProcessBox = styled(Box)(({ theme }) => ({
  paddingX: theme.breakpoints.down('lg') ? '10.5rem' : '19rem',
  textAlign: 'center',
  position: 'relative',
  paddingTop: '2.5rem',

}));

export const Line = styled(Box)(({ theme }) => ({
  height: '2px',
  backgroundColor: '#6200ff',
  position: 'absolute',
  top: '79px',
  left: theme.breakpoints.up('md') ? '14%' : '22%',
  right: theme.breakpoints.up('md') ? '14%' : '22%',
  zIndex: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StepBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StepCircle = styled(Box)({
  width: 80,
  height: 80,
  backgroundColor: '#D2E4F9',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,
});

export const StepTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: 16,
  marginTop: theme.spacing(3),
  width: theme.breakpoints.down('md') ? '38vw' : '22vw',
}));

export const StepDescription = styled(Typography)(({ theme }) => ({
  color: '#666',
  marginTop: theme.spacing(1),
  width: '50vw',
  [theme.breakpoints.up('sm')]: {
    width: '30vw'
  },
  [theme.breakpoints.up('md')]: {
    width: '20vw'
  },
  [theme.breakpoints.up('lg')]: {
    width: '14vw'
  },
  [theme.breakpoints.up('xl')]: {
    width: '12vw'
  },
}));

import { useTheme } from '@mui/material/styles';
import { CardContent } from "@mui/material";
import { Grid2 } from "@mui/material";

export const StyledBox = ({ children }) => {
  const theme = useTheme();

  const styles = {
    backgroundImage: `url(https://hijobs.e-plugins.com/wp-content/uploads/2023/06/cta-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#000',
    height: { xs: '250px', sm: '213px', md: '160px', lg: '150px' },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: { md: '12px', lg: '40px' },
    py: '95px',
  };

  return <Box sx={styles}>{children}</Box>;
};

export const StyledTypographyH4 = ({ children }) => {
  const theme = useTheme();

  const styles = {
    color: '#fff',
    fontWeight: '400',
    fontSize: { xs: '24px', sm: '30px', md: '30px', lg: '33px', xl: '33px' },
    textAlign: { xs: 'center', md: 'left' },
  };

  return <Typography variant="h4" sx={styles}>{children}</Typography>;
};

export const StyledTypographyBody1 = ({ children }) => {
  const theme = useTheme();

  const styles = {
    color: '#ddd',
    width: { xs: '79vw', sm: '73vw', md: '49vw' },
    mb: 4,
    fontSize: { xs: '14px', md: '13px', lg: '14px', xl: '14px' },
    textAlign: { xs: 'center', md: 'left' },
  };

  return <Typography variant="body1" sx={styles}>{children}</Typography>;
};

export const StyledButton2 = ({ onClick, children }) => {
  const theme = useTheme();

  const styles = {
    color: '#fff',
    borderColor: '#fff',
    padding: { xs: '8px 16px', md: '10px 20px' },
    borderRadius: '25px',
    fontSize: { xs: '16px', md: '18px' },
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: '#fff',
    },
  };

  return (
    <Button variant="outlined" onClick={onClick} sx={styles}>
      {children}
    </Button>
  );
};

export const StyledGrid = ({ children }) => {
  const theme = useTheme();

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: { sm: 'column', md: 'row' },
  };

  return <Grid container sx={styles}>{children}</Grid>;
};

export const ContainerBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 1.25),
  display: 'flex',
  flexWrap: theme.breakpoints.values.xs ? 'wrap' : 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'

}));

export const StyledImage = styled(Box)(({ theme }) => ({
  // maxWidth:'30vw',
  width: '100%',
  borderRadius: theme.shape.borderRadius,
  height: 'auto',
}));

export const OverlayPaper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  bottom: 25,
  left: theme.breakpoints.values.xs ? 24 : 11,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  backgroundColor: '#fff',
}));

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.mode === 'dark' ? '#F5F6F8' : '#FFFFFF',

}));

export const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({

  color: '#000000', // Enforce black text color
  '& .MuiTypography-root': {
    color: '#000000', // Ensure Typography inside stays black
  },
  '&:hover': {
    backgroundColor: '#0859F7',
    color: 'white',
  },
}));

export const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  '& .MuiTypography-root': {
    color: '#000000',
  },
}));

// Styled outer Box
export const VideoSectionContainer = styled(Box)(({ theme }) => ({
  padding: '20px',
}));

// Styled Box for background image
export const VideoBackgroundBox = styled(Box)(({ theme }) => ({
  margin: 'auto',
  maxWidth: '64%',
  [theme.breakpoints.down('md')]: {
    width: '100%'
  },
  backgroundImage: 'url(https://hijobs.e-plugins.com/wp-content/uploads/2023/06/video-bg.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '59vh',
  [theme.breakpoints.down('sm')]: {
    height: '34vh'
  },
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
}));

// Styled IconButton
export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
}));

// Styled Dialog
export const StyledDialog = styled(Dialog)(() => ({
  '.MuiDialog-paper': {
    width: '100%',
    maxWidth: 'md',
  },
}));

// Styled video component
export const StyledVideo = styled(Box)(() => ({
  width: '100%',
  height: 'auto',
}));



// Outer container for the section
export const SwiperSectionContainer = styled(Box)(({ theme }) => ({
  // padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'

}));

// Title container
export const SectionTitleContainer = styled(Box)(({ theme }) => ({
  // maxWidth: 1020,
  margin: 'auto',
  textAlign: 'left',
  padding: theme.spacing(5, 0),
}));

// Main section title
// export const SectionTitle = styled(Typography)(({ theme }) => ({
//   color: '#0F2239',
//   fontWeight: 500,
//   fontSize: theme.breakpoints.down('sm') ? '24px' : '37px',
// }));

// Card container
export const MemberCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(2),
  width: '15vw',
  [theme.breakpoints.down('lg')]: {
    width: '19vw'
  },
  [theme.breakpoints.down('lg')]: {
    width: '19vw'
  },
  // margin: 'auto',
  borderRadius: '10px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  position: 'relative',
}));

// Fab container for icons
export const FabIconsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.breakpoints.down('md') ? 160 : 200,
  right: 15,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

// Single Fab button
export const StyledFab = styled(Fab)(({ theme }) => ({
  backgroundColor: '#0859F7',
  color: 'white',
  '&:hover': {
    backgroundColor: '#064cb5',
  },
}));

export const swiperConfig = {
  modules: [Pagination],
  pagination: {
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  spaceBetween: 30,
  slidesPerView: 4,
  speed: 700,
  breakpoints: {
    300: { slidesPerView: 1 },
    700: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  },
};

export const TestimonialContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5, 0),
  textAlign: 'center',
}));


export const Heading = styled(Typography)(({ theme }) => ({
  // color: '#0F2239',
  fontWeight: 500,
  fontSize: '24px',
  [theme.breakpoints.up('sm')]: {
    fontSize: '37px',
  },
}));

export const FeedbackCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  margin: 'auto',
  padding: theme.spacing(3),
  borderRadius: '10px',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  width: '87vw',
  [theme.breakpoints.up('sm')]: {
    width: '65vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '42vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '30vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '26vw',
  },
}));

export const FeedbackQuote = styled(Typography)(({ theme }) => ({
  fontFamily: 'sans-serif',
  fontSize: '0.8rem',
  marginBottom: theme.spacing(3),
  textAlign: 'left',
  width: '73vw',
  [theme.breakpoints.up('sm')]: {
    width: '60vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '37vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '28vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '24vw',
  },
}));


export const FilterContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',

  margin: 'auto',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

export const Sidebar = styled(Box)(({ theme }) => ({

  padding: '20px',
  backgroundColor: theme.palette.mode === 'dark' ? '#757575' : 'white', // Background for dark/light modes
  color: theme.palette.mode === 'dark' ? 'white' : 'black',

}));

export const FilterGroup = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    width: '43vw'
  },
  [theme.breakpoints.up('lg')]: {
    width: '22vw'
  },
  [theme.breakpoints.up('xl')]: {
    width: '16vw'
  }
  // width: '100%',
}));

export const FilterButton = styled(Button)({
  width: '100%',
  textTransform: 'none',
  borderRadius: '50px',
});

export const JobListContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '89vw'
  },

  [theme.breakpoints.up('md')]: {
    paddingLeft: '15px',
    paddingRight: '15px',
  },
}));

export const JobCard = styled(Card)(({ theme }) => ({
  // width: { xs: '86vw', sm: '95vw', md: '56vw', lg: '52vw', xl: '40vw' } }}
  width: '89vw',
  // margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: '97vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '64vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '53vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '40vw',
  },
}));

export const TagButton = styled(Button)({
  fontSize: '10px',
  marginRight: '8px',
  marginTop: '8px',
  borderRadius: '10px',
  textTransform: 'none',
  backgroundColor: 'lightGrey',
  color: 'black',
});

export const MainContainer = styled(Box)({
  paddingTop: '90px',
  paddingBottom: '90px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '24px',
  paddingRight: '24px',
});

export const ContentContainer = styled(Box)({
  margin: 'auto',
  padding: '16px',
  maxWidth: '1200px',
  width: '100%'
});

export const LeftBlogCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  // width: '92vw',
  [theme.breakpoints.up('sm')]: {
    width: '88vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '51vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '44vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '37vw',
  },
}));

export const BlogCardImage = styled(Box)(({ theme }) => ({
  height: '280px',
  [theme.breakpoints.up('sm')]: {
    height: '230px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '320px',
  },
}));

export const SidebarContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const RecentPostItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const Tag = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.grey[200],
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.8em',
}));

export const StyledBox2 = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(13)} 0`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledGridContainer = styled(Grid2)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  // justifyContent: theme.breakpoints.up('xs') ? 'left' : 'center',
  margin: '0 auto',
}));

export const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.spacing(2),
  paddingTop: theme.spacing(1),
  width: '90vw',
  [theme.breakpoints.up('sm')]: { width: '45vw' },
  [theme.breakpoints.up('md')]: { width: '29vw' },
  [theme.breakpoints.up('lg')]: { width: '22vw' },
  [theme.breakpoints.up('xl')]: { width: '17vw' },
}));

export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledIconBox = styled(Box)(({ theme }) => ({
  width: 78,
  height: 78,
  backgroundColor: '#e6eefd',
  color: '#0859F7',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  textAlign: 'center',
}));

export const StyledTypographyDetails = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


// Styled Components
export const OuterBox3 = styled(Box)(({ theme }) => ({
  paddingBottom: theme.spacing(13),
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const InnerBox = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  padding: `${theme.spacing(3.75)} ${theme.spacing(1.25)}`,
  background: '#e0e6f7',
  borderRadius: theme.spacing(1.25),
}));

export const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.625),
  [theme.breakpoints.up('sm')]: { padding: theme.spacing(7.25) },
  textAlign: 'center',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  color: '#0859F7',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(22),
  },
}));

export const TitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(22),
  fontWeight: 500,
  color: '#0F2239',
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(41),
  },
  width: '74vw',
  [theme.breakpoints.up('lg')]: {
    width: '60vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '42vw',
  },
}));

export const FormBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: '81vw',
  [theme.breakpoints.up('sm')]: {
    width: '74vw',
  },
  [theme.breakpoints.up('md')]: {
    width: '78vw',
  },
  [theme.breakpoints.up('lg')]: {
    width: '60vw',
  },
  [theme.breakpoints.up('xl')]: {
    width: '46vw',
  },
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: '25px',
  backgroundColor: 'white',
  borderColor: '#0859F7',
  color: 'grey',
  [theme.breakpoints.down('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '50%',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },

  },

  '& .MuiInputBase-input::placeholder': {
    color: 'black',
    opacity: 1
  },
  backgroundColor: 'white',

}));

export const MessageTextField = styled(TextField)(({ theme }) => ({
  borderRadius: '15px',
  backgroundColor: 'white',
  width: '100%',
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'black',
    opacity: 1
  },
}));


// Main Form Container
export const FormContainer = styled(Box)({
  marginTop: '100px',
  marginBottom: '100px',
  padding: '24px',

  maxWidth: '1000px',
  width: '100%',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  '@media (max-width: 1200px)': {
    width: '82%',
  },
  '@media (max-width: 600px)': {
    width: '80%',
  },
});

// Section Divider
export const SectionDivider = styled(Divider)({
  marginTop: '16px',
  marginBottom: '16px',
});

// Form Group
export const FormGroup = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

// Form Field
export const FormField = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '16px',
  '@media (max-width: 600px)': {
    flexDirection: 'column',
  },
});

// Form Label
export const FormLabel = styled(Typography)({
  width: '20%',
  marginTop: '8px',
  '@media (max-width: 600px)': {
    width: '100%',
    textAlign: 'left',
  },
});

// Styled Select
export const StyledSelect = styled(Select)({
  borderRadius: '25px',
  backgroundColor: '#f5f5f5',
  height: '40px',
});

// Styled TextField
export const StyledTextField2 = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '25px',
    backgroundColor: '#f5f5f5',
  },
});

// File Button
export const FileButton = styled(Button)({
  textTransform: 'none',
  color: 'black',
  borderColor: 'black',
  backgroundColor: '#f5f5f5',
});


// Main Container
export const SignInContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '115px',
  marginBottom: '115px',
  width: '100%',
});

// Inner Box
export const InnerBox2 = styled(Box)({
  margin: 'auto',
  borderRadius: '10px',
  width: '53vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@media (max-width: 600px)': {
    width: '85vw',
  },
});

// Styled Paper
export const StyledPaper = styled(Paper)(({ theme }) => ({
  paddingTop: '25px',
  width: '25vw',
  textAlign: 'center',
  [theme.breakpoints.down('lg')]: {
    width: '34vw',
  },
  [theme.breakpoints.down('md')]: {
    width: '43vw',
  },
  [theme.breakpoints.down('sm')]: {
    width: '87vw',
  },
}));

// Form Box
export const FormBox2 = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  margin: '0 21px',
  marginTop: '24px',
});

// Styled TextField
export const StyledTextField3 = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '25px',
    height: '38px',
    backgroundColor: '#F2F2F2',
  },
});

export const FooterBox = styled(Box)({
  marginTop: '20px',
  padding: '16px 0',
  backgroundColor: '#0859F7',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
});


export const ContainerBox2 = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 5),
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(12),
  },
}));


export const LeftColumn = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  maxWidth: '800px'
}));

export const SectionTitle2 = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(2),
}));

export const Text = styled(Typography)(({ theme }) => ({
  lineHeight: 1.8,
  fontSize: '11px',
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
}));

export const StyledCard2 = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  padding: theme.spacing(2),
}));

export const VideoWrapper = styled(Box)(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '15px',
  height: '31vh',
  [theme.breakpoints.up('sm')]: {
    height: '55vh',
  },
  [theme.breakpoints.up('xl')]: {
    height: '72vh',
  },
}));


export const AvatarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const SocialIcons = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: '#0859F7',
}));

export const CompanyName = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: theme.palette.grey[600],
}));

export const RoleTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  marginBottom: theme.spacing(1),
}));

export const RoleDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

export const Sidebar2 = styled(Card)(({ theme }) => ({
  // backgroundColor: '#F2F2F2',
  backgroundColor: theme.palette.mode === 'dark' ? 'dark' : '#F2F2F2',
  padding: theme.spacing(2),
  textAlign: 'center',
  // maxWidth:'280px',
  flexShrink: 0,
  width: '100%',
  maxWidth: '280px',
  // [theme.breakpoints.up('sm')]:{maxWidth:'280'},
  [theme.breakpoints.down('sm')]: { maxWidth: '368px' }
}));

export const DirectoryMainCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  boxShadow: theme.shadows[3],
  width: '100%',
  maxWidth: '280px', // Limits width for better consistency
  margin: 'auto',
}));

export const DirectoryAvatar = styled(Avatar)(({ theme }) => ({
  width: 70,
  height: 70,
  marginBottom: theme.spacing(1),
}));








