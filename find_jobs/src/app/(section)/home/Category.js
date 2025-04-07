'use client';
import { Box, Button, Card, CardContent, Grid, Grid2, Typography } from "@mui/material";

import { ButtonGroup, Container, FeatureBox, HeaderBox, JobBoxContainer, LargeImage, MainHeading, OuterBox, OuterBox2, SectionTitle, StyledAvatar, StyledButton, SubText } from "@/app/component/styleWrapper"
import Link from "next/link";
import CategoryCard from "@/app/component/CategoryCard";
import { CheckCircle } from "@mui/icons-material";


export default function Category({ categories }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    };
    return (
        <>
            {/* <Box sx={{ backgroundColor: '#f4f6fc', px: { xs: '2vw', sm: '4vw', md: '8vw', lg: '11vw', xl: '15vw' }, py: '8vw' }}> */}
            <OuterBox>
                <OuterBox2 padding={'10px'}>
                    <HeaderBox >
                        <Typography sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: '500', textAlign: 'left', mb: 5 }}>Most demanding categories</Typography>
                        <Typography sx={{ fontSize: { sm: '1rem', md: '1rem' } }}> <Link href='#' onClick={scrollToTop} style={{ color: '#0859F7', textDecoration: 'underline' }}>{'Explore All Fields >> '}</Link></Typography>
                    </HeaderBox>

                    <JobBoxContainer container spacing={2} width={'100%'} >
                        {categories.map((category, index) => (
                            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
                                <CategoryCard
                                    icon={category.icon}
                                    title={category.title}
                                    jobsOpen={category.jobsOpen}
                                    onClick={(scrollToTop) => console.log(`Exploring jobs for ${category.title}`)}
                                />
                            </Grid>

                        ))}
                    </JobBoxContainer>

                </OuterBox2>
            </OuterBox>

            <OuterBox py={'100px'} px={'20px'}>
                <OuterBox2>
                    <Container>
                        <Box sx={{ position: 'relative' }}>
                            <LargeImage component="img" alt="Large" src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/image-1.jpg" />
                            <StyledAvatar alt="Small" src="https://hijobs.e-plugins.com/wp-content/uploads/2023/06/image-1.jpg" />
                        </Box>
                        <Box>
                            <SectionTitle mt={3}>MORE ABOUT OUR COMPANY</SectionTitle>
                            <MainHeading>World's of talent at your fingertips</MainHeading>
                            <SubText>
                                Synergistically visualize alternative content before cross-functional core. Rapidly
                                administer standardized value via focused benefits. Rapidly redefine highly efficient
                                niche markets with plug-and-play materials professionally.
                            </SubText>
                            <Box display='flex' flexWrap={'wrap'}>
                                {[
                                    { title: 'Perfect Search Lists', description: 'Seamlessly envisioneer tactical data through services.' },
                                    { title: 'Expert Employees', description: 'Seamlessly envisioneer tactical data through services.' },
                                ].map((feature, index) => (
                                    <FeatureBox key={index}>
                                        <CheckCircle sx={{ color: '#0859F7', marginRight: 1, fontSize: '1.9rem' }} />
                                        <Box>
                                            <Typography variant="h6">{feature.title}</Typography>
                                            <Typography variant="body2" sx={{ color: 'grey', width: { md: '20vw', lg: '15vw' } }}>
                                                {feature.description}
                                            </Typography>
                                        </Box>
                                    </FeatureBox>
                                ))}
                            </Box>
                            <ButtonGroup>
                                <StyledButton onClick={scrollToTop} >{`Click Here >>`}</StyledButton>
                                <StyledButton onClick={scrollToTop}> {`Click Here >>`} </StyledButton>
                            </ButtonGroup>
                        </Box>
                    </Container>
                </OuterBox2>


            </OuterBox>
        </>
    )
}


