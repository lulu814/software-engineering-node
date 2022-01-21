import Tuit from "../models/Tuit";
import TuitModel from "../mongoose/TuitModel";
import TuitDaoI from "../interfaces/TuitDao";

export default class TuitDao implements TuitDaoI {
    async findAllTuits(): Promise<Tuit[]> {
        return TuitModel.find();
    }

    async findTuitsById(tid: string): Promise<Tuit> {
        return TuitModel.findById(tid);
    }

    async findTuitsByUser(uid: string): Promise<Tuit[]> {
        return TuitModel.find({postedBy: uid})
    }

    async createTuits(tuit: Tuit): Promise<void> {
        return TuitModel.create(tuit);
    }

    async deleteTuits(tid: string): Promise<any> {
        return TuitModel.deleteOne({_id: tid});
    }

    async updateTuits(tid: string, tuit: Tuit): Promise<any> {
        return TuitModel.updateOne({_id: tid}, {$set: tuit});
    }
}