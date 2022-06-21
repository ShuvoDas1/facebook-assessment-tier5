import React from 'react';
import { data } from '../../assets/data';
import User from '../user/User';
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import {Tooltip } from '@mui/material';
import './NewPost.scss';
import { Button } from 'react-bootstrap';

const NewPost = () => {
    return (
        <div className='container'>
           <User img={data?.user?.profile_picture} name={data?.user?.name}  />

            <h4 className='mt-3'>{`What's on your mind, ${data?.user?.name}?`}</h4>

            <div className='add__options__wrapper '> 
                <strong>Add to your post</strong>
                <div className="icons">
                   <Tooltip title='Photo/video'>
                        <PhotoLibraryOutlinedIcon className="cursor__pointer me-2" />
                   </Tooltip>
                   <Tooltip title='Photo/video'>
                        <PersonAddAltOutlinedIcon className="cursor__pointer me-2" />
                   </Tooltip>
                   <Tooltip title='Feelings/activity'>
                        <EmojiEmotionsOutlinedIcon className="cursor__pointer me-2" />
                   </Tooltip>
                   <Tooltip title='Checkin'>
                        <AddLocationOutlinedIcon className="cursor__pointer me-2" />
                   </Tooltip>
                </div>
            </div>

            <div className="button__wrapper mt-3 w-100">
                <Button color='primary' className='w-100'> Post </Button>
            </div>

        </div>
    );
};

export default NewPost;