import React from 'react';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Calgary Events Hub</h1>
      <EventForm />
      <EventList />
    </div>
  );
}

export default App;