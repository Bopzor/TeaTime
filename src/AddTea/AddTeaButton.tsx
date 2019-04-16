import React, { FunctionComponent } from 'react';
import { Link, withRouter, match } from 'react-router-dom';
import { Location, History } from 'history';

import { addButtonTeaStyle } from './addTeaStyle';

type AddTeaButtonProps = {
  location: Location<any>;
  history: History;
  match: match;
}

const AddTeaButton: FunctionComponent<AddTeaButtonProps> = ({ location }) => {
  if (location.pathname === '/tea/add') {
    return null;
  }

  return (

    <div style={addButtonTeaStyle}>
      <Link to="/tea/add">
        <i className="fas fa-plus fa-2x" />
      </Link>
    </div>
  );
}

export const AddTeaButtonWithRouter = withRouter(AddTeaButton);