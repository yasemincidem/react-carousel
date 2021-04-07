// @flow
import React from 'react';
import styled from 'styled-components';
type Props = {
  slideCount: number,
};
const Container = styled.div`
  display: flex;
`;
const Dots = (props: Props) => {
  const { slideCount } = props;
  const slideCountTest = [1, 2, 3, 4];
  return (
    <Container>
      {slideCountTest.map((item) => (
        <li key={item} />
      ))}
    </Container>
  );
};
export default Dots;
