// Imports
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

/**
 * Declare Important Variables
 */
const name = process.env.NAME;
//Depending on the service you will use to host your website in the future, 
//you will need to change this hardcoded value to the number supported by that service.
const PORT = process.env.PORT || 3000; 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Setup Express Server
 */
const app = express();

/**
 * Configure Express middleware
 */

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Declare Routes
 */
app.get('/', (req, res) => {
    res.send(`Hello, ${name}!`); // <-- UPDATED
});

app.get('/new-route', (req, res) => {
    res.send('This is a new route!');
});

app.get('/hello', (req, res) => {
    res.send('This is the hello page');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});