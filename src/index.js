import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider';

ReactDOM.render(
  <Slider dotsVisible={true} />,
  document.body.appendChild(document.createElement('div'))
);
