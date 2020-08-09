import axios from 'axios';
import config from '../../config/config.json';

interface ParamsInterface {
  params: {
    from: string;
    to: string;
    transportations?: string;
  };
}

const getConnections = (params: ParamsInterface) => {
  const {
    paths: { apiBaseUrl: baseUrl },
  } = config;
  return axios.get(`${baseUrl}/connections`, params);
};

export { getConnections };
