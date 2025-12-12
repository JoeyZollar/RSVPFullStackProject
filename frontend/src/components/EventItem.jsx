const EventItem = ({ event, onRsvp }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>

      <div>
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Place:</strong> {event.place}</p>
      </div>

      {event.description && (
        <p className="description">{event.description}</p>
      )}

      <div className="event-card-actions">
          <button onClick={() => onRsvp(event._id)}>RSVP</button>
      </div>
    </div>
  );
};

export default EventItem;
