import mongoose from "mongoose";

const TuitSchema = new mongoose.Schema({
    tuit: {type: String, required: true},
    postedOn: Date,
    postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, {collection: 'tuits'});
export default TuitSchema;

