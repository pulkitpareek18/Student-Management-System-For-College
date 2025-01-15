import mongoose from "mongoose";

export const connectDB = () => mongoose.connect("mongodb+srv://pulkit:pulkit@cluster0.uiolkef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    dbName: "sms"
})
.then((c)=>console.log(`Database connected with ${c.connection.host}`))
.catch((e)=>console.log(e))


