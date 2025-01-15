import {app} from "./app.js";
import { connectDB } from "./database/dbconnect.js";

connectDB()

const port = 3000

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})