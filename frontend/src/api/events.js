// Base URL for all API calls - change this for deployment
const API_URL = import.meta.env.VITE_API_BASE_URL;

// Get all events
export const getAllEvents = async () => {
  const response = await fetch(`${API_URL}/api/events`);
  if (!response.ok) {
    throw new Error('Failed to fetch events.');
  }
  return response.json();
};

// RSVP for event
export const rsvpToEvent = async (eventId, userId) => {
  const response = await fetch(`${API_URL}/api/events/${eventId}/rsvp`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId })
  });

  if (!response.ok) {
    throw new Error('Failed to RSVP for event.')
  }
  return response.json();
};

// UnRSVP for event
export const unRsvpToEvent = async (eventId, userId) => {
  const response = await fetch(`${API_URL}/api/events/${eventId}/unrsvp`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userId })
  });

  if (!response.ok) {
    throw new Error('Failed to un-RSVP for event.')
  }
  return response.json();
};

// Delete event
export const deleteEvent = async (eventId) => {
  const response = await fetch(`${API_URL}/api/events/${eventId}`, {
    method: 'DELETE'
  });
  if (!response.ok) throw new Error('Failed to delete event');
  return response.json();
}

// Create new event
export const createEvent = async (eventData) => {
  const response = await fetch(`${API_URL}/api/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    throw new Error('Failed to create event.');
  }
  return response.json();
};
