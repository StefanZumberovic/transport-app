import React, { useState } from 'react';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DirectionsRailwayIcon from '@material-ui/icons/DirectionsRailway';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NavigationIcon from '@material-ui/icons/Navigation';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import './SectionItem.css';

interface SectionItemProps {
  section: any;
}

const SectionItem: React.FC<SectionItemProps> = ({ section }) => {
  const [openStations, setOpenStations] = useState<boolean>(false);
  const { duration, method, name, to, type, stations, passList } = section;

  const mapSectionIcon = () => {
    switch (type) {
      case 'walk':
        return <DirectionsWalkIcon />;
      case 'tram':
        return <DirectionsRailwayIcon />;
      case 'train':
        return <DirectionsTransitIcon />;
      case 'bus':
        return <DirectionsBusIcon />;
      default:
        return <NavigationIcon />;
    }
  };

  const createSectionName = () => {
    return (
      <div className="section-name">
        {method} {name && <span>{name}</span>} to {to}
      </div>
    );
  };

  const additionalInformation = () => {
    return (
      <div className="additional-information">
        {duration && <div className="section-duration">{duration}</div>}
        {stations && <div className="section-stations">{stations} stations</div>}
      </div>
    );
  };

  const expandButton = () => {
    return (
      <div
        className="expand-button"
        onClick={(e) => setOpenStations(!openStations)}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        {openStations ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </div>
    );
  };

  const createPassingStations = () => {
    interface PassStationType {
      arrival: number;
      stationName: string;
    }

    const formatArrivalTime = (arrival: number) => {
      return new Date(arrival * 1000).toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
      });
    };
    const stationsList = passList.map(
      ({ arrival, stationName }: PassStationType, index: number) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <div className="passing-station" key={stationName + index}>
            <div className="passing-arrival">
              <span>{formatArrivalTime(arrival)}</span>
            </div>
            <div className="passing-station-name">{stationName}</div>
          </div>
        );
      }
    );
    return (
      <div className={`passing-stations-list${openStations ? ' open-stations-list' : ''}`}>
        {stationsList}
      </div>
    );
  };

  return (
    <div className="section-item">
      <div className="section-item-main-content">
        <div className="section-icon">{mapSectionIcon()}</div>
        <div className="section-main-info">
          {createSectionName()}
          {additionalInformation()}
        </div>
        {passList && expandButton()}
      </div>
      {passList && createPassingStations()}
    </div>
  );
};

export default SectionItem;
