import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "../styles/Marker.scss";

const markerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '30px', // Adjust the size as needed
  height: '30px', // Adjust the size as needed
  transform: 'translate(-50%, -50%)',
};

const Marker = ({ text, onClick }) => (
  <div
    style={{ ...markerStyle, cursor: onClick ? 'pointer' : 'default' }}
    onClick={onClick}
  >
    <FontAwesomeIcon icon={faHome} color="#FFF" className='fa-border marker' size="2x" />
  </div>
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
