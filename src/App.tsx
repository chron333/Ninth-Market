// import logo from './';//D:\Users\chris\newWorkspace\Ninth-Market\src\NMNewLogo.svg
//Ninth-Market\src\NMNewLogo.svg
import './App.css';
// import Header from './Header.tsx';
import { ReactComponent as MySvg } from './NMNewLogo.svg';

import contact from './Contact';
import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { ReactSVG } from 'react-svg';

function MyComponent() {
  return <ReactSVG src="src/NMNewLogo.svg" />;
}
function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <a href='/home'>
            <Typography variant="h6">
              Home
            </Typography>
          </a>
          <IconButton edge="start" color="inherit" aria-label="menu">
          </IconButton>
          <a href='/vendors'>
            <Typography variant="h6">
              Vendors
            </Typography>
          </a>
        </Toolbar>
      </AppBar>

      <MySvg style={{ width: '400px', height: '400px' }} />
      <div>
        <h1 className="title">Website is in Development</h1>
      </div>
      <a
        className="App-link"
        href="https://www.instagram.com/ninthmarket/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out our Instagram @NinthMarket
      </a>
    </div>
  );
}


export default App;
