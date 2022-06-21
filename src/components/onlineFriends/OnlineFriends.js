import React from "react";
import './OnlineFriends.scss';
const OnlineFriends = () => {
  return (
    <div className="container">

    


      <div className='online__users__wrapper'>
      <h5 classNam='mt-2 '>Contacts</h5>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
        <div className="active__user mb-2 d-flex align-items-center cursor__pointer item" key={index}>
          <div className="active__user__avatar">
            <img
              style={{ width: "40px", height: "40px" }}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              className="avatar-xs rounded-circle me-2 cursor-pointer"
              alt="User"
            />
            <div className='active__icon'></div>
          </div>
          <strong>Shuvo</strong>
        </div>
      ))}
      </div>

    </div>
  );
};

export default OnlineFriends;
