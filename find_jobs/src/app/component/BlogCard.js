import React from 'react';
import { Card, CardMedia, CardContent, Box, Typography, Divider } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { LeftBlogCard } from './styleWrapper';

const BlogCard = ({ post }) => {
  return (
    <LeftBlogCard>
      <CardMedia component="img" width="100%" height="280" image={post.image} alt="Blog post image" />
      <CardContent>
        <Box>
          <Typography variant="body2" color="textSecondary" display="flex" alignItems="center" gap={1}>
            <PermIdentityIcon /> {post.author} <ChatBubbleOutlineIcon /> {post.comments} Comments •{' '}
            {post.category}
          </Typography>
          <Typography variant="h4" sx={{ fontSize: '1.5rem', fontWeight: 550, marginTop: 2, marginBottom: 2 }}>
            {post.title}
          </Typography>
          <Typography color="textSecondary" sx={{ fontSize: '13px', lineHeight: 2 }}>
            {post.description}
          </Typography>
          <Divider sx={{ marginY: 3 }} />
          <Box display="flex" justifyContent="space-between">
            <Typography component="a" href="#" color="primary">
              {`Read More >>`}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {post.date}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </LeftBlogCard>
  );
};

export default BlogCard;
