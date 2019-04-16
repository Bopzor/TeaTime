import React, { FunctionComponent, useState, FormEvent } from 'react';
import slugify from 'slugify';

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
} from './addTeaStyle';
import { Tea } from 'src/types/Tea';
import { Redirect } from 'react-router';

type AddTeaProps = {
  handleAddTea: (tea: Tea) => void;
}

export const AddTea: FunctionComponent<AddTeaProps> = ({ handleAddTea }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [temperature, setTemperature] = useState('');
  const [time, setTime] = useState<{ minutes: string, seconds: string }>({ minutes: '', seconds: '' });
  const [redirectPath, setRedirectPath] = useState<string | null>(null);

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
      id: slugify(`${name}${brand}`),
    }

    handleAddTea(tea);

    setRedirectPath(`/tea/${tea.id}`);
  };

  if (redirectPath !== null) {
    return <Redirect to={redirectPath} />
  }

  return (
    <div style={{height: '100%'}}>

      <div style={wrapperStyle}>

        <form style={formStyle} onSubmit={(e) => addTea(e)}>

          <div style={inputWrapperStyle}>
            <label style={labelStyle}>Nom: </label>
            <input
              style={inputStyle}
              type="text"
              value={name}
              required={true}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div style={inputWrapperStyle}>
            <label style={labelStyle}>Marque: </label>
            <input
              style={inputStyle}
              type="text"
              value={brand}
              required={true}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>

          <div style={inputWrapperStyle}>
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

          <div style={inputWrapperStyle}>
            <label style={labelStyle}>Durée: </label>
            <input
              style={inputMinutesStyle}
              type="number"
              min={0}
              max={59}
              value={time.minutes}
              required={true}
              onChange={(e) => setTime({ ...time, minutes: e.target.value })}
              />
            <div style={timeSeparatorStyle} >:</div>
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

          <input style={submitButtonStyle} type="submit" value="Ajouter" />
        </form>


      </div>
    </div>
  );
};