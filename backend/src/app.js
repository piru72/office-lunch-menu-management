const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routes/routes');
const dotEnv = require('dotenv');
const errorHandler = require('./handler/error');
const responseHandler = require('./handler/response');


// Load environment variables
dotEnv.config();

// Create a new Koa application and setup middllewares
const app = express();

// Middleware setup
app.use(cors());                                        
app.use(errorHandler);
app.use(responseHandler());
app.use(bodyParser.json());                            
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use(router);

// Start the server
app.listen(process.env.PORT || 8080 , () => {
    console.log('Server is running on port 8080');
});