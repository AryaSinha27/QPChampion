import React from 'react';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <RegistrationPage />
    </div>
  );
}

export default App;
