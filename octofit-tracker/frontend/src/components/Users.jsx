import { useEffect, useState } from 'react';
import { apiBase, normalizeCollection } from '../api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch(`${apiBase}/api/users/`);
      const payload = await response.json();
      setUsers(normalizeCollection(payload, 'users'));
    }

    loadUsers();
  }, []);

  return (
    <main className="container py-4">
      <h1>Users</h1>
      <div className="list-group">
        {users.map((user) => (
          <article className="list-group-item" key={user._id ?? user.id ?? user.username}>
            <h2 className="h5 mb-1">{user.displayName ?? user.username}</h2>
            <p className="mb-0 text-body-secondary">{user.email} · {user.teamName}</p>
          </article>
        ))}
      </div>
    </main>
  );
}