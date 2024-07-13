import mongoose from "mongoose";

const connectMongoDB = async () =>{
    const dbConnect = process.env.MONGODB_URI;
    if(!dbConnect){
        throw new Error("No mongoDB provided");
    }

    try {
        await mongoose.connect(dbConnect);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MojngoDB: ",error);
    }
}

export default connectMongoDB;