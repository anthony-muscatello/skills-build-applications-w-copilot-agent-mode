import { Route, Routes } from 'react-router-dom';
import octofitLogo from '../../../docs/octofitapp-small.png';

function Home() {
  return (
    <main className="container py-5">
      <div className="d-flex align-items-center gap-3 mb-4">
        <img src={octofitLogo} alt="OctoFit Tracker logo" width="72" height="72" />
        <h1 className="mb-0">OctoFit Tracker</h1>
      </div>
      <p className="lead">Your fitness progress, all in one place.</p>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}