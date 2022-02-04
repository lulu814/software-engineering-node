import User from "../users/User";

export default class Tuit {
    private tuit: string = '';
    private postedOn: Date = new Date();
    private postedBy: User | null = null;
}


// export default interface Tuit {
//     tuit: string,
//     postedBy: User
//     postedOn?: Date,
// };