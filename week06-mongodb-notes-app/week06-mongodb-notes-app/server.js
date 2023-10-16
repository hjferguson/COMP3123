const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');
const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Docker container URL
const DB_URL = "mongodb://localhost:27017/gbc-fall2020";

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true  // To use the new Server Discover and Monitoring engine
})
.then(() => {
    console.log("Successfully connected to the MongoDB Docker container");

    // Initialize routes after database connection is established
    app.use('/notes', noteRoutes);

    app.get('/', (req, res) => {
        res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
    });

    // Start server
    app.listen(8081, () => {
        console.log("Server is listening on port 8081");
    });

})
.catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
