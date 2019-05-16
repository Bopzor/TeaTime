import React, { FunctionComponent, useState, FormEvent, useContext, useEffect } from 'react';
import slugify from 'slugify';

import { OrientationContext } from '../Contexts/OrientationContext';

import {
  wrapperStyle,
  inputWrapperStyle,
  inputStyle,
  labelStyle,
  inputMinutesStyle,
  inputSecondsStyle,
  submitButtonStyle,
  timeSeparatorStyle,
  formStyle,
  landscapeWrapper,
  timeInputWrapper,
} from './formTeaStyle';
import { Tea } from 'src/types/Tea';
import { Redirect } from 'react-router';

type FormTeaProps = {
  currentTea?: Tea;
  handleSubmitTea: (tea: Tea) => void;
};

export const FormTea: FunctionComponent<FormTeaProps> = ({ currentTea, handleSubmitTea }) => {
  const [name, setName] = useState(currentTea ? currentTea.name : '');
  const [brand, setBrand] = useState(currentTea ? currentTea.brand : '');
  const [temperature, setTemperature] = useState(currentTea ? currentTea.temperature.toString() : '');
  const [time, setTime] = useState<{ minutes: string; seconds: string }>({
    minutes: currentTea ? currentTea.time.minutes.toString() : '',
    seconds: currentTea ? currentTea.time.seconds.toString() : '',
  });
  const [redirectPath, setRedirectPath] = useState<string | null>(null);
  const orientation = useContext(OrientationContext);

  useEffect(() => {
    if (!currentTea)
      resetForm();
  }, [currentTea]);

  const resetForm = () => {
    setName('');
    setBrand('');
    setTemperature('');
    setTime({ minutes: '', seconds: '' });
  };

  const addTea = (event: FormEvent) => {
    event.preventDefault();

    const tea: Tea = {
      name,
      brand,
      temperature: parseInt(temperature, 10),
      time: {
        minutes: parseInt(time.minutes, 10),
        seconds: parseInt(time.seconds, 10),
      },
      count: 0,
      id: slugify(`${name.toLocaleLowerCase()}${brand.toLocaleLowerCase()}`),
    };

    handleSubmitTea(tea);

    setRedirectPath(`/tea/${tea.id}`);
  };

  const updateTea = (event: FormEvent) => {
    event.preventDefault();

    if (!currentTea) return;

    const tea: Tea = {
      ...currentTea,
      name,
      brand,
      temperature: parseInt(temperature, 10),
      time: {
        minutes: parseInt(time.minutes, 10),
        seconds: parseInt(time.seconds, 10),
      },
    }

    handleSubmitTea(tea);

    setRedirectPath(`/tea/${tea.id}`);
  };

  if (redirectPath !== null) {
    return <Redirect to={redirectPath} />;
  }

  return (
    <div style={{ height: '100%' }}>
      <div style={wrapperStyle(orientation)}>
        <form
          style={formStyle(orientation)}
          onSubmit={currentTea ? (e) => updateTea(e) : (e) => addTea(e)}
        >
          <div style={landscapeWrapper(orientation)}>
            <div style={inputWrapperStyle(orientation)}>
              <label style={labelStyle}>Nom: </label>
              <input
                style={inputStyle}
                type="text"
                value={name}
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div style={inputWrapperStyle(orientation)}>
              <label style={labelStyle}>Marque: </label>
              <input
                style={inputStyle}
                type="text"
                value={brand}
                required={true}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
          </div>

          <div style={landscapeWrapper(orientation)}>
            <div style={inputWrapperStyle(orientation)}>
              <label style={labelStyle}>Température: </label>
              <input
                style={inputStyle}
                type="number"
                step={10}
                min={60}
                max={100}
                value={temperature}
                required={true}
                onChange={(e) => setTemperature(e.target.value)}
              />
              °C
            </div>

            <div style={inputWrapperStyle(orientation)}>
              <label style={labelStyle}>Durée: </label>

              <div style={timeInputWrapper}>
                <input
                  style={inputMinutesStyle}
                  type="number"
                  min={0}
                  max={59}
                  value={time.minutes}
                  required={true}
                  onChange={(e) => setTime({ ...time, minutes: e.target.value })}
                />
                <div style={timeSeparatorStyle}>:</div>
                <input
                  style={inputSecondsStyle}
                  type="number"
                  min={0}
                  max={59}
                  value={time.seconds}
                  required={true}
                  onChange={(e) => setTime({ ...time, seconds: e.target.value })}
                />
              </div>

            </div>
          </div>

          <input style={submitButtonStyle} type="submit" value={currentTea ? 'Modifier' : 'Ajouter'} />
        </form>
      </div>
    </div>
  );
};
