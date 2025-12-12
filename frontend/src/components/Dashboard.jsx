import { useState, useEffect } from 'react';
import { getAllEvents, rsvpToEvent, unRsvpToEvent } from '../api/events';
import EventItem from './EventItem';

const Dashboard = ({ setPage, user }) => {
  // State for all events
  const [events, setEvents] = useState([]);
  const rsvpEvents = events.filter(event =>
    event.rsvps?.includes(user._id)
  );

  const handleRsvp = async (eventId) => {
    try {
      const updatedEvent = await rsvpToEvent(eventId, user._id);

      // Update the state to show most current rsvp's
      setEvents(prevEvents =>
        // Find the event the user rsvp'd for and replace it with the new one
        prevEvents.map(event =>
          event._id === updatedEvent._id ? updatedEvent : event
        )
      );

    } catch (error) {
      console.error('RSVP failed:', error);
    }
  };

  const handleUnRsvp = async (eventId) => {
    try {
      const updatedEvent = await unRsvpToEvent(eventId, user._id);

      // Update the state to show most current rsvp's
      setEvents(prevEvents =>
        // Find the event the user rsvp'd for and replace it with the new one
        prevEvents.map(event =>
          event._id === updatedEvent._id ? updatedEvent : event
        )
      );

    } catch (error) {
      console.error('UnRSVP failed:', error);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getAllEvents();
        setEvents(response);
      } catch (error) {
        console.error("Failed to get events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className='dashboard-container'>
      <header>
        <p> Welcome {user.username}</p>
        <button onClick={() => setPage('createevent')}>Create Event</button>
      </header>
      <main>
        <section className='rsvp-events'>
          <h2>Your RSVPs</h2>

          {rsvpEvents.length === 0 ? (
            <p>You haven't RSVP'd to any events yet.</p>
          ) : (
            rsvpEvents.map(event => (
              <EventItem
                key = {event._id}
                user = {user}
                event = {event}
                onUnRsvp = {() => handleUnRsvp(event._id)}
              />
            ))
          )}
        </section>
        <section className='browse-events'>
          <h2>Browse Events</h2>

          {events.length === 0 ? (
            <p>No events yet.</p>
          ) : (
            events.map(event => (
              <EventItem
                key = {event._id}
                event = {event}
                user = {user}
                onRsvp = {() => handleRsvp(event._id)}
                onUnRsvp = {() => handleUnRsvp(event._id)}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
