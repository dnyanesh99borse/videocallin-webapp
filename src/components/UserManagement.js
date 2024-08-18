import React, { useState } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { name: 'John Doe', role: 'Host' },
    { name: 'Jane Smith', role: 'Participant' },
  ]);

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
