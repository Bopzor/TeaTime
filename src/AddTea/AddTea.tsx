import React, { FunctionComponent } from 'react';
import {
  wrapperStyle,
  inputWrapperStyle,
  inputStyle,
  labelStyle,
  inputMinutesStyle,
  inputSecondsStyle,
  submitButtonStyle,
  timeSeparatorStyle,
} from './addTeaStyle';

export const AddTea: FunctionComponent = () => {
  return (
    <div style={wrapperStyle}>

      <form>

        <div style={inputWrapperStyle}>
          <label style={labelStyle}>Nom: </label>
          <input style={inputStyle} type="text"/>
        </div>

        <div style={inputWrapperStyle}>
          <label style={labelStyle}>Marque: </label>
          <input style={inputStyle} type="text"/>
        </div>

        <div style={inputWrapperStyle}>
          <label style={labelStyle}>Température: </label>
          <input style={inputStyle} type="number" placeholder="°C" min={60} max={100} />
        </div>

        <div style={inputWrapperStyle}>
          <label style={labelStyle}>Temps: </label>
          <input style={inputMinutesStyle} type="number" placeholder="min" min={0} max={59} />
          <div style={timeSeparatorStyle} >:</div>
          <input style={inputSecondsStyle} type="number" placeholder="sec" min={0} max={59} />
        </div>

      </form>

      <input style={submitButtonStyle} type="submit" value="Ajouter" />

    </div>
  );
};