import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem, GalleryImage } from './ImageGalleryItem.styled';
import { Link} from 'react-router-dom';

const ImageGalleryItems = ({
  webformatURL,
  tags,
  largeImageURL,
  id
}) => {

  return (
    <ImageGalleryItem
    >
      <Link to={{pathname:`/images/${id}`,search:`?large=${largeImageURL}` ,state:{alt:tags}}}>
      <GalleryImage src={webformatURL} alt={tags} />
      </Link>
      
    </ImageGalleryItem>
  );
};

export default ImageGalleryItems;

ImageGalleryItems.propTypes = {
 id:PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
