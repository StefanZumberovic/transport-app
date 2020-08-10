## Running the project


### Running the project with docker

Open the project folder transport-app and run docker-compose up.<br />
This will also run tests and display the results in the same docker output.<br />

Open the browser window and go to localhost:3000, this will open the app once docker builds and runs the images.<br />

To test the endpoint with Swagger UI, simply go to localhost:3000/api-docs.<br />

The app in docker runs behind nginx, so all routes are on port 3000.<br />

### Running the project outside of docker

#### Running in windows os

To run the React app outside of docker, go to the React app folder transport-client, and run
'npm run start:windows'. This will open the React app on localhost:3000 in your browser window.<br />

To run the backend app, go to the transport-api folder, and run 'npm run dev'. This will start the 
server on localhost:5000.<br />

To test the endpoint with Swagger UI, simply go to localhost:5000/api-docs.<br />

To run the backend test runner, in the transport-api folder run 'npm run test'. This will run tests for the backend.<br />

#### Running in macOS or Linux

The same steps apply as running the app on windows, with the exception of the command to run the React app.
To run React, go to the React app folder transport-client, and run 'npm run start:unix' (not tested!). <br />