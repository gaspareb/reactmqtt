# Getting Started with this ReactMQTT application

## Application Purpose 

This application was built in order to visualize the ability to render in a React application messages from a broker. The test used was using the HiveMQ Cloud. 

## You will need a .env file with the following items in it.  

REACT_APP_MQTTPORT=the port your broker is running on - Example: 8803 or 8804

REACT_APP_MQTTPROTOCOL=the protocol you are using to connect - Example: mqtts

REACT_APP_MQTTHOST=the host url you are connecting to - Example: something.cloud.blah.blah.blah

REACT_APP_MQTTUSERNAME= the username - Example: something

REACT_APP_MQTTPSSD = the password - Example: somethingReallyHardToGuess

REACT_APP_CLIENT_ID= the clientID you want to associate to this connection - Example: myClientID

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
