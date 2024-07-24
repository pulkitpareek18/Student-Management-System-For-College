import mongoose from "mongoose";

export const connectDB = () => mongoose.connect("mongodb://127.0.0.1:27017/",{
    dbName: "CMS"
})
.then((c)=>console.log(`Database connected with ${c.connection.host}`))
.catch((e)=>console.log(e))