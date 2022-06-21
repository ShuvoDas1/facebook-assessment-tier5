import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import "./SideMenu.scss";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import {data} from '../../assets/data';
import User from "../user/User";


const Item = ({ title, icon }) => {
  return (
    <div className="options item">
      {icon}
      <strong className="ms-2">{title}</strong>
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className="container">
      
      <div className='mb-2'>
      <User  img={data?.user?.profile_picture} name={data?.user?.name} />
      </div>

      <Item title="Friends" icon={<PeopleAltIcon />} />
      <Item title="Marketplaces" icon={<StorefrontIcon />} />
      <Item title="Memories" icon={<AccessTimeFilledIcon />} />
      <Item title="Groups" icon={<GroupWorkIcon />} />
      <Item title="Watch" icon={<LiveTvIcon />} />
      <Item title="Saved" icon={<BeenhereIcon />} />

    </div>
  );
};

export default SideMenu;
