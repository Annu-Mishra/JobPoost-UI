'use client'
import React from 'react';
import { Box, Button, Link, Typography, TextField, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { textFieldItem } from '../data/data';
import SearchForm from './searchForm'
import ThemeToggle from './ThemeTongle';

const TextSection = () => {
 
    const [category, setCategory] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <Box>
            <Typography variant="body1" sx={{ fontWeight: 400, color: 'grey', mb: 2 }}>
                We delivered blazing fast work Solution
            </Typography>

            <Typography variant="h3" sx={{ fontWeight: 550, mb: 4, fontSize: { xs: '2rem',sm:'2.5rem', md: '3rem' }, width: { xs: '86vw', sm: '54vw', md: '44vw', lg: '29vw', xl: '22vw' } }}>
                Find & Hire Top 3% of experts on hi'Jobs.
            </Typography>

            <SearchForm />

            <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
                <Typography>Popular:</Typography>
                <Link href='/accounting' >Accounting</Link>, <Link href="/technology">IT & Technology</Link>
            </Box>
        </Box>
    );
};

export default TextSection;
