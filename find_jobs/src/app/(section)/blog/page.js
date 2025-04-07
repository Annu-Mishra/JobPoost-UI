'use client'
import React from 'react';
import {
  MainContainer,
  ContentContainer,
  // BlogCard,
  BlogCardImage,
  SidebarContainer,
  RecentPostItem,
  Tag,
} from '@/app/component/styleWrapper';
import {
  Box,
  Grid,
  Typography,
  Divider,
  CardMedia,
  CardContent,
  TextField,
  InputAdornment,
  List,
  ListItemText,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { postCategories, posts, recentPosts, tags } from '@/app/data/data';
import Top from '@/app/component/top';
import BlogCard from '@/app/component/BlogCard';
import CategorySidebar from '@/app/component/CategorySidebar';
import PostSidebar from '@/app/component/PostSidebar';

const BlogSection = () => {
  return (
    <>
      <Top title='Blog' />
      <MainContainer>
        <ContentContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} md={7} >
              {posts.map((post) => (
                <BlogCard post={post} />
              ))}
            </Grid>


            <Grid item xs={12} md={5}>
              <SidebarContainer>
                <TextField fullWidth placeholder="Search..." variant="outlined" size="small" InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                />
              </SidebarContainer>

              <CategorySidebar category={postCategories} />

              <PostSidebar recentPosts={recentPosts} />

              <SidebarContainer>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>Tags</Typography>
                <Divider sx={{ marginBottom: 3 }} />
                <Box display="flex" flexWrap="wrap" gap={1}>{tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))} </Box>
              </SidebarContainer>
            </Grid>
          </Grid>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default BlogSection;
