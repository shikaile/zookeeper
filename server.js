const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const {animals} = require('./data/animals.json');

const fs =require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
//tells express specific folder to make available 
app.use(express.static('public'));
// routes to external folders need to go after use of static
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, ()=> {
    console.log(`API server on port ${PORT}`);;
});

