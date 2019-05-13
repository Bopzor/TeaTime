import React, { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const welcomStyle: CSSProperties = {
  margin: 'auto',
  marginTop: '100px',
  textAlign: 'center',
  maxWidth: '80%',
};

export const Welcome = () => (
  <div style={welcomStyle}>
    <div style={{ marginBottom: '2px' }}>
      Bienvenue sur
      <span style={{ fontFamily: 'Sedgwick Ave Display', fontSize: '20px' }}> Thé Prêt ?</span>
    </div>
    Pour ajouter votre premier thé, cliquez sur le button
    <FontAwesomeIcon icon="plus" style={{ margin: '0 3px' }} />
    en bas à droite !
  </div>
);
