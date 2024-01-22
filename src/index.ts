import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { authorRouter } from './routes/authorRoute';
import Author from './schemas/authorSchema';
import bodyParser from 'body-parser';



//For env File 
dotenv.config();

mongoose.connect(`${process.env.DB_URL}`)
    .then(() => console.log('database is connected!'));

const app: Application = express();
const port = process.env.PORT || 8000;


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routers
app.use(authorRouter)


app.get('/', (_req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});



app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});