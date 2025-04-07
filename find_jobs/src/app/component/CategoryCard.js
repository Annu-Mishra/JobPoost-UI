import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';

const CategoryCard = ({ icon, title, jobsOpen, onExploreClick }) => {
  return (
    <Card
      sx={{
        p: 2,
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
      }}
    >
      <CardContent>
        <Typography
          component="div"
          sx={{
            border: 'solid',
            borderWidth: '1px',
            display: 'flex',
            borderRadius: '50%',
            height: '50px',
            width: '50px',
            borderColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box component="span">{icon}</Box>
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', pt: 2, width: '17vw' }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: '#777', pt: 2, pb: 3 }}>
          Total {jobsOpen} Jobs Open
        </Typography>
        <Button
          variant="outlined"
          sx={{ borderRadius: '25px', textTransform: 'none' }}
          onClick={onExploreClick}
        >
          {`Explore Jobs >>`}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
