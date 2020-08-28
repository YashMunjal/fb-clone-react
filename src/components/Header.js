import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionOutlined from "@material-ui/icons/SubscriptionsOutlined";
import FlagIcon from "@material-ui/icons/Flag";
import StoreFrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SuperVisedCircleIcon from "@material-ui/icons//SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActive from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
function header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/384px-Facebook_icon.svg.png"
          alt="logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionOutlined fontSize="large" />
        </div>{" "}
        <div className="header__option">
          <StoreFrontOutlinedIcon fontSize="large" />
        </div>{" "}
        <div className="header__option">
          <SuperVisedCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
          <div className="header__info">
              <Avatar />
              <h4>Yash Munjal</h4>
          </div>
          <IconButton>
              <AddIcon />
          </IconButton>
          <IconButton>
              <ForumIcon />
          </IconButton>
          <IconButton>
              <NotificationsActive />
          </IconButton>
          <IconButton>
              <ExpandMoreIcon />
          </IconButton>
      </div>
    </div>
  );
}

export default header;
