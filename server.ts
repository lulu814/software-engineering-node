/**
 * @file Server file
 */

import express from 'express';
import mongoose from 'mongoose';
// mongoose.connect('mongodb://localhost:27017/tuit-db');
mongoose.connect('mongodb+srv://lilaliu:CS5500lila@cluster0.i1c3p.mongodb.net/tuit-db?retryWrites=true&w=majority');
import bodyParser from "body-parser";
import UserController from './controllers/UserController';
import TuitController from "./controllers/TuitController";
import LikeController from "./controllers/LikeController";

const app = express();
app.use(bodyParser.json())

const userController = UserController.getInstance(app);
const tuitController = TuitController.getInstance(app);
const likesController = LikeController.getInstance(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);