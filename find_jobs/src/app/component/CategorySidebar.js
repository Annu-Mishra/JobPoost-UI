import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { SidebarContainer } from './styleWrapper'

const CategorySidebar = ({category}) => {
  return (
    <SidebarContainer>
    <Typography variant="h5" sx={{ marginBottom: 2 }}>Categories</Typography>
    <Divider sx={{ marginBottom: 2 }} />
    {category.map((category, index) => (
      <Box  display="flex" justifyContent="space-between" py={1}>
        <Box display="flex" gap={2}>
          <Typography>{'>>'}</Typography>
          <Typography>{category.name}</Typography>
        </Box>
        <Typography>(3)</Typography>
      </Box>
     ))}
  </SidebarContainer>
  )
}

export default CategorySidebar
