import React, { FunctionComponent } from 'react';
import { Link, withRouter, match } from 'react-router-dom';
import { Location, History } from 'history';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { addButtonTeaStyle } from './formTeaStyle';

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
      <Link to="/tea/add" aria-label="Add a new tea">
        <FontAwesomeIcon icon="plus" size="2x" />
      </Link>
    </div>
  );
}

export const AddTeaButtonWithRouter = withRouter(AddTeaButton);