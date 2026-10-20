import mongoose from "mongoose";

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        console.error(
            "MongoDB connection error: MONGO_URI is not set. Add your MongoDB connection string to server/.env (see server/.env.example)."
        );
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoUri);
        console.log("MongoDB Atlas connected!");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;