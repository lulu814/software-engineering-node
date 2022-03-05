import User from "../users/User";
import Stats from "./Stats";

// export default class Tuit {
//     private tuit: string = '';
//     private postedOn: Date = new Date();
//     private postedBy: User | null = null;
// }


export default interface Tuit {
    tuit: string,
    postedBy: User
    postedOn?: Date,
    image?: String,
    youtube?: String,
    avatarLogo?: String,
    imageOverlay?: String,
    stats: Stats
};