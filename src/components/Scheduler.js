import React, { useState } from 'react';

const Scheduler = () => {
  const [meetings, setMeetings] = useState([]);

  const scheduleMeeting = () => {
    const newMeeting = prompt('Enter meeting title:');
    if (newMeeting) {
      setMeetings([...meetings, newMeeting]);
    }
  };

  return (
    <div>
      <h2>Scheduler</h2>
      <button onClick={scheduleMeeting}>Schedule a Meeting</button>
      <ul>
        {meetings.map((meeting, index) => (
          <li key={index}>{meeting}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scheduler;
