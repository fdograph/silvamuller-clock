import React, { Fragment } from 'react';
import { GlobalStyle } from './globalStyles';
import styled from 'styled-components';
import { Digit } from '../common/components/Digit';

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: var(--primary-color);
  color: var(--secondary-color);
`;

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <MainWrapper>
        <Digit size={9} current={1} />
      </MainWrapper>
    </Fragment>
  );
};

export default App;
