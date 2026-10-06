import { useEffect, useState } from 'react';
import { apiBase, normalizeCollection } from '../api';

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    async function loadActivities() {
      const response = await fetch(`${apiBase}/api/activities/`);
      const payload = await response.json();
      setActivities(normalizeCollection(payload, 'activities'));
    }

    loadActivities();
  }, []);

  return (
    <main className="container py-4">
      <h1>Activities</h1>
      <div className="list-group">
        {activities.map((activity) => (
          <article className="list-group-item" key={activity._id ?? activity.id ?? `${activity.user}-${activity.type}`}>
            <h2 className="h5 mb-1">{activity.type ?? activity.name}</h2>
            <p className="mb-0 text-body-secondary">
              {activity.user} · {activity.durationMinutes} minutes · {activity.caloriesBurned} calories
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}