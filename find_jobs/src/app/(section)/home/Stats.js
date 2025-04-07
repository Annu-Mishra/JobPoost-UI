'use client'
import React from 'react';
import { ContainerStyle, StatBox, StatLabel, StatValue, StatsContainer } from '@/app/component/styleWrapper';
import { Box, Grid } from '@mui/material';


const StatsSection = ({ stats }) => {
    return (
        <StatsContainer>
            <ContainerStyle >
                {stats.map((stat, index) => (

                    <StatBox>
                        <StatValue variant="h4">{stat.value}</StatValue>
                        <StatLabel>{stat.label}</StatLabel>
                    </StatBox>

                ))}
            </ContainerStyle>
        </StatsContainer>
    );
};

export default StatsSection;
