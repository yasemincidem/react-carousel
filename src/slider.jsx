// @flow
import React from "react";
import Dots from './dots';
type Props = {
  dotsVisible: boolean
}
const Slider = (props: Props) => {
  const changeSlide = () => {
    console.log('change slide');
  }
  return (<div>
    {props.dotsVisible && (<Dots clickHandler = {changeSlide} />)}
  </div>);
};
export default Slider;
