import { useEffect, useState } from 'react';
import { apiBase, normalizeCollection } from '../api';

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function loadTeams() {
      const response = await fetch(`${apiBase}/api/teams/`);
      const payload = await response.json();
      setTeams(normalizeCollection(payload, 'teams'));
    }

    loadTeams();
  }, []);

  return (
    <main className="container py-4">
      <h1>Teams</h1>
      <div className="row g-3">
        {teams.map((team) => (
          <article className="col-md-4" key={team._id ?? team.id ?? team.name}>
            <div className="border rounded p-3 h-100">
              <h2 className="h5">{team.name}</h2>
              <p className="mb-1">Coach: {team.coach}</p>
              <p className="mb-0 text-body-secondary">{team.memberCount} members · {team.weeklyPoints} points</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}