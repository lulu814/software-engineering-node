import mongoose from "mongoose";
import LocationSchema from "./LocationSchema";
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, default: `testusername${Date.now()}`},
    password: {type: String, required: true, default: `testpassword${Date.now()}`},
    firstName: String,
    lastName: String,
    email: {type: String, required: true, default: `testemail${Date.now()}`},
    profilePhoto: String,
    headerImage: String,
    accountType: {type: String, default: 'PERSONAL', enum: ['PERSONAL', 'ACADEMIC', 'PROFESSIONAL']},
    maritalStatus: {type: String, default: 'SINGLE', enum: ['MARRIED', 'SINGLE', 'WIDOWED']},
    biography: String,
    dateOfBirth: Date,
    joined: {type: Date, default: Date.now},
    location: {type: LocationSchema}, // or just use location: {latitude: Number, longitude: Number}
}, {collection: 'users'});
export default UserSchema;

