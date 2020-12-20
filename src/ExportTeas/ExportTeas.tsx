import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tea } from 'src/types/Tea';
import {
  dialogStyle,
  exportButtonTeaStyle,
  cardStyle,
  dialogTitleStyle,
  dialogContentStyle,
  buttonWrapperStyle,
  cancelButtonStyle,
  submitButtonStyle,
} from './exportTeaStyle';

const ExportTea: React.FC<{ teas: Tea[] }> = ({ teas }) => {
  const [open, setOpen] = useState(false);

  const exportList = () => {
    const today = new Date();
    const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(teas));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', `the-pret-list-${date}.json`);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    setOpen(false);
  };

  return (
    <>
      <div style={exportButtonTeaStyle} onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon="download" size="2x" />
      </div>

      {open && (
        <div style={dialogStyle}>
          <div style={cardStyle}>
            <h1 style={dialogTitleStyle}>Exporter la liste de thé</h1>
            <p style={dialogContentStyle}>Le fichier pourra être utilisé pour importer cette liste dans la nouvelle application !</p>

            <div style={buttonWrapperStyle}>
              <button style={cancelButtonStyle} onClick={() => setOpen(false)}>Annuler</button>
              <button style={submitButtonStyle} onClick={exportList}>Exporter</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ExportTea;
