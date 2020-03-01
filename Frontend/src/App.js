import React from 'react';
import './App.scss';

import Navigation from './components/Navigation//Navigation';
import Form from './components/Form/Form';

import Container from './components/Container/Container';

function App() {
  return (
    <div className="App container">
    <Navigation />
    <Container />

    </div>
  );
}

export default App;
