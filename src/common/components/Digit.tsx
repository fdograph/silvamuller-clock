import React from 'react';
import styled from 'styled-components';

const Window = styled.div`
  position: relative;
  display: block;
  width: 6em;
  height: 4em;
  background: rgba(0, 0, 0, 0.3);
`;

export interface IDigitProps {
  size: number;
  current: number;
}
export const Digit: React.FC<IDigitProps> = ({ size }) => {
  return <Window></Window>;
};
