import mongoose from 'mongoose';
import { connectionString } from '../config/database';
import { Activity, Leaderboard, Team, User, Workout } from '../models';

const users = [
  {
    username: 'maya.chen',
    email: 'maya.chen@example.com',
    displayName: 'Maya Chen',
    role: 'runner',
    teamName: 'Turbo Turtles',
    weeklyGoalMinutes: 240,
  },
  {
    username: 'jordan.lee',
    email: 'jordan.lee@example.com',
    displayName: 'Jordan Lee',
    role: 'cyclist',
    teamName: 'Cardio Crew',
    weeklyGoalMinutes: 300,
  },
  {
    username: 'samira.patel',
    email: 'samira.patel@example.com',
    displayName: 'Samira Patel',
    role: 'strength coach',
    teamName: 'Core Crushers',
    weeklyGoalMinutes: 210,
  },
];

const teams = [
  { name: 'Turbo Turtles', mascot: 'Turtle', coach: 'Maya Chen', memberCount: 8, weeklyPoints: 1840 },
  { name: 'Cardio Crew', mascot: 'Lightning Bolt', coach: 'Jordan Lee', memberCount: 10, weeklyPoints: 2210 },
  { name: 'Core Crushers', mascot: 'Kettlebell', coach: 'Samira Patel', memberCount: 7, weeklyPoints: 1695 },
];

const activities = [
  {
    user: 'Maya Chen',
    team: 'Turbo Turtles',
    type: 'Trail run',
    durationMinutes: 46,
    caloriesBurned: 430,
    activityDate: new Date('2026-10-04T07:30:00Z'),
  },
  {
    user: 'Jordan Lee',
    team: 'Cardio Crew',
    type: 'Indoor cycling',
    durationMinutes: 55,
    caloriesBurned: 610,
    activityDate: new Date('2026-10-05T18:15:00Z'),
  },
  {
    user: 'Samira Patel',
    team: 'Core Crushers',
    type: 'Strength circuit',
    durationMinutes: 40,
    caloriesBurned: 360,
    activityDate: new Date('2026-10-06T06:45:00Z'),
  },
];

const leaderboard = [
  { rank: 1, user: 'Jordan Lee', team: 'Cardio Crew', points: 920, activityMinutes: 315 },
  { rank: 2, user: 'Maya Chen', team: 'Turbo Turtles', points: 810, activityMinutes: 274 },
  { rank: 3, user: 'Samira Patel', team: 'Core Crushers', points: 760, activityMinutes: 245 },
];

const workouts = [
  {
    name: 'Morning Mobility Primer',
    focus: 'Mobility',
    difficulty: 'beginner',
    durationMinutes: 20,
    exercises: ['World greatest stretch', 'Hip airplanes', 'Thoracic rotations'],
    suggestedFor: 'Recovery days and warmups',
  },
  {
    name: 'Lunch Break HIIT',
    focus: 'Conditioning',
    difficulty: 'intermediate',
    durationMinutes: 28,
    exercises: ['Jump squats', 'Mountain climbers', 'Burpees', 'Plank jacks'],
    suggestedFor: 'Short high-energy sessions',
  },
  {
    name: 'Strength Builder',
    focus: 'Strength',
    difficulty: 'advanced',
    durationMinutes: 45,
    exercises: ['Goblet squats', 'Romanian deadlifts', 'Push presses', 'Renegade rows'],
    suggestedFor: 'Athletes building full-body power',
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const [createdUsers, createdTeams, createdActivities, createdLeaderboard, createdWorkouts] = await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      Leaderboard.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete', {
      users: createdUsers.length,
      teams: createdTeams.length,
      activities: createdActivities.length,
      leaderboard: createdLeaderboard.length,
      workouts: createdWorkouts.length,
    });
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
