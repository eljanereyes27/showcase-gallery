# Server setup

1. Copy `.env.example` to `.env` in this folder.
2. Replace the `MONGO_URI` placeholder with your MongoDB connection string. For MongoDB Atlas, create a database user and allow your IP address in Network Access. URL-encode any special characters in the username or password.
3. From this folder, run:

   ```sh
   npm install
   npm start
   ```

Keep `.env` private; it contains database credentials and is ignored by Git.
