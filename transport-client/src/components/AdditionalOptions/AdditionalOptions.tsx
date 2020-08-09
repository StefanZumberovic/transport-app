import React, { useState } from 'react';

import './AdditionalOptions.css';

interface AdditionalOptionsInterface {
  setTrainTransport: (boolean: boolean) => any;
}

const AdditionalOptions: React.FC<AdditionalOptionsInterface> = ({ setTrainTransport }) => {
  const [selected, setSelected] = useState<boolean>(false);

  const clickOption = () => {
    // @ts-ignore
    setTrainTransport((prevTransport: boolean) => !prevTransport);
    setSelected(!selected);
  };

  return (
    <div
      className={`additional-options${selected ? ' selected-option' : ''}`}
      onClick={(e) => clickOption()}
      role="button"
      onKeyDown={() => {}}
      tabIndex={0}
    >
      Only train transport
    </div>
  );
};

export default AdditionalOptions;
