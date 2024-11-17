const express = require('express');
const mongodb = require('./data/database')
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', require('./routes/index'));

mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else{
        app.listen(process.env.PORT || port, () => {
            console.log('Database is listening and node running at port ' + (process.env.PORT || port));
          });
    }
})

