### Site Link: https://pccart-client.vercel.app/

### Server Link: https://pccart-server.onrender.com/

### GitHub Client Repo: https://github.com/ASSiddik01/PcCart_Client

### GitHub Server Repo: https://github.com/ASSiddik01/PcCart_Server

<hr>

### Project Features

<hr>

<ul>
    <li>User login by github & google authentication system</li>
    <li>In PC Builder page user can choose components for build PC</li>
    <li>Site is reponsive for desktop & mobile device</li>
    <li>State manage by react redux</li>
</ul>

### Instructions to run the projec

<hr>

> Pre requirement - Must be installed nodejs in your computer

<ol>
    <li>First clone the client and server repo</li>
    <li>Install all dependency for both project by - npm install</li>
    <li>After install the project make .env file for both project in the root directory. Env file example below </li>
    <li>Start both project by - npm run dev</li>
</ol>

> Client .env example:-

```bash
GITHUB_ID=replace_by_your_credentials
GITHUB_SECRET=replace_by_your_credentials
GOOGLE_ID=replace_by_your_credentials
GOOGLE_SECRET=replace_by_your_credentials
NEXTAUTH_SECRET=replace_by_your_credentials
NEXTAUTH_URL=local_site_url/production_site_url
NODE_ENV=developement(it will be production when it deploy)
SERVER_URL=local_server_url/production_server_url
```

> Server .env example:-

```bash
DB_URI="your_database_connection_url"
NODE_ENV=developement(it will be production when it deploy)
PORT=4000
```
