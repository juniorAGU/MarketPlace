import mongoose from "mongoose";

export const ConnectDB = async () => {
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI);
        console.log("DataBase Connected");
    }catch(err){
        console.log(err);
        process.exit(1)
    }
    

}