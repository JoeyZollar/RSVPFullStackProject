const EventItem = ({ event, user, onRsvp, onUnRsvp }) => {
  const isRsvped = event.rsvps?.includes(user._id);

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
        {isRsvped ? (
            <button onClick={() => onUnRsvp(event._id)}>Un-RSVP</button>
        ) : (
            <button onClick={() => onRsvp(event._id)}>RSVP</button>
        )}
      </div>
    </div>
  );
};

export default EventItem;
