import { Link, NavLink, Route, Routes } from 'react-router-dom';
import octofitLogo from '../../../docs/octofitapp-small.png';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function Home() {
  return (
    <main className="container py-5">
      <div className="d-flex align-items-center gap-3 mb-4">
        <img src={octofitLogo} alt="OctoFit Tracker logo" width="72" height="72" />
        <h1 className="mb-0">OctoFit Tracker</h1>
      </div>
      <p className="lead">Your fitness progress, all in one place.</p>
      <Link className="btn btn-primary" to="/activities">View activities</Link>
    </main>
  );
}

function Navigation() {
  const links = [
    ['Activities', '/activities'],
    ['Leaderboard', '/leaderboard'],
    ['Teams', '/teams'],
    ['Users', '/users'],
    ['Workouts', '/workouts'],
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src={octofitLogo} alt="" width="32" height="32" />
          OctoFit
        </Link>
        <div className="navbar-nav flex-row flex-wrap gap-2">
          {links.map(([label, to]) => (
            <NavLink className="nav-link" key={to} to={to}>{label}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/users" element={<Users />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  );
}