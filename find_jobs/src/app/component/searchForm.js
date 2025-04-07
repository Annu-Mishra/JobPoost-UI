'use client'
import React from 'react';
import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { textFieldItem } from '../data/data';
import { useRouter } from 'next/router';

const SearchForm = ({ onCategoryChange, category }) => {
  // const router = useRouter();

 
  // const handleNavigation = () => {
  //   router.push('/jobs')   
  // };



    return(
  <Box sx={{ display: 'flex',alignItems:'center', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
    <Box textAlign={'left'}>
      <Typography sx={{ color: 'grey', mt: 2, fontSize: '12px', ml: 2 ,mb:1}}>Keywords...</Typography>

      <TextField
        select
        value={category}
        label="Select Title"
        onChange={onCategoryChange}
        sx={{
          // backgroundColor: '#fff',
          width: { xs: '364px', sm: '180px' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
          },
        }}
      >
        {textFieldItem.map((text) => (
          <MenuItem value={text.value}>{text.title}</MenuItem>
        ))}
      </TextField>

    </Box>



    <Box >
      <Typography sx={{ color: 'grey', mt: 2, fontSize: '12px', ml: 2,mb:1 }}>Categories...</Typography>
      <TextField
        label="Select Category"
        select
        value={category}
        onChange={onCategoryChange}
        sx={{
          width: { xs: '364px', sm: '180px' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
          },
        }}
      >
        {textFieldItem.map((text) => {
          <MenuItem value={text.value}>{text.title}</MenuItem>
        })}

      </TextField>
    </Box>

    <Box>
      <Button
        variant="contained"
        color="primary"
        href='/jobs'
        // onClick={() => router.push('/jobs')}
        // onClick={handleNavigation}
        startIcon={<SearchIcon />}
        // href='/jobs'
        sx={{ padding: '10px 30px', backgroundColor: '#0859F7', borderRadius: '25px' }}
      >
        Search
      </Button></Box>
  </Box>
    );
  };

export default SearchForm;

  // const title = "Job Search Page";
    // router.push({
    //   pathname: '/jobs', 
    //   // query: { title },   
    // });
