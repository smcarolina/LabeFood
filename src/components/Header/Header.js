import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { HeaderContainer, TypographyText } from './styled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useHistory } from 'react-router';

const Header = (props) => {
    const history = useHistory()


  return (
    <HeaderContainer>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={''} position="fixed">
        <Toolbar >
          <IconButton
            color="default"
            sx={{ mr: 2 }}
            >
            <ArrowBackIosIcon onClick={() => history.goBack()}/>
          </IconButton>
          <TypographyText
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1 }} 
            color={'black'}>
            {props.title}
          </TypographyText>
        </Toolbar>
      </AppBar>
    </Box>
              </HeaderContainer>
  );
}

export default Header;