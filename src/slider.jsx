// @flow
import React, { useState } from 'react';
import styled from 'styled-components';
import Dots from './dots';
type Props = {
  dotsVisible: boolean,
};
const Container = styled.div`
  display: flex;
`;
const Page = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid red;
  display: ${(props) => (props.index ? 'block' : 'none')};
`;
const SliderPage = styled.div`
  flex: 1;
`;
const Slider = (props: Props) => {
  const [activePage, setActivePage] = useState(0);
  const changeSlide = (index) => {
    setActivePage(index);
  };
  console.log('activePage', props.children);
  return (
    <Container>
      <SliderPage>
        {props.children.map((item, index) => {
          return <Page index={activePage === index}>{item.props.children.props.children}</Page>;
        })}
      </SliderPage>
      {props.dotsVisible && <Dots clickHandler={changeSlide} slideCount={props.children.length} />}
    </Container>
  );
};
export default Slider;
