// Imports
import express from 'express';

/**
 * Declare Important Variables
 */
const name = process.env.NAME; // <-- NEW

const PORT = process.env.PORT || 3000; //Depending on the service you will use to host your website in the future, you will need to change this hardcoded value to the number supported by that service.
/**
 * Setup Express Server
 */
const app = express();
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