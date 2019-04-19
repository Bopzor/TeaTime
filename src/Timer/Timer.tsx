import React, { FunctionComponent, useState, useEffect, useContext } from 'react';
import moment from 'moment';
import { formatSecondsToMinutesAndSeconds } from 'src/utils';
import { timeStyle, timerWrapper, controlStyle, timerWrapperLandscape } from './timerStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OrientationContext } from '../OrientationContext';

type TimerProps = {
  time: moment.Duration,
  incrementTeaCount: () => void;
};

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [started, setStarted] = useState(false);
  const orientation = useContext(OrientationContext);

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
    reset: () => {
      setTime(initialTime);
      setStarted(false);
    },
  };

};

export const Timer: FunctionComponent<TimerProps> = ({ time, incrementTeaCount }) => {
  const [started, setStarted] = useState(false);
  const [alarm, setAlarm] = useState(false);
  const { time: currentTime, toggle: toggleTimer, reset: resetTimer } = useTimer(time.asSeconds());

  useEffect(() => {
    if (started && currentTime <= 0) {
      setAlarm(true);
      setStarted(false);
      incrementTeaCount();

    } else
      setAlarm(false);
  }, [currentTime])

  const handleToggle = () => {
    if (currentTime <= 0)
      return;

    toggleTimer();
    setStarted(!started);
  };

  return (
    <div style={orientation === 'portrait' ? timerWrapper : timerWrapperLandscape}>
      <div style={timeStyle}>{ formatSecondsToMinutesAndSeconds(currentTime) }</div>

      { currentTime > 0
        ? (
          <div style={controlStyle} onClick={handleToggle}>
            { started
              ? <FontAwesomeIcon icon="pause" size="3x" />
              : <FontAwesomeIcon icon="play" size="3x" />
            }
          </div>
        )
        : (
          <div style={controlStyle} onClick={resetTimer}>
            <FontAwesomeIcon icon="redo" size="3x" />
          </div>
        )
      }

      { alarm &&
        <audio src="/fini.mp3" autoPlay={true}>
          Your browser does not support the <code>audio</code> element.
        </audio>
      }
    </div>
  );
}
