const express = require('express');
const routes  = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis',{
    useNewUrlParser: true,
});



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes());
//modo dev

//app.listen(5000);
//modo production

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 5000;
//iniciar app
app.listen(port,host,()=>{
    console.log(`Server is running on port ${port}`);
});