import React from 'react';
import OnlineFriends from '../components/onlineFriends/OnlineFriends';
import Posts from '../components/posts/Posts';
import SideMenu from '../components/sideMenu/SideMenu';
import './Home.scss';

const Home = () => {
    return (
        <div className="main">
        <div className="left">
            <SideMenu />
        </div>
        <div className="center">
          <Posts />
        </div>
        <div className="right">
            <OnlineFriends />
        </div>
      </div> 
    );
};

export default Home;