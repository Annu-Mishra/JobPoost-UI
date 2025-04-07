'use client'
import { FilterContainer, JobCard, JobListContainer, OuterBox, TagButton } from '@/app/component/styleWrapper';
import Top from '@/app/component/top'
import { filters, jobs } from '@/app/data/data';
import JobSidebar from '@/app/component/jobSidebar';
import { Avatar, Box, Button, CardContent, Divider, Grid2, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react'

const JobCategory = () => {


    return (
        <>

            <Top title='Accounting' />
            <OuterBox py={'100px'}>
                <FilterContainer>
                    <JobSidebar filters={filters} />
                    <JobListContainer>
                        <Grid2 container spacing={4}>
                            {jobs.map((job) => (

                                <Grid2 item xs={12} sm={12} md={6} lg={12} key={job.id}>
                                    <JobCard>
                                        <CardContent>
                                            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
                                                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                                                    <Avatar src={job.companyLogo} sx={{ width: 80, height: 80 }} />
                                                    <Box>
                                                        <Typography variant="body2">Company Inc</Typography>
                                                        <Typography variant="h6">{job.title}</Typography>
                                                        <Typography variant="body2" color="textSecondary">
                                                            {job.location}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: { xs: 'left', sm: 'center' }, gap: 1, alignItems: 'center', marginTop: 2, }}>
                                                    <Button sx={{ textTransform: 'none', borderRadius: '50px', paddingX: 2 }}>
                                                        Save
                                                    </Button>
                                                    <Button sx={{ textTransform: 'none', borderRadius: '50px', paddingX: 2 }} >
                                                        Apply Now
                                                    </Button>
                                                </Box>
                                            </Box>
                                            <Divider sx={{ marginTop: 2 }} />
                                            <Box mb={1}>
                                                {job.tags.map((tag, index) => (
                                                    <TagButton key={index}>{tag}</TagButton>
                                                ))}
                                            </Box>
                                            <Divider />
                                            <Box display="flex" justifyContent="space-between" sx={{ marginTop: 2, color: 'gray' }} >
                                                <Typography variant="body2">{job.salaryRange}</Typography>
                                                <Typography variant="body2">Deadline: {job.deadline}</Typography>
                                            </Box>
                                        </CardContent>
                                    </JobCard>
                                </Grid2>
                            ))}
                        </Grid2>
                    </JobListContainer>
                </FilterContainer>
            </OuterBox>
        </>
    )
}

export default JobCategory
