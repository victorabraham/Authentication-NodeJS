import express from 'express';
import Sequelize from 'sequelize';
import passport from 'passport';

const app = express();


app.get('/', (req, res) => res.send('Hi'));

app.listen(3000, () => console.log('Basic app listening on port 3000!'));