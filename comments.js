// Create a web server
// 1. create a new express app
// 2. create a route handler for GET requests to '/'
// 3. send back some HTML

// 1. create a new express app
const express = require('express');
const app = express();
const port = 3000;

// 2. create a route handler for GET requests to '/'
app.get('/', (req, res) => {
    // 3. send back some HTML
    res.send(`
    <div>
        <form>
            <input placeholder="email" />
            <input placeholder="password" />
            <input placeholder="password confirmation" />
            <button>Sign Up</button>
        </form>
    </div>
    `);
});

// 4. listen on port 3000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
