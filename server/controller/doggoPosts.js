import DoggoPost from "../models/DoggoPost.js";
import User from "../model/User.js";

export const createPost = async (req, res) => {
  try {
    const {
      userId,
      dogName,
      dogColor,
      breed,
      details,
      dogPicturePath,
      location,
      rabiesNum,
      lostOrFound
    } = req.body;

    const user = await User.findById(userId);
    const newPost = new DoggoPost({
        userId,
        dogName,
        dogColor,
        breed,
        details,
        dogPicturePath,
        userPicturePath: user.userPicturePath,
        location,
        rabiesNum,
        lostOrFound
    });

    await newPost.save();
    const post = await Post.find();
    res.satus(201).json(post)
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
};

export const getFeedPosts = async (req, res) => {
    try {
        const post = await DoggoPost.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await DoggoPost.find( userId );
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
