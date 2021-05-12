import React from 'react';
import { AnalogClock } from './AnalogClock/AnalogClock';
import { DigitalClock } from './DigitalClock/DigitalClock';
import { useTickerInSeconds } from '../../hooks';

type ClockComponentType = typeof AnalogClock | typeof DigitalClock;

const AutoClock: React.FC<{
  type: ClockComponentType;
}> = (props) => {
  const { date } = useTickerInSeconds(1);
  return <props.type date={date} />;
};

type ClockProps = { type: ClockComponentType } & (
  | { date: Date; auto?: false }
  | { date?: undefined; auto: true }
);

export const Clock: React.FC<ClockProps> = (props) => {
  if (props.auto) {
    return <AutoClock type={props.type} />;
  }

  return <props.type date={props.date} />;
};
