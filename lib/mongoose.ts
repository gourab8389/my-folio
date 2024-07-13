import mongoose from "mongoose";

const connectMongoDB = async () => {
    const dbConnect = process.env.MONGODB_URI;
    if (!dbConnect) {
        throw new Error("No MongoDB URI provided");
    }

    if (mongoose.connection.readyState >= 1) {
        return; // If already connected, do not reconnect
    }

    try {
        await mongoose.connect(dbConnect);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
    }
}

export default connectMongoDB;
