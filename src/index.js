import dotenv from 'dotenv';
import app from './app.js';

dotenv.config({
    path: './env'
}); // Ensure this is at the top to load env variables ASAP
import connectDB from './db/dbConnect.js';


// Attempt to connect to the database
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Sever is runnng at port:${process.env.PORT}`)
        });
    }).catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })




