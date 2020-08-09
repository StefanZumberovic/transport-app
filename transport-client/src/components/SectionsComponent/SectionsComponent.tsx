import React from 'react';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';
import SectionItem from '../SectionItem/SectionItem';

import './SectionsComponent.css';

interface SectionsComponentProps {
  sections: any;
}

const SectionsComponent: React.FC<SectionsComponentProps> = ({ sections }) => {
  return (
    <div className="sections-component">
      {sections.map((section: any, index: number) => {
        // eslint-disable-next-line react/no-array-index-key
        return <SectionItem section={section} key={section.to + index} />;
      })}
      <div className="sections-signature">
        <DirectionsBoatIcon />
        <span>MS Berna</span>
      </div>
    </div>
  );
};

export default SectionsComponent;
