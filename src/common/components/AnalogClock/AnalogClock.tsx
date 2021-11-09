import React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import { IClockProps } from '../types';

const timeToRotation = (t: number, chunks: number) => {
  return (360 / chunks) * t;
};

const ClockWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  min-width: 160px;
  max-width: 300px;
`;

const ClockSvg = styled.svg`
  width: 100%;
  height: 100%;
  display: block;

  .clock-base {
    fill: #f2f2f2;
  }

  .clock-marking {
    stroke: #222;
    transform-origin: center center;
    opacity: 0.5;

    &.hour {
      opacity: 1;
    }
  }

  .clock-pivot {
    fill: #ff4433;
  }

  .clock-needle {
    stroke: #222;
    stroke-width: 2px;
    transform-origin: center center;

    &.clock-seconds {
      stroke: #ff4433;
      stroke-width: 1px;
    }
  }
`;

export const AnalogClock: React.FC<IClockProps> = ({ date }) => {
  const lines = [...new Array(60)].map((_, i) => {
    const size = i % 5 === 0 ? 8 : 3;

    return (
      <line
        key={i}
        className={classnames('clock-marking', {
          hour: i % 5 === 0,
        })}
        x1="50%"
        y1={`${size}%`}
        x2="50%"
        y2="0"
        style={{ transform: `rotateZ(${(360 / 60) * i}deg)` }}
      />
    );
  });

  return (
    <ClockWrapper>
      <ClockSvg>
        <circle className="clock-base" cx="50%" cy="50%" r="50%" />
        {lines}

        <line
          className="clock-needle clock-hours"
          x1="50%"
          y1="16%"
          x2="50%"
          y2="50%"
          style={{
            transform: `rotateZ(${timeToRotation(date.getHours() * 5, 60)}deg)`,
          }}
        />

        <line
          className="clock-needle clock-minutes"
          x1="50%"
          y1="8%"
          x2="50%"
          y2="50%"
          style={{
            transform: `rotateZ(${timeToRotation(date.getMinutes(), 60)}deg)`,
          }}
        />

        <line
          className="clock-needle clock-seconds"
          x1="50%"
          y1="3%"
          x2="50%"
          y2="50%"
          style={{
            transform: `rotateZ(${timeToRotation(date.getSeconds(), 60)}deg)`,
          }}
        />
        <circle className="clock-pivot" cx="50%" cy="50%" r="6px" />
      </ClockSvg>
    </ClockWrapper>
  );
};
