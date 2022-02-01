import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { FooterContainer } from './styled';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const Footer = () => {


    return (
        <FooterContainer>

            <Box sx={{ width: 340 }}>
                <BottomNavigation>
                    <BottomNavigationAction label="Recents" icon={<HomeOutlinedIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<ShoppingCartOutlinedIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<PermIdentityOutlinedIcon />} />
                </BottomNavigation>
            </Box>
        </FooterContainer>
    );
}

export default Footer;