const config = {
  paths: {
    apiBaseUrl: process.env.REACT_APP_HOST === 'true' ? "http://localhost:5000/api" : "/api"
  }
};

export default config;
