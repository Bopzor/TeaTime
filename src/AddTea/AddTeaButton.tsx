import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { addButtonTeaStyle } from './addTeaStyle';

export const AddTeaButton: FunctionComponent = () => {
  return (

    <div style={addButtonTeaStyle}>
      <Link to="/tea/add">
        <i className="fas fa-plus fa-2x" />
      </Link>
    </div>
  );
}