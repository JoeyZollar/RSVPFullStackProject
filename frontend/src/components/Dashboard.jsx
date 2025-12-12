import { useState, useEffect } from 'react';
import { getAllEvents, rsvpToEvent, unRsvpToEvent, deleteEvent } from '../api/events';
import EventItem from './EventItem';
import { getUserById } from '../api/users';

const Dashboard = ({ setPage, user }) => {
  // State for all events
  const [events, setEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
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

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteEvent(eventId);

      setEvents(events.filter(event => event._id !== eventId));
      setUserEvents(userEvents.filter(event => event._id !== eventId));

    } catch (error) {
      console.error(error);
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUserEvents(null);
    setPage('login')
  }

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fullUser = await getUserById(user._id);

        setUserEvents(fullUser.events); // Store the users events into the state
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className='dashboard-container'>
      <header>
        <p> Welcome {user.username}</p>
        <button onClick={() => setPage('createevent')}>Create Event</button>
        <button onClick={() => handleLogout()}>Log out</button>
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
        <section className='created-events'>
          <h2>Your Events</h2>

          {userEvents.length === 0 ? (
            <p>You haven't created any events yet.</p>
          ) : (
            userEvents.map(event => (
              <EventItem
                key = {event._id}
                user = {user}
                event = {event}
                onDelete={() => handleDeleteEvent(event._id)}
              />
            ))
          )}
        </section>
        <section className='browse-events'>
          <h2>Browse Events</h2>

          {events.length === 0 ? (
            <p>No events yet.</p>
          ) : (
            events
            .filter(event => event.owner !== user._id) // Filter out events that user owns
            .map(event => (
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
