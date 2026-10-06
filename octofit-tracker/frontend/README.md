# OctoFit Tracker Frontend

For Codespaces, define `VITE_CODESPACE_NAME` in `.env.local` so the React app can reach the backend at `https://$VITE_CODESPACE_NAME-8000.app.github.dev`.

Local development falls back to `http://localhost:8000` when `VITE_CODESPACE_NAME` is unset.