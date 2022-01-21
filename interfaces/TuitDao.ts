import Tuit from "../models/Tuit";

export default interface TuitDao {
    findAllTuits(): Promise<Tuit[]>;
    findTuitsByUser(uid: string): Promise<Tuit[]>;
    findTuitsById(tid: string): Promise<Tuit>;
    createTuits(tuit: Tuit): Promise<void>;
    updateTuits(tid: string, tuit: Tuit): Promise<any>;
    deleteTuits(tid: string): Promise<any>;
}