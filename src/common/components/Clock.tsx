import React from 'react';
import { AnalogClock } from './AnalogClock/AnalogClock';
import { DigitalClock } from './DigitalClock/DigitalClock';
import { useTickerInSeconds } from '../../hooks';

type ClockProps = { type: typeof AnalogClock | typeof DigitalClock } & (
  | { date: Date; auto: never | false }
  | { date: never; auto: true }
);

export const Clock: React.FC<ClockProps> = (props) => {
  if (props.auto) {
    return <AutoClock type={props.type} />;
  }

  const Comp = props.type;
  return <Comp date={props.date} />;
};

const AutoClock: React.FC<{
  type: typeof AnalogClock | typeof DigitalClock;
}> = ({ type }) => {
  const { date } = useTickerInSeconds(1);
  const Comp = type;
  return <Comp date={date} />;
};
