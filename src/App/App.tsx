import React, { Fragment } from 'react';
import { GlobalStyle } from './globalStyles';
import styled from 'styled-components';
import { AnalogClock } from '../common/components/AnalogClock/AnalogClock';
import { DigitalClock } from '../common/components/DigitalClock/DigitalClock';

const MainWrapper = styled.main`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  background: var(--primary-color);
  color: var(--secondary-color);
`;

const ClockItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &.analog {
    aspect-ratio: 1 / 1;
    max-width: 80vw;

    @supports not (aspect-ratio: 1 / 1) {
      width: min(320px, 80vw);
      height: min(320px, 80vw);
    }
  }

  &.digital {
    height: 12em;
  }
`;

const App: React.FC = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <MainWrapper>
        <ClockItem className="analog">
          <AnalogClock />
        </ClockItem>
        <ClockItem className="digital">
          <DigitalClock />
        </ClockItem>
      </MainWrapper>
    </Fragment>
  );
};

export default App;
