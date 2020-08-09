import React from 'react';

import './GeneralInformation.css';

interface GeneralInformationProps {
  duration: string;
  transfers: number;
}

const GeneralInformation: React.FC<GeneralInformationProps> = ({ duration, transfers }) => {
  return (
    <div className="general-information">
      <div>Duration: {duration || ''}</div>
      <div>Transfers: {transfers || ''}</div>
    </div>
  );
};

export default GeneralInformation;
