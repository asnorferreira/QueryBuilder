import express from 'express';
import { knexI } from './connection.js'

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const agenda = await knexI('agenda');
    return res.status(201).json(agenda);
});

app.listen(3000);