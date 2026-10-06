import { useEffect, useState } from 'react';
import { apiBase, normalizeCollection } from '../api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function loadWorkouts() {
      const response = await fetch(`${apiBase}/api/workouts/`);
      const payload = await response.json();
      setWorkouts(normalizeCollection(payload, 'workouts'));
    }

    loadWorkouts();
  }, []);

  return (
    <main className="container py-4">
      <h1>Workouts</h1>
      <div className="row g-3">
        {workouts.map((workout) => (
          <article className="col-md-4" key={workout._id ?? workout.id ?? workout.name}>
            <div className="border rounded p-3 h-100">
              <h2 className="h5">{workout.name}</h2>
              <p className="mb-1">{workout.focus} · {workout.difficulty}</p>
              <p className="mb-0 text-body-secondary">{workout.durationMinutes} minutes</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}