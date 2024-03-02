import express from "express"
import mongoose from "mongoose"
import User from './routes/User.js'
import cors from "cors"
const server = express()
server.use(express.json())
server.use(cors());
main()
async function main() {
    await mongoose.connect().then(() => console.log("database connected"));
}
server.get('/', (req, res) => {
    res.status(200).json("hello , good morning!")
})
server.use('/user',User);
server.listen(8080, () => {
    console.log("server started at port 8081");
});