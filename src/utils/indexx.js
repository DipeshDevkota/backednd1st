import dotenv from 'dotenv';

dotenv.config({
    path:'./env'
}); // Ensure this is at the top to load env variables ASAP
import connectDB from '/src/index.js';


// Attempt to connect to the database
connectDB();
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>
    {
        console.log(`Sever is runnng at port:${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed!!!",err)
})
