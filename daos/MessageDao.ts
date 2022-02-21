/**
 * @file Implements DAO managing data storage of messages. Uses mongoose MessageModel
 * to integrate with MongoDB
 */
import MessageDaoI from "../interfaces/MessageDaoI";
import MessageModel from "../mongoose/messages/MessageModel";
import Message from "../models/messages/Message";

/**
 * @class MessageDao Implements Data Access Object managing data storage
 * of Messages
 * @implements {MessageDaoI} MessageDaoI
 * @property {MessageDao} messageDao Private single instance of MessageDao
 */
export default class MessageDao implements MessageDaoI {
    private static messageDao: MessageDao | null = null;
    public static getInstance = (): MessageDao => {
        if(MessageDao.messageDao === null) {
            MessageDao.messageDao = new MessageDao();
        }
        return MessageDao.messageDao;
    }
    private constructor() {}
    findAllMessagesSentByUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({from: uid})
            .populate("to")
            .exec();
    findAllMessagesSentToUser = async (uid: string): Promise<Message[]> =>
        MessageModel
            .find({to: uid})
            .populate("from")
            .exec();
    userSendsMessage = async (source_uid: string, target_uid: string, message: Message): Promise<Message> =>
        MessageModel.create({...message, to: target_uid, from: source_uid});
    userDeletesOneMessage = async (mid: string): Promise<any> =>
        MessageModel.deleteOne({_id:mid});
    userDeletesAllSentMessage = async (uid: string): Promise<any> =>
        MessageModel.deleteMany({from: uid})
    userDeletesAllReceivedMessage = async (uid: string): Promise<any> =>
        MessageModel.deleteMany({to: uid})
}