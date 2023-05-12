import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import {MenuIcon} from '@mui/material/icons'
// import { MenuItem } from '@mui/material';
export default function Header(props: MyComponentProps) {
  return (

  <>
    <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        {/* <MenuIcon /> */}
      </IconButton>
      <Typography variant="h6">
        My Website
      </Typography>
    </Toolbar>
    </AppBar> 

  </>
  );

  }
  interface MyComponentProps {
    // define your props interface here
  }