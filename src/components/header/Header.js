import React, { useState } from "react";
import { AppBar, createTheme, IconButton, ThemeProvider, Toolbar, Tooltip } from "@mui/material";
import FacebookSvg from "../../assets/svg/facebook";
import "./Header.scss";
import SearchIcon from "../../assets/svg/search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { data } from "../../assets/data";
import User from "../user/User";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";


const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = ['Profile', 'Pages',  'Watch', 'Marketplace', 'Gaming', 'Logout' ];

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar className='p-2'>
      <div className="app__wrapper">
        <div xl={4} className="left">
        
            <FacebookSvg fill="white" className="cursor__pointer" />

            <div className="search__wrapper">
              <SearchIcon />
              <input
                className=" input no-outline"
                type="text"
                placeholder="Search Facebook"
                id="search"
                autoComplete="off"
              />
            </div>
       
        </div>
        <div className="middle">
          <Tooltip title="Home">
            <HomeOutlinedIcon className="option" />
          </Tooltip>
          <Tooltip title="Pages">
            <FlagOutlinedIcon className="option" />
          </Tooltip>
          <Tooltip title="Watch">
            <SmartDisplayOutlinedIcon className="option" />
          </Tooltip>
          <Tooltip title="Marketplace">
            <StorefrontOutlinedIcon className="option" />
          </Tooltip>
          <Tooltip title="Gaming">
            <SportsEsportsOutlinedIcon className="option" />
          </Tooltip>
        </div>
        <div className="right">
          <div className="user">
          <User img={data?.user?.profile_picture} name={data?.user?.name} />
          <Tooltip title="Notifications">
            <CircleNotificationsIcon className="cursor__pointer ms-3" />
          </Tooltip>
          </div>
          <div className="menu">
          <Tooltip title="Menu">
            <div>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {menuItems.map((item, index) => (
                  <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>
                ))}
                
                
              </Menu>
            </div>
          </Tooltip>
        </div>
        </div>

        
      </div>
    </AppBar>
    </ThemeProvider>
  );
};

export default Header;
