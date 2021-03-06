import styled from 'styled-components';

import { Wrapper } from 'visual/styles/Wrapper';

export const Container = styled.main``;

export const Content = styled(Wrapper)`
  display: grid;
  grid-row-gap: 50px;
`;

export const Title = styled.h2`
  position: absolute;
  left: -999pc;
  top: -999pc;
`;
