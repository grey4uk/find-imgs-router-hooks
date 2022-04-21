import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Searchbar from '../components/searchbar/Searchbar';
import ImageGallery from '../components/imageGallery/ImageGallery.jsx';
import PicturePangingView from '../components/imageGallery/PicturePangingView';
import { Route, useHistory } from 'react-router-dom';
import Photo from './Photo';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  justify-items: center;
`;

function App() {
  const [picture, setPicture] = useState('');


  const [loading, setLoading] = useState(false);

  const history=useHistory();

  const redirectToPictures=()=>history.push('/images');

  useEffect(() => {
        picture&&redirectToPictures()
  }, [picture])
  

  return (
    <Container>
      <Searchbar onSubmit={setPicture}></Searchbar>
      <ToastContainer autoClose={3000} />
      {loading && <PicturePangingView />}
      <Route path='/images'>
      <div>
        <ImageGallery
          pictureName={picture}
          onLoading={setLoading}
        />
      </div>
      </Route>
      <Route path='/images/:id'>
        <Photo/>
      </Route>
    </Container>
  );
}

export default App;
