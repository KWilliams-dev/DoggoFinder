import mongoose from "mongoose";

const DoggoPostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    dogName: {
        type: String,
        required: false,
        default: "unknown"
    },
    dogColor: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: false,
        default: "mixed breed",
    },
    details: {
        type: String,
        required: true,
    },
    dogPicturePath: String,
    userPicturePath: String,
    location: String,
    rabiesNum: String,
    lostOrFound: {
        type: String,
        required: true,
    }
})

const DoggoPost = mongoose.model("DoggoPost", DoggoPostSchema);
export default DoggoPost;