// Create a web server
// 1. Start the server and listen on port 3000
// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id

// 1. Start the server and listen on port 3000
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// 2. Create a route for GET /comments
// 3. Create a route for GET /comments/:id
// 4. Create a route for POST /comments
// 5. Create a route for PUT /comments/:id
// 6. Create a route for DELETE /comments/:id
