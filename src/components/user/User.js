import React from "react";
import moment from "moment";

const User = ({ img, name }) => {
  return (
    <div className=" cursor__pointer d-flex align-items-center ">
      <img
        style={{ width: "35px", height: "35px" }}
        src={img}
        className="avatar-xs rounded-circle me-1 cursor-pointer"
        alt="User"
      />
      <div>
        <strong className="ms-2">{name}</strong>
      </div>
    </div>
  );
};

export default User;
