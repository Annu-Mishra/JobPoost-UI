import React from 'react'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import HelpIcon from '@mui/icons-material/Help';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid2, Link, Typography } from '@mui/material';
import InsightsIcon from '@mui/icons-material/Insights';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LayersIcon from '@mui/icons-material/Layers';
import StorageIcon from '@mui/icons-material/Storage';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AnimationIcon from '@mui/icons-material/Animation';
import HeadsetIcon from '@mui/icons-material/Headset';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocationOnIcon from '@mui/icons-material/LocationOn';



import { useTheme } from '@emotion/react';
import Proces from '@/app/component/process';
import { buttons, jobData } from '@/app/data/data';
import { OuterMost } from '@/app/components/styleWrapper';

function Process() {


    const [selectedCategory, setSelectedCategory] = React.useState('Accounting');

    const handleClick = (label) => {
        setSelectedCategory(label);
    };


    const theme = useTheme();

    return (
        <>
            <Box sx={{
                backgroundColor: (theme) => theme.palette.background.default,
                color: theme.palette.text.primary,
            }}>
                {/* <Proces /> */}

                <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', pt: '90px', px: '20px' }} >

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row' }, justifyContent: 'space-between' }}>
                        <Box>
                            <Typography sx={{ fontWeight: '550', fontSize: '44px' }}>Jobs of the day</Typography>
                            <Typography sx={{ color: 'grey', fontSize: '13px' }}>Find your favourite jobs and get the benefits of yourself</Typography>
                        </Box>
                        <Box sx={{ py: 2.5, dispaly: 'flex', mr: 10 }}>
                            <Button variant='contained' sx={{ borderRadius: '25px', textTransform: 'none', py: 1, px: 2 }}>{`See More Jobs >>`}</Button>
                        </Box>

                    </Box>

                    <Grid2 container spacing={2} pt={6}>
                        {buttons.map((category) => (
                            <Grid2 item xs={6} sm={4} md={3} lg={2} key={category.label}>
                                <Button
                                    sx={{
                                        width: '100%',
                                        textTransform: 'none',
                                        border: '1px solid',
                                        borderColor: selectedCategory === category.label ? 'purple' : '#ddd',
                                        color: selectedCategory === category.label ? 'purple' : 'inherit',
                                        fontWeight: selectedCategory === category.label ? 'bold' : 'normal',
                                        padding: '10px 20px',
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                        },
                                    }}
                                    startIcon={category.icon}
                                    onClick={() => handleClick(category.label)}
                                >
                                    {category.label}
                                </Button>
                            </Grid2>
                        ))}
                    </Grid2>



                    <Grid2 container spacing={4} sx={{ pt: 5, width: { xs: '98%', sm: '98%', md: '94%', xl: '85%' } }} >
                        {
                            jobData.map((job, index) => (
                                <Grid2 item size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }} key={index}>

                                    <Card sx={{ borderRadius: 2, boxShadow: 3, p: 2 }}>
                                        <CardContent>
                                            <Box display="flex" flexDirection={{ xs: 'column', sm: 'column', md: 'row' }} textAlign='left' justifyContent='left' >

                                                <Avatar
                                                    src={job.logo}
                                                    sx={{ width: 80, height: 80 }}
                                                />
                                                <Box sx={{ ml: 2, textalign: 'left', mt: 1 }}>
                                                    <Typography variant="subtitle2" color="primary">
                                                        {job.company}
                                                    </Typography>


                                                    <Typography variant="h6" fontWeight="500">
                                                        {job.title}
                                                    </Typography>


                                                    <Box display="flex" alignItems="center" >
                                                        <LocationOnIcon fontSize="small" color="action" />
                                                        <Typography variant="body2" color="textSecondary">
                                                            {job.location}
                                                        </Typography>
                                                    </Box>
                                                </Box>

                                            </Box>

                                            <Divider sx={{ mt: 3 }} />

                                            <Box mt={2} mb={2} textAlign='left'>

                                                {job.tags.map((tag, index) => (
                                                    <Button key={index} variant="contained" sx={{ mr: 1, mt: 1, borderRadius: '10px', textTransform: 'none', bgcolor: 'lightGrey', color: 'black' }} >{tag}</Button>
                                                ))}
                                            </Box>
                                            <Divider />

                                            <Box display="flex" alignItems="center" mt={2}>
                                                <AttachMoneyIcon color="action" />
                                                <Typography variant="body2">{job.salary}</Typography>

                                                <Typography variant="body2" color="textSecondary" sx={{ ml: 'auto' }}>
                                                    Deadline: {job.deadline}
                                                </Typography>

                                            </Box>

                                        </CardContent>
                                    </Card>
                                </Grid2>
                            ))
                        }


                    </Grid2>
                    <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
                        <Box sx={{ border: 'solid', borderRadius: '20px', borderWidth: '1px', width: { xs: '85vw', sm: '65vw', md: '50vw', lg: '36vw', xl: '28vw' }, display: 'flex', p: 1 }}>
                            <Typography sx={{ ml: 2 }}>Do you want to post job for your company ?</Typography>
                            <Typography><Link onClick={scrollToTop} sx={{ color: '#6200ff' }}>We can help. click here</Link></Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Process
