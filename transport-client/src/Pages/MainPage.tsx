import React, { useState, useEffect } from 'react';
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
  const [submitForm, setSubmitForm] = useState<{ from: string; to: string } | null>(null);
  const [trainTransport, setTrainTransport] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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

  useEffect(() => {
    if (submitForm) {
      setLoading(true);
      setConnections([]);
      const params: ParamsInterface = { params: submitForm };
      if (trainTransport) {
        params.params.transportations = 'train';
      }

      getConnections(params).then((connectionsResponse) => {
        setSubmitForm(null);
        setConnections(connectionsResponse.data);
        setLoading(false);
      });
    }
  }, [submitForm, trainTransport]);

  return (
    <div className="main-page">
      <MainForm setSubmitForm={setSubmitForm} />
      <AdditionalOptions setTrainTransport={setTrainTransport} />
      {loading && (
        <div className="loader">
          <CircularProgress />
        </div>
      )}
      {connections && !!connections.length && !loading && renderSections()}
    </div>
  );
};

export default MainPage;
