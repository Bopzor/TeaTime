import React, { FunctionComponent, useState, useEffect, useContext, useRef } from 'react';
import moment from 'moment';
import { formatSecondsToMinutesAndSeconds } from '../utils';
import { timeStyle, timerWrapper, controlStyle } from './timerStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { OrientationContext } from '../Contexts/OrientationContext';
import { Orientation } from '../types/Orientation';

import worker from '../worker';
import webWorker from '../workerSetup';

type TimerProps = {
  time: moment.Duration,
  incrementTeaCount: () => void;
};

const useTimer = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const [started, setStarted] = useState(false);
  const myWorkerRef = useRef<Worker>();

  useEffect(() => {
    const myWorker = myWorkerRef.current = webWorker(worker);
    myWorker.postMessage({ type: 'SET_DURATION', duration: initialTime });

    function listener(e: MessageEvent) {
      if (e.data.type === 'DURATION') {
        setTime(parseInt(e.data.duration));

      } else {
        return;
      }
    }

    myWorker.addEventListener('message', listener);
    myWorker.postMessage({ type: 'CHANGE_STATUS', started });

    return () => myWorker.removeEventListener('message', listener);
  }, [started]);

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
  const orientation: Orientation = useContext(OrientationContext);

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
  }

  const stopAlarm = () => {
    setAlarm(false);
  }

  return (
    <div style={timerWrapper(orientation)}>
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
        : ( alarm
          ? (
            <div style={controlStyle} onClick={stopAlarm}>
              <FontAwesomeIcon icon="stop" size="3x" />
            </div>
          )
          : (
            <div style={controlStyle} onClick={resetTimer}>
              <FontAwesomeIcon icon="redo" size="3x" />
            </div>
          )
        )
      }

      { alarm &&
        <audio src="/fini.mp3" autoPlay={true} loop>
          Your browser does not support the <code>audio</code> element.
        </audio>
      }
    </div>
  );
}
