import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get("/", (req, res) => {
    res.send("hello world")
});

(
    async () => {
        try {
            const connection = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
            console.log("Connection successfull at host:", connection.connection.host)
        } catch (error) {
            console.error("Failed connecting database", error)
            process.exit(-1)
        }
    }
)()
.then(() => {
    app.listen(3000, () => console.log("Server is listening at port :-", 3000))
})


