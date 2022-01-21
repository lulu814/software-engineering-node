import express from 'express';
import mongoose from 'mongoose';
import UserController from './controllers/UserController';
import UserDao from "./daos/UserDao";
import TuitController from "./controllers/TuitController";
import TuitDao from './daos/TuitDao';

const app = express();
app.use(express.json());
const userDao = new UserDao();
// mongoose.connect('mongodb://localhost:27017/tuit-db');
let userController: UserController;
userController = new UserController(app, userDao);
let tuitController: TuitController;
tuitController = new TuitController(app, new TuitDao());

app.get('/hello', (req, res) =>
    res.send('Hello World!'));

const PORT = 4000;
app.listen(PORT);