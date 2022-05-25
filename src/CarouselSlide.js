import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${props =>
    typeof props.imgHeight === 'number'
      ? `${props.imgHeight}px`
      : props.imgHeight};
`;

const CarouselSlide = ({
  imgUrl,
  imgHeight,
  description,
  attribution,
  ...rest
}) => (
  <figure {...rest}>
    <Img src={imgUrl} alt={description} imgHeight={imgHeight} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>
  </figure>
);

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string,
  description: PropTypes.string,
  attribution: PropTypes.string
};

CarouselSlide.defaultProps = {
  imgHeight: 500
};

export default CarouselSlide;
