import mongoose from "mongoose";

const LocationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number
});

export default LocationSchema;