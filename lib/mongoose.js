import mongoose from "mongoose";

const connectionToDatabase = async () => {
    try {
        await mongoose.connect()
    }
}