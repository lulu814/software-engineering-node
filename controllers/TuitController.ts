import {Request, Response, Express} from "express";
import Tuit from "../models/tuits/Tuit";
import TuitDao from "../daos/TuitDao";
import TuitControllerI from "../interfaces/TuitControllerI";

export default class TuitController implements TuitControllerI {
    // app: Express;
    // tuitDao: TuitDao;
    //
    // constructor(app: Express, tuitDao: TuitDao) {
    //     this.app = app;
    //     this.tuitDao = tuitDao;
    //     this.app.get('/tuits', this.findAllTuits);
    //     this.app.get('/tuits/:tid', this.findTuitById);
    //     this.app.get('/users/:uid/tuits', this.findTuitsByUser);
    //     this.app.post('/tuits', this.createTuit);
    //     this.app.delete('/tuits/:tid', this.deleteTuit);
    //     this.app.put('/tuits/:tid', this.updateTuit);
    // }
    private static tuitDao: TuitDao = TuitDao.getInstance();
    private static tuitController: TuitController | null = null;
    public static getInstance = (app: Express): TuitController => {
        if(TuitController.tuitController === null) {
            TuitController.tuitController = new TuitController();
            app.get("/api/tuits", TuitController.tuitController.findAllTuits);
            app.get("/api/users/:uid/tuits", TuitController.tuitController.findAllTuitsByUser);
            app.get("/api/tuits/:tid", TuitController.tuitController.findTuitById);
            // app.post("/api/users/:uid/tuits", TuitController.tuitController.createTuitByUser);
            app.post("/api/tuits", TuitController.tuitController.createTuit);
            app.put("/api/tuits/:uid", TuitController.tuitController.updateTuit);
            app.delete("/api/tuits/:uid", TuitController.tuitController.deleteTuit);
        }
        return TuitController.tuitController;
    }

    private constructor() {}

    findAllTuits = (req: Request, res: Response) =>
        TuitController.tuitDao.findAllTuits()
            .then((tuits: Tuit[]) => res.json(tuits));
    findAllTuitsByUser = (req: Request, res: Response) =>
        TuitController.tuitDao.findAllTuitsByUser(req.params.uid)
            .then((tuits: Tuit[]) => res.json(tuits));
    findTuitById = (req: Request, res: Response) =>
        TuitController.tuitDao.findTuitById(req.params.tid)
            .then((tuit: Tuit) => res.json(tuit));
    createTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.createTuit(req.body)
            .then((tuit: Tuit) => res.json(tuit));
    updateTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.updateTuit(req.params.uid, req.body)
            .then((status) => res.send(status));
    deleteTuit = (req: Request, res: Response) =>
        TuitController.tuitDao.deleteTuit(req.params.uid)
            .then((status) => res.send(status));
}