import {Request, Response} from "express";

export default interface UserController {
    findAllUsers(req: Request, res: Response): void;
    findUserById(req: Request, res: Response): void;
}