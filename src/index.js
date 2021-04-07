import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './slider';

ReactDOM.render(
  <Slider dotsVisible={true}>
    <div>
      <h3>1</h3>
    </div>
    <div>
      <h3>2</h3>
    </div>
    <div>
      <h3>3</h3>
    </div>
    <div>
      <h3>4</h3>
    </div>
    <div>
      <h3>5</h3>
    </div>
    <div>
      <h3>6</h3>
    </div>
  </Slider>,
  document.body.appendChild(document.createElement('div'))
);
