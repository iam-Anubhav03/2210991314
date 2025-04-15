import { useEffect, useState } from 'react';
import { getUsers } from '../api';

const TopUsers = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function fetchUsers() {
      const data = await getUsers();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Top Users</h1>
      <ul>
        {Object.entries(users).map(([id, name]) => (
          <li key={id} className="mb-2 p-2 bg-gray-100 rounded">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
