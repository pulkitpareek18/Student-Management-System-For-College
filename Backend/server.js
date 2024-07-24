import {app} from "./app.js";
import { connectDB } from "./database/dbconnect.js";

connectDB()

const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})