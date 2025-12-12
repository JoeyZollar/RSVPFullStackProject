import { useState } from 'react';
import { createEvent } from '../api/events';

const CreateEvent = ({ setPage, user }) => {
  const [form, setForm] = useState({
    title: '',
    date: '',
    time: '',
    place: '',
    description: '',
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newEvent = await createEvent({
        userId: user._id,
        title: form.title,
        date: form.date,
        time: form.time,
        place: form.place,
        description: form.description
      });

      console.log('New event created:', newEvent);
      alert('Event created!');

      setPage('dashboard');
    } catch (error) {
      console.error('Failed to create event:', error)
    }
  };

  return (
    <div className='create-event'>
      <header>
        <p> Create a new event {user.username}</p>
        <button onClick={() => setPage('dashboard')}>Dashboard</button>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input type='text' name='title' placeholder='Event Title' value={form.title} onChange={handleChange} required/>
          <input type='number' name='date' placeholder='Date (ex:10102025' value={form.date} onChange={handleChange} required/>
          <input type='text' name='time' placeholder='Time (ex: 2:00pm)' value={form.time} onChange={handleChange} required/>
          <input type='text' name='place' placeholder='Place' value={form.place} onChange={handleChange} required/>
          <input type='text' name='description' placeholder='Description (optional)' value={form.description} onChange={handleChange}/>
          <button type='submit'>Create Event</button>
        </form>
      </main>
    </div>
  );
};

export default CreateEvent;