/**
 * @file Implements DAO managing data storage of follows. Uses mongoose FollowModel
 * to integrate with MongoDB
 */
import FollowDaoI from "../interfaces/FollowDaoI";
import FollowModel from "../mongoose/follows/FollowModel";
import Follow from "../models/follows/Follow";

/**
 * @class FollowDao Implements Data Access Object managing data storage
 * of Follows
 * @implements {FollowDaoI} FollowDaoI
 * @property {FollowDao} followDao Private single instance of FollowDao
 */
export default class FollowDao implements FollowDaoI {
    private static followDao: FollowDao | null = null;
    public static getInstance = (): FollowDao => {
        if(FollowDao.followDao === null) {
            FollowDao.followDao = new FollowDao();
        }
        return FollowDao.followDao;
    }
    private constructor() {}
    findAllUsersThatUserIsFollowing = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowing: uid})
            .populate("userFollowed")
            .exec();
    findAllUsersThatUserIsFollowedBy = async (uid: string): Promise<Follow[]> =>
        FollowModel
            .find({userFollowed: uid})
            .populate("userFollowing")
            .exec();
    userFollowsAnotherUser = async (source_uid: string, target_uid: string): Promise<Follow> =>
        FollowModel.create({userFollowing: source_uid, userFollowed: target_uid});
    userUnFollowsAnotherUser = async (source_uid: string, target_uid: string): Promise<any> =>
        FollowModel.deleteOne({userFollowing: source_uid, userFollowed: target_uid});
    userUnFollowsAllUsers = async (uid: string): Promise<any> =>
        FollowModel.deleteMany({userFollowing: uid})
    userDeletesAllFollowers = async (uid: string): Promise<any> =>
        FollowModel.deleteMany({userFollowed: uid})
}