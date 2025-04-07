'use client'
import { Alert, Box, Button, Grid, Input, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'

function MatchedJobs() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setUploadStatus(`Selected file: ${event.target.files[0]?.name}`);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click(); // Trigger the file input click event
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus("Please select a file to upload.");
            return;
        }

        
        setTimeout(() => {
            setUploadStatus(`Successfully uploaded: ${selectedFile.name}`);
        }, 1000);
    };
    return (
        <>
            <Box sx={{ px: { xs: 2, sm: 4, md: 5, lg: 7, xl: 7 }, py: 10 }}>
                <Box
                    sx={{
                        backgroundColor: '#f5f9ff',
                        borderRadius: '16px',
                        p: { xs: 4, sm: 6, md: 8, lg: 10, xl: 10 },

                        mx: { lg: 'auto' },
                        maxWidth: { lg: '80%', xl: '80%' },
                    }}
                >
                    <Grid container spacing={4} alignItems="center">

                        <Grid item xs={12} md={12} lg={6} xl={6} display="flex" justifyContent="center" sx={{ alignItems: { xs: 'flex-start', md: 'flex-end' }, }}>
                            <Box
                                component="img"
                                src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/cta-two-img.png"
                                alt="Person pointing to the right"
                                sx={{

                                    maxWidth: { xs: '100%', sm: '80%', md: '55%', lg: '100%' },
                                    borderRadius: '16px',
                                    display: 'block',
                                    marginBottom: { xs: 2, xl: 0 }
                                }}
                            />
                        </Grid>


                        <Grid item xs={12} md={12} lg={6} xl={6} display="flex" mt='-2' flexDirection="column" alignItems={{ xs: 'center', md: 'center', lg: 'flex-start' }} justifyContent={{ xs: 'flex-start', md: 'center', lg: 'flex-start' }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 500,
                                    color: '#0a1f44',
                                    mb: 2,
                                    width: { xs: '86vw', md: '37vw', lg: '31vw', xl: '27vw' },
                                    textAlign: { xs: 'center', md: 'center', lg: 'left' },
                                    fontSize: { xs: '2rem', sm: '2rem', md: '2rem', lg: '3.7rem', xl: '4rem' },
                                }}
                            >
                                Get Your Matched Jobs in a Few Minutes
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#697a90',
                                    mb: 4,
                                    textAlign: { xs: 'center', md: 'left' },
                                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem', lg: '1.2rem', xl: '1.3rem' },
                                }}
                            >
                                Find your dream job & earn from world leading brands. Upload your CV now!
                            </Typography>
                            <Box display="flex" justifyContent={{ xs: 'center', md: 'center', lg: 'flex-start' }}>

                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    // href='/'
                                    onClick={handleButtonClick}

                                    sx={{
                                        backgroundColor: '#0052cc',
                                        color: 'white',
                                        px: { xs: 3, sm: 4, md: 5, lg: 6 },
                                        py: 1.5,
                                        borderRadius: '25px',
                                        textTransform: 'none',
                                        fontSize: { xs: '0.9rem', sm: '1rem', lg: '1.1rem' },
                                        '&:hover': {
                                            backgroundColor: '#003da5',
                                        },
                                    }}
                                >
                                    Upload Your CV &nbsp; &gt;&gt;
                                </Button>
                                {uploadStatus && (
                                    <Alert severity="info" sx={{ mt: 2 }}>
                                        {uploadStatus}
                                    </Alert>
                                )}

                            </Box>
                        </Grid>
                    </Grid>
                </Box >
            </Box >



            <Box
                sx={{
                    display: 'flex', widh: '100%',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexWrap: { xs: 'wrap', md: 'wrap', lg: 'nowrap' },
                    gap: 2,

                    // mt: { xs: 3, lg: 3 },
                    // width: '83%',
                    px: { xs: 4, sm: 6, md: 12, lg: 14, xl: 18 },
                }
                }
            >

                <Box
                    sx={{
                        flex: 1,
                        textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'left' },
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 400,
                            color: '#0a1f44',
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '2.5rem', xl: '3rem' },
                            mb: 1,
                        }}
                    >
                        Most complete job portal.
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: '#697a90',
                            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                            mb: 2,
                        }}
                    >
                        Signup and start find your job or talent.
                    </Typography>
                </Box>


                <Box
                    sx={{
                        display: 'flex',
                        mt: { xs: 2, sm: 2 },
                        gap: 2,
                        flexWrap: { xs: 'nowrap', md: 'nowrap' },
                    }}
                >

                    <Button
                        variant="outlined"
                        onClick={scrollToTop}
                        sx={{
                            px: 1,
                            py: 1,
                            minWidth: '150px',
                            borderColor: '#0a1f44',
                            color: '#0a1f44',
                            borderRadius: '25px',
                            textTransform: 'none',
                            fontWeight: 500,
                            '&:hover': {
                                backgroundColor: 'rgba(10, 31, 68, 0.1)',
                                borderColor: '#0a1f44',
                            },
                        }}
                    >
                        Looking For Job? &nbsp; &gt;&gt;
                    </Button>

                    <Button
                        variant="contained"
                        // onClick={scrollToTop}
                        href='/registration'
                        sx={{
                            px: 3,
                            // py: 1,
                            minWidth: '150px',
                            backgroundColor: '#0052cc',
                            color: 'white',
                            borderRadius: '25px',
                            textTransform: 'none',
                            fontWeight: 500,
                            '&:hover': {
                                backgroundColor: '#003da5',
                            },
                        }}
                    >
                        Post A Job &nbsp; &gt;&gt;
                    </Button>
                </Box>

            </Box >



            < Box
                sx={{
                    mt: { xs: 4, md: 6, lg: 6, xl: 6 },
                    mx: { xs: 4, sm: 6, md: 7, lg: 14, xl: 18 },
                    width: { md: '91%', lg: '84%', xl: '84%' },
                    borderBottom: '10px solid #e0e0e0',
                }}
            />
        </>
    )
}

export default MatchedJobs