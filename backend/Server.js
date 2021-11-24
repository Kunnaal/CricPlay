require ('dotenv').config();
const express = require('express');

const dbHandler = require('./Utils/DBHandler');
const authRouter = require('./Router/AuthRouter');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());
app.use('/api', authRouter);    //Router middleware

app.get('/', (req, res) => {
    res.send('<h1>DB @ '+( process.env.PORT || 8000 )+'</h1>')
});

dbHandler.then(connection => {
    if(connection) {
        console.log('Connected to DB.');
        app.listen( (process.env.PORT || 8000), () => {console.log('DB @ '+(process.env.PORT || 8000));} )
    }
})
.catch(err => {console.log(err);});