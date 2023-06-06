import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGO_URI);
    console.log(
      "🚀 *** file: db.js:6 *** connectionDB *** connection:",
      connection.host
    );
  } catch (error) {
    console.log("*** \n mongoDB connection Error", error.message);
    process.exit(1);
  }
};
