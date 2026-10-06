import { useEffect, useState } from 'react';
import { apiBase, normalizeCollection } from '../api';

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    async function loadLeaderboard() {
      const response = await fetch(`${apiBase}/api/leaderboard/`);
      const payload = await response.json();
      setLeaderboard(normalizeCollection(payload, 'leaderboard'));
    }

    loadLeaderboard();
  }, []);

  return (
    <main className="container py-4">
      <h1>Leaderboard</h1>
      <ol className="list-group list-group-numbered">
        {leaderboard.map((entry) => (
          <li className="list-group-item d-flex justify-content-between align-items-start" key={entry._id ?? entry.id ?? entry.rank}>
            <div>
              <h2 className="h5 mb-1">{entry.user}</h2>
              <p className="mb-0 text-body-secondary">{entry.team}</p>
            </div>
            <span className="badge text-bg-primary rounded-pill">{entry.points} pts</span>
          </li>
        ))}
      </ol>
    </main>
  );
}