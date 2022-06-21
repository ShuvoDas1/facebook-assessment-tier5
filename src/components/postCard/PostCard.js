import React from "react";
import moment from "moment";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { Card, CardBody } from "reactstrap";
import "./PostCard.scss";
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import { TextField, Tooltip } from "@mui/material";
import Skeleton from "react-loading-skeleton";
import User from "../user/User";

const PostCard = ({ post }) => {
  return (
    <>
    {post ? <Card>
      <CardBody>
        {/* USER */}
        <div className="user d-flex">
          <img
            style={{ width: "40px", height: "40px" }}
            src={post?.user?.profile_picture}
            className="avatar-xs rounded-circle me-2 cursor-pointer"
            alt="User"
          />
          <div>
            <strong>{post.user?.name}</strong>
            <p>{moment(post.posted_on).startOf("day").fromNow()}</p>
          </div>
        </div>

        {/* POST */}

        <p style={{ fontSize: "16px", fontWeight: "500" }}>{post?.post}</p>

        {/* LIKE COMMENT SHARE */}

        <div className="d-flex justify-content-between">
          <div className="likes d-flex align-items-center">
            <ThumbUpIcon />
            <span>{post?.likes}</span>
          </div>
          <div className="comment__share">
            <span>{`${post.comments.length} Comments`}</span>
            <span className="ms-3">{`${post.shares} Shares`}</span>
          </div>
        </div>

        <div className="post__actions">
          <div className="item cursor__pointer">
            {post.liked ? <ThumbUpIcon  /> : <ThumbUpOffAltIcon />}
            <span className="ms-2">{post.liked ? "Liked" : "Like"}</span>
          </div>
          <div className="item">
            <ModeCommentOutlinedIcon />
            <span className="ms-2">Comment</span>
          </div>
          <div className="item">
            <ReplyOutlinedIcon />
            <span className="ms-2">Share</span>
          </div>
        </div>

        {/* COMMENTS */}

        <div className="comments">
          {post.comments.map((comment, index) => (
            <div key={index} className="comment">
              <div>
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={comment?.user?.profile_picture}
                  className="avatar-xs rounded-circle me-2 cursor-pointer"
                  alt="User"
                />
              </div>
              <div className="comment__info">
                <strong>{comment?.user?.name}</strong>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* COMMENT BOX */}

        <div className="new__comment__wrapper">
          <img
            style={{ width: "45px", height: "45px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU"
            className="avatar-xs rounded-circle me-2 cursor-pointer"
            alt="User"
          />

          <div className="new__comment__input">
            <input  className='input' placeholder='Write a comment...' />
            <div className='new__comment__options'>
              <Tooltip title='Insert an Emoji'>
              <EmojiEmotionsOutlinedIcon />
              </Tooltip>
              <Tooltip title='Attach a photo or video'>
              <PhotoCameraOutlinedIcon />
              </Tooltip>
              <Tooltip title='Comment with a Gif'>
              <GifBoxOutlinedIcon />
              </Tooltip>
              <Tooltip title='Comment with a sticker'>
                <StickyNote2OutlinedIcon />
              </Tooltip>
            </div>
          </div>
        </div>
      </CardBody>
    </Card> : <Skeleton count={5} /> }


    </>
  );
};

export default PostCard;
