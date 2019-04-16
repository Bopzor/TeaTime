import React, { FunctionComponent, useState, useEffect } from 'react';
import moment from 'moment';
import { formatSecondsToMinutesAndSeconds } from 'src/utils';
import { timeStyle, timerWrapper, controlStyle } from './timerStyle';

type TimerProps = {
  time: moment.Duration,
  incrementTeaCount: () => void;
};

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [started, setStarted] = useState(false);

  useEffect((): any => {
    if (started && time > 0) {
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

export const Timer: FunctionComponent<TimerProps> = ({ time, incrementTeaCount }) => {
  const [started, setStarted] = useState(false);
  const [alarm, setAlarm] = useState(false);
  const { time: currentTime, toggle: toggleTimer } = useTimer(time.asSeconds());

  useEffect(() => {
    if (started && currentTime <= 0) {
      setAlarm(true);
      setStarted(false);
      incrementTeaCount();
    }
  }, [currentTime])

  const handleToggle = () => {
    if (currentTime <= 0)
      return;

    toggleTimer();
    setStarted(!started);
  }

  return (
    <div style={timerWrapper}>
      <div style={timeStyle}>{ formatSecondsToMinutesAndSeconds(currentTime) }</div>

      <div style={controlStyle} onClick={handleToggle}>
        <i
          className={started ? "fas fa-pause fa-3x" : "fas fa-play fa-3x"}
          style={currentTime <= 0 ? { color: '#ccc', cursor: 'initial' } : { cursor: 'pointer' }}
        />
      </div>

      { alarm &&
        <audio src="/ding.m4a" autoPlay={true}>
          Your browser does not support the <code>audio</code> element.
        </audio>
      }
    </div>
  );
}
