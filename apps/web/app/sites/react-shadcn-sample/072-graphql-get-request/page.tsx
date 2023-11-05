'use client';

import { SampleUser } from '@libs/web/data-access-graphql';
import { useEffect, useState } from 'react';
import { getUsers } from './api/user';

const Page = () => {
  const [users, setUsers] = useState<SampleUser[]>([]);

  // You cannot use async on the callback function of useEffect.
  // If you want to use async, you can add it to the function defined inside useEffect.
  useEffect(() => {
    console.log('useEffect is called');

    // ---- Pattern 1 ---- //
    // getUsers().then((res) => {
    //   console.log(res.data.sampleUsers);
    // })

    // ---- Pattern 2 ---- //
    const fetchUsers = async () => {
      const res = await getUsers();
      // console.log(res.data.sampleUsers);
      setUsers(res.data.sampleUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div className="mt-8">
      <ul>
        {users.map((user) => {
          return (
            <div key={user._id} className="m-4">
              <h3 className="font-medium">{user.username}</h3>
              <p>age: {user.age}</p>
              <p>hobbies: {user.hobbies?.join(', ')}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Page;
