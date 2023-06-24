const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('express').Router();
const tasks = require('./routes/tasks');

const taskManager = express();
taskManager.use(cors());
taskManager.use(routes);
taskManager.use(bodyParser.urlencoded({extended : false}));
taskManager.use(bodyParser.json());


const PORT = 3000;

routes.get('/', (req,res) => {
    res.status(200).send("Welcome to Task Manager API");
});

routes.use('/tasks',tasks);

taskManager.listen(PORT, (err)=> {
    if(!err) {
        console.log("Server is successfully started");
    } else {
        console.log("Some error has come");
    }
});