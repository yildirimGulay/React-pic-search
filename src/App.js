import React,{useState} from 'react';
import './App.css';
import {Container, Typography} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import SearchBar from './component/SearchBar';
import axios from 'axios';
import ImageList from './component/ImageList';

function App() {

  const[images,setImages]= useState([])
  const onSearchSubmit=async(term)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',
  {
    params:{query:term},
    headers:{
      Authorization: 'Client-ID Sda_1aQJroqosuMfFwFxMP0fsanky-5VQbOcPH6_dWk',
    },
  });
  setImages(response.data.results);
  };

  return (
    <>

    <Container maxWidth="sm">
      
      <Typography variant="h4" gutterBottom>
        <ImageIcon style={{fontSize: 30, margin:2}}/>
        React Pic Search

      </Typography>

     <SearchBar gonder={onSearchSubmit}/>
     <ImageList images={images}/>

    </Container>

  </>
  );
}

export default App;
