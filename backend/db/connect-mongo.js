import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const getConnetion = async () => {

  try {
    const url =
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@filmplay.ss8kduu.mongodb.net/?appName=FilmPlay`

    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }

  
};

export default getConnetion;
