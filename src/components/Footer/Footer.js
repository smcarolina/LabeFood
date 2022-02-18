import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { goToCartPage, goToHomePage, goToProfilePage } from '../../routes/Coordinator';
import { useHistory } from 'react-router-dom';
import { BottomContainer } from './styled';



const Footer = () => {
  const [value, setValue] = useState("recent");

  const handleChange = (event, newValue) => {
    if (newValue === "home") {
      goToHomePage(history)
    }
    if (newValue === "cart") {
      goToCartPage(history)
    }
    if (newValue === "profile") {
      goToProfilePage(history)
    }
  };

  const history = useHistory()

  return (
    <BottomContainer>
      <BottomNavigation
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}

        />
        <BottomNavigationAction
          label="Carrinho"
          value="cart"
          icon={<ShoppingCartOutlinedIcon />}
        />
        <BottomNavigationAction
          label="Perfil"
          value="profile"
          icon={<PersonOutlineOutlinedIcon />}
        />
      </BottomNavigation>
    </BottomContainer>
  );
}
export default Footer;