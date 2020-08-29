import React from 'react'
import './Feed.css'
import StoryReel from './Story/storyReel'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post />
        </div>
    )
}

export default Feed
