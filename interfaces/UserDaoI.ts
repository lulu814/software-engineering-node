import User from "../models/users/User";

//interface that defines the contract the UserDaoI will implement
export default interface UserDaoI {
    findAllUsers(): Promise<User[]>;
    findUserById(uid: string): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(uid: string, user: User): Promise<any>;
    deleteUser(uid: string): Promise<any>;
}
