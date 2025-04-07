// JobCard.js
import React from 'react';
import { Card, CardContent, Box, Avatar, Typography, Divider, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const JobCard = ({ job }) => (
  <Card sx={{ borderRadius: 2, boxShadow: 3,  width: '100%' }}>
    <CardContent>
      <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} textAlign="left">
        <Avatar src={job.logo} sx={{ width: 80, height: 80 }} />
        <Box sx={{ ml: 2, mt: 1 }}>
          <Typography variant="subtitle2" color="#0859F7">{job.company}</Typography>
          <Typography variant="h6" fontWeight="500">{job.title}</Typography>
          <Box display="flex" alignItems="center">
            <LocationOnIcon fontSize="small" color="action" />
            <Typography variant="body2" color="textSecondary">{job.location}</Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ mt: 3 }} />
      <Box mt={2} mb={2} textAlign="left">
        {job.tags.map((tag, index) => (
          <Button key={index} variant="contained" sx={{ textTransform: 'none', mr: 1, mt: 1, borderRadius: '10px', bgcolor: 'lightGrey', color: 'black' }}>
            {tag}
          </Button>
        ))}
      </Box>
      <Divider />
      <Box display="flex" alignItems="center" mt={2} justifyContent={'space-between'}>
        <Box display='flex'>
          <AttachMoneyIcon color="action" />
          <Typography fontSize='12px'>{job.salary}</Typography>
        </Box>
        <Box>
          <Typography fontSize='12px' color="textSecondary" >
            Deadline: {job.deadline}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default JobCard;
