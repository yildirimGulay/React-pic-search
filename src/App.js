import React from 'react';
import './App.css';
import {Container, Typography} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SearchBar from './component/SearchBar';


function App() {
  return (
    <>

    <Container maxWidth="sm">
      
      <Typography variant="h4" gutterBottom>
        <ImageIcon style={{fontSize: 30, margin:2}}/>
        React Pic Search

      </Typography>

     <SearchBar/>

    </Container>

  </>
  );
}

export default App;
