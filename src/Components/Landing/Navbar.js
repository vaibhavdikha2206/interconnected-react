/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState, useEffect } from "react";
import Logo from "../../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import ProfileMenuDropDown from "../Login/DropDown/ProfileMenuDropDown";

const Navbar = ({ onButtonClick, reviewSectionReference }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [loggedin, setLoggedin] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  useEffect(() => {
    const fetchLocalStorageItem = () => {
      const item = localStorage.getItem("logger");
      setLoggedin(item);
    };

    fetchLocalStorageItem();

    const handleStorageChange = () => {
      fetchLocalStorageItem();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav>
      {console.log("test")}
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <a href="/whatever">About</a>
        <a onClick={() => onButtonClick(reviewSectionReference)}>
          Testimonials
        </a>
        <a href="/products">Contact</a>

        {!loggedin && (
          <Link to="/login">
            <button className="primary-button">Login</button>
          </Link>
        )}

        {
          loggedin && (
           <ProfileMenuDropDown/>
          )
        
        }
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      {/*<ProfileMenuDropDown/>*/}

     
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
