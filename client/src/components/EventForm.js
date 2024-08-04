import React, { useState } from 'react';
import axios from 'axios';

function EventForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/events', { title, description, date, location });
      alert('Event created successfully!');
      setTitle('');
      setDescription('');
      setDate('');
      setLocation('');
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Error creating event');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Event</h2>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <input 
        type="datetime-local" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Location" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        required 
      />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;