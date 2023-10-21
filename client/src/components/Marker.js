import React from 'react';
import PropTypes from 'prop-types';

const markerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: '18px',
  height: '18px',
  backgroundColor: '#000',
  border: '2px solid #fff',
  borderRadius: '100%',
  userSelect: 'none',
  transform: 'translate(-50%, -50%)',
};

const Marker = ({ text, onClick }) => (
  <div
    style={{ ...markerStyle, cursor: onClick ? 'pointer' : 'default' }}
    onClick={onClick}
  >
    {text}
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