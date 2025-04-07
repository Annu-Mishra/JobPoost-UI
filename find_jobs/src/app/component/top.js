'use client'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Top = ( props ) => {
    return (
        <>
            <Box sx={{ backgroundImage: 'url(https://hijobs.e-plugins.com/wp-content/uploads/2023/06/page-banner.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', height: { xs: '235px', sm: '300px' }, mt: 13, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box color='white' sx={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
                    <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem'} }}>{props.title}</Typography>
                    <Typography color='white'>Hi Jobs // {props.title}</Typography>
                </Box>
            </Box>
        </>
    )
}

export default Top
