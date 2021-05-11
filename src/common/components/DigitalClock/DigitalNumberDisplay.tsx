import React, { useMemo } from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

const Screen = styled.div`
  --height: 1.25em;
  --width: 1.5em;

  font-size: 64px;
  font-weight: lighter;
  color: white;
  display: block;
  position: relative;
  width: var(--width);
  height: var(--height);
  margin-right: 0.25em;

  &::after {
    content: ':';
    display: block;
    position: absolute;
    color: #fff;
    right: -0.25em;
    top: 50%;
    transform: translateY(-50%);
  }

  &:last-child {
    margin-right: 0;

    &::after {
      display: none;
    }
  }
`;

const Strip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  &.animated {
    transition: all 600ms ease;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: var(--height);

  &:not(.current) {
    opacity: 0.2;
  }

  &.animated {
    transition: all 600ms ease;
  }
`;

interface IDigitalNumberDisplayProps {
  size: number;
  value: number;
  padding: number;
  animated: boolean;
}

export const DigitalNumberDisplay: React.FC<IDigitalNumberDisplayProps> = ({
  size,
  value,
  padding,
  animated,
}) => {
  const items = useMemo(
    () =>
      [...new Array(size)].map((_, i) => {
        return (
          <Item
            key={i}
            className={classnames({ current: i === value, animated })}
          >
            {i.toString().padStart(padding, '0')}
          </Item>
        );
      }),
    [size, value]
  );

  return (
    <Screen>
      <Strip
        className={classnames({ animated })}
        style={{ transform: `translate3d(0,${1.25 * value * -1}em,0)` }}
      >
        {items}
      </Strip>
    </Screen>
  );
};
