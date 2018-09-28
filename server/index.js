require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller');
const massive = require('massive');

app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('connected to DB')
    })
    .catch((err) => {
        console.log(err)
    })

//>>>>>>>>>>>>CRUD<<<<<<<<<<<

    app.get('/api/inventory', (req, res) =>{
        res.status(200).send('Get em')
    })

const PORT = process.env.PORT;
app.listen(PORT, console.log(`listening on port ${PORT}`))