import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function CacheQuery() {
  const [text, setText] = useState<string>('');

  const fetchUsers = async (): Promise<User[]> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  };

  // ✅ v5 syntax: pass an object with queryKey + queryFn
  const { data, error, isLoading } = useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <>
      <div>
        <h1>Users List</h1>
        <ul>
          {data?.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Enter text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button
          onClick={() => {
            console.log('Clicked:', text);
          }}
        >
          Click Me
        </button>
      </div>
    </>
  );
}
