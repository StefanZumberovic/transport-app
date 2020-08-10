import React, { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainForm from '../components/MainForm/MainForm';
import AdditionalOptions from '../components/AdditionalOptions/AdditionalOptions';
import SectionsComponent from '../components/SectionsComponent/SectionsComponent';
import GeneralInformation from '../components/GeneralInformation/GeneralInformation';
import { getConnections } from '../services/http/HttpService';

import './MainPage.css';

interface ParamsInterface {
  params: {
    from: string;
    to: string;
    transportations?: string;
  };
}

const MainPage: React.FC = () => {
  const [connections, setConnections] = useState<any[]>();
  const [trainTransport, setTrainTransport] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const renderSections = () => {
    if (!connections || !connections.length) {
      return null;
    }
    const connection = connections[0];
    const { duration, transfers } = connection;
    return (
      <>
        <GeneralInformation duration={duration} transfers={transfers} />
        <SectionsComponent sections={connection.sections} />
      </>
    );
  };

  const submitForm = (formParams: { from: string; to: string }) => {
    setError(false);
    setLoading(true);
    setConnections([]);
    const params: ParamsInterface = { params: formParams };
    if (trainTransport) {
      // eslint-disable-next-line no-param-reassign
      params.params.transportations = 'train';
    }

    getConnections(params)
      .then((connectionsResponse) => {
        setConnections(connectionsResponse.data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div className="main-page">
      <MainForm submitForm={submitForm} />
      <AdditionalOptions setTrainTransport={setTrainTransport} />
      {loading && (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
      {error && <div className="main-error">Something went wrong, please try again</div>}
      {connections && !!connections.length && !loading && !error && renderSections()}
    </div>
  );
};

export default MainPage;
