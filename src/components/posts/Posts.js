import React, { useEffect, useState } from "react";
import { Card, CardBody, Modal } from "reactstrap";
import "./Posts.scss";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import { data } from "../../assets/data";
import PostCard from "../postCard/PostCard";
import  Skeleton  from 'react-loading-skeleton';
import NewPost from "../newPost/NewPost";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify([data.posts]),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setPosts(json[0]));
  }, []);

  return (
    <>
    <div className="container">
      <Card>
        <CardBody>
          <div className="create__post">
            <img
              style={{ width: "45px", height: "45px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIy4kRyqQYE-eyQQEMvkgyyDv0IEHECKuNQ&usqp=CAU"
              className="avatar-xs rounded-circle me-2 cursor-pointer"
              alt="User"
            />

            <div className="status cursor__pointer" onClick={()=> setIsModalOpen(!isModalOpen)}>
              <span>What's on your mind?</span>
            </div>
          </div>
          <div className="post__options">
            <div className="item">
              <VideoCameraBackIcon />
              <span>Live Video</span>
            </div>

            <div className="item">
              <PhotoLibraryIcon />
              <span>Photo/video</span>
            </div>

            <div className="item">
              <EmojiEmotionsIcon />
              <span>Feelings/activity</span>
            </div>
          </div>
        </CardBody>
      </Card>

      <div className="posts py-3">
        {posts ? posts?.map((post, index) => (
          <div key={index} className='mt-4'>
            <PostCard post={post} />
          </div>
        )) : <Skeleton count={5} height={100} />}
      </div>

      
    </div>


    {/* NEW POST MODAL */}

    <Modal
        isOpen={isModalOpen}
        toggle={() => {
          setIsModalOpen(!isModalOpen);
        }}
        centered={true}
      >
        <div className="modal-header " >
          <div className='w-100 text-center'>
          <h5 className="modal-title mt-0" >Create Post</h5>
          </div>
          <span
            type="button"
            onClick={() => {
              setIsModalOpen(false);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            {/* <span aria-hidden="true">&times;</span> */}
            <CloseOutlinedIcon />
          </span>
        </div>
        <div className="modal-body">
            <NewPost />
        </div>
      </Modal>
    </>
    
  );
};

export default Posts;
