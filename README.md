# Campus Equipment Inventory

Practice starter for tracing a failed request across Nginx, Node.js and PostgreSQL. Follow your assignment for the investigation.

Use Docker with Compose v2. Run `docker compose up -d --build --wait` from this directory, then request `http://127.0.0.1:8092/api/inventory`. `--wait` returns when the database is ready and the app is listening. It does not test the inventory page; that is your job.

This disposable stack uses dummy data and PostgreSQL trust authentication to avoid distributing credentials. Only Nginx is published, on loopback. Do not deploy this setup or attach other containers to its network.
