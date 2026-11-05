import mongoose from "mongoose";

const connectDb = async () => {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("MONGODB_URL is missing in server/.env")
        }

        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Error:", error.message)
    }
}
export default connectDb
