import React, { useEffect, useState } from 'react'
import { FilterButton, FilterGroup, Sidebar } from './styleWrapper'
import { Box, Checkbox, Typography } from '@mui/material'
import { filters } from '../data/data';

const jobSidebar = ({applyFilters}) => {
    const title='Jobs';
    const [selectedFilters, setSelectedFilters] = useState({});
    const handleFilterChange = (filterKey, item) => {
      setSelectedFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters };
    
        if (updatedFilters[filterKey]) {
          // If item is already selected, remove it; otherwise, add it
          if (updatedFilters[filterKey].includes(item)) {
            updatedFilters[filterKey] = updatedFilters[filterKey].filter((i) => i !== item);
          } else {
            updatedFilters[filterKey].push(item);
          }
        } else {
          updatedFilters[filterKey] = [item];
        }
    
        return updatedFilters;
      });
    };
    useEffect(() => {
      console.log("Updated Selected Filters:", selectedFilters);
    }, [selectedFilters]);
  return (
    
    <Sidebar>
    <Box sx={{display: 'flex', flexDirection: { xs: 'column', sm: 'row', md: 'column' }, flexWrap: { sm: 'wrap', md: 'nowrap' }, width:{md:'26vw',lg:'21vw', xl:'17vw'}}}>
      {Object.keys(filters).map((filterKey) => (
        <FilterGroup key={filterKey}>
          <Typography sx={{ marginBottom: 2, fontSize: '18px', fontWeight: '500' }}>
            {filterKey}
          </Typography>
          {filters[filterKey].map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
              <Checkbox  checked={selectedFilters[filterKey]?.includes(item) || false}
              onChange={() => handleFilterChange(filterKey, item)}/>
              <Typography sx={{ fontSize: '15px'}}>{item}</Typography>
            </Box>
          ))}
        </FilterGroup>
      ))}
    </Box>
    <FilterButton variant="contained" onClick={() => applyFilters(selectedFilters)}>Search</FilterButton>
  </Sidebar>
  )
}

export default jobSidebar
