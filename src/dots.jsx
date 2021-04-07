// @flow
import React from 'react';
import styled from 'styled-components';
type Props = {
  slideCount: number,
  clickHandler: void,
};
const Container = styled.div`
  display: flex;
`;
const Dots = (props: Props) => {
  const { slideCount, clickHandler } = props;
  const dots = [...Array(slideCount)];
  return (
    <Container>
      {dots.map((item,index) => (
        <li key={item} onClick={(item) => clickHandler(index)} />
      ))}
    </Container>
  );
};
export default Dots;
