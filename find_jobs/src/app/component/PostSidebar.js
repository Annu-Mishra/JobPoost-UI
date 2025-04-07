import { CardMedia, Divider, List, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { RecentPostItem, SidebarContainer } from './styleWrapper'

const PostSidebar = ({ recentPosts }) => {
    return (
        <SidebarContainer>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>Recent Posts</Typography>
            <Divider sx={{ marginBottom: 3 }} />
            <List>
                {recentPosts.map((recentPost, index) => (
                    <RecentPostItem key={index}>
                        <CardMedia component="img" sx={{ width: 60, height: 60, marginRight: 2 }} image={recentPost.image} alt="Recent post thumbnail" />
                        <ListItemText primary={recentPost.title} secondary={recentPost.date} />
                    </RecentPostItem>
                ))}
            </List>
        </SidebarContainer>
    )
}

export default PostSidebar
