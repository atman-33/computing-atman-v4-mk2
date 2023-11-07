'use client';

import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
};

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('./api/users');
      const data = await response.json();
      setUsers(data.users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="mt-8">
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
