# LUCT Reporting - Demo Monorepo

This repo contains:
- `frontend/` - Vite + React frontend (Bootstrap)
- `api/` - simple Node.js serverless-style functions for demo
- `db.json` - simple JSON "database" used locally (NOT persistent on Vercel)

**Important production notes**
- Vercel serverless functions do NOT provide a persistent filesystem. Storing data by writing files inside functions will not be reliable in production. Use a managed database (Postgres, MySQL, Firebase, Supabase, etc.) for persistence. See Vercel docs for details.  

## Local development

### Frontend
```
cd frontend
npm install
npm run dev
```
Frontend will run at http://localhost:5173

### Backend (local testing)
The `api/reports.js` is written in Node.js style compatible with Vercel serverless functions.
To test locally you can run a tiny express wrapper:

```
# from repo root
npm init -y
npm install express
node tools/local-server.js
```

Then open http://localhost:3000/api/reports

## Deploying to Vercel (demo)
- Create a new Vercel project and import this repository.
- Vercel will build the frontend and expose the functions under `/api/*`.
- **Warning:** writing to `db.json` from serverless functions is not reliable on Vercel. Use an external DB for real deployments. See Vercel docs: https://vercel.com/docs/functions/limitations

## References
- Vite getting started guide: https://vite.dev/guide/
- Deploying React with Vercel: https://vercel.com/guides/deploying-react-with-vercel
- Vercel functions limitations and persistence notes: https://vercel.com/docs/functions/limitations

