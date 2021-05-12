import React from 'react';
import styled from 'styled-components';
import { DigitalNumberDisplay } from './DigitalNumberDisplay';
import { IClockProps } from '../types';

const ClockWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    z-index: 1;
    background: linear-gradient(to bottom, #222 0%, rgba(34, 34, 34, 0) 100%);
  }

  &::after {
    top: initial;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(34, 34, 34, 0) 0%, #222 100%);
  }
`;

export const DigitalClock: React.FC<IClockProps> = ({ date }) => {
  return (
    <ClockWrapper>
      <DigitalNumberDisplay
        size={24}
        value={date.getHours()}
        padding={2}
        animated
      />
      <DigitalNumberDisplay
        size={60}
        value={date.getMinutes()}
        padding={2}
        animated
      />
      <DigitalNumberDisplay
        size={60}
        value={date.getSeconds()}
        padding={2}
        animated
      />
    </ClockWrapper>
  );
};
