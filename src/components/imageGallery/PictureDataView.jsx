import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ImageGalleryItems from '../imageGalleryItem/ImageGalleryItem';

const PicturesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 0;
`;

function PictureDataView({ pictureArray}) {
  return (
    <div>
      <PicturesList className="gallery">
        {pictureArray.map(({ webformatURL, tags, largeImageURL,id }) => (
          <ImageGalleryItems
            key={webformatURL}
            webformatURL={webformatURL}
            tags={tags}
            largeImageURL={largeImageURL}
            id={id}
          />
        ))}
      </PicturesList>
    </div>
  );
}

export default PictureDataView;

PictureDataView.propTypes = {
  pictureArray: PropTypes.array.isRequired,
};
