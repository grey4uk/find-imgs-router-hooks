import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';

import fetchPicture from '../services/picture-api';
import PictureDataView from './PictureDataView';
import PictureErrorView from './PictureErrorView';
import Button from '../button/Button';

const ImgGalleryWrapper = styled.div`
  text-align: center;
  > div {
    margin-bottom: 20px;
  }
`;

const IdleText = styled.h2`
  text-transform: uppercase;
  color: transparent;
  background: #666666;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
  text-shadow: 0px 3px 3px rgba(255, 255, 255, 0.5);
`;

function isPictureEnd(page, totalHits, onLoading) {
  const totalPages = totalHits / 12;

  if (page !== 1 && page >= totalPages) {
    return toast.info('Картинок больше нет', {
      theme: 'colored',
    });
  }
}

function ImageGallery({ onLoading, pictureName }) {
  const [picture, setPicture] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [status, setStatus] = useState('idle');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    setPicture([]);
  }, [pictureName]);

  useEffect(() => {
    if (pictureName === '') {
      return;
    }

    onLoading(true);

    async function fetchPic() {
      await fetchPicture(pictureName, page)
        .then(newPicture => {
          if (newPicture.hits.length === 0) {
            onLoading(false);

            return Promise.reject(
              new Error(
                toast.warning('Такой картинки нет', {
                  theme: 'colored',
                }),
              ),
            );
          }

          setPicture(
           prev=> page > 1 ? [...prev, ...newPicture.hits] : newPicture.hits,
          );
          setStatus('resolved');
          setTotalHits(newPicture.totalHits);

          Scroll.animateScroll.scrollToBottom({ duration: 2000 });
          isPictureEnd(page, totalHits, onLoading);
          onLoading(false);
        })
        .catch(() => {
          setStatus('rejected');
        });
    }
    fetchPic();
  }, [onLoading, page, pictureName, totalHits]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  if (status === 'idle') {
    return <IdleText>Введите имя катринки</IdleText>;
  }

  if (status === 'rejected') {
    return <PictureErrorView />;
  }

  if (status === 'resolved') {
    return (
      <ImgGalleryWrapper>
        <div>
          <PictureDataView
            pictureArray={picture}
          />
        </div>
        {totalHits > picture.length && <Button onClick={handleLoadMore} />}
      </ImgGalleryWrapper>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  pictureName: PropTypes.string.isRequired,
};
