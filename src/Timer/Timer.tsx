import React, { FunctionComponent, useState, useEffect } from 'react';
import moment from 'moment';
import { formatSecondsToMinutesAndSeconds } from 'src/utils';
import { timeStyle, timerWrapper, controlStyle } from './timerStyle';

type TimerProps = {
  time: moment.Duration,
};

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [started, setStarted] = useState(false);

  useEffect((): any => {
    if (started) {
      const id = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearTimeout(id);
    }
  }, [time, started]);

  return {
    time,
    toggle: () => setStarted(!started),
  };
};

export const Timer: FunctionComponent<TimerProps> = ({ time }) => {
  const [started, setStarted] = useState(false);
  const { time: currentTime, toggle: toggleTimer } = useTimer(time.asSeconds());

  const handleToggle = () => {
    toggleTimer();
    setStarted(!started);
  }

  return (
    <div style={timerWrapper}>
      <div style={timeStyle}>{ formatSecondsToMinutesAndSeconds(currentTime) }</div>

      <div style={controlStyle} onClick={handleToggle}>
        <i className={started ? "fas fa-pause fa-3x" : "fas fa-play fa-3x"} />
      </div>
    </div>
  );
}