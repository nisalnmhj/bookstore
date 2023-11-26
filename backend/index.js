import express from "express";
import { PORT, MongoDBURL } from "./config.js";
// import { Book } from "./models/bookModel.js";
import mongoose from "mongoose";
import bookRoutes from './routes/bookRoutes.js'
import cors from 'cors'

const app = express();

app.use(express.json()); //Middleware for parsing request body 

//Middleware for handling CORS policy
//option 1: Allow all origins with the dfault of cors(*)
app.use(cors());

//option 2: Allow Custom Origins
// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("GET REQUEST");
});
app.use('/books', bookRoutes);


// mongoose.connect connects the server to the database
mongoose
  .connect(MongoDBURL)
  .then(() => {
    //only listen to the port if datbase is connected
    app.listen(PORT, () => {
      console.log(`App is listening to ${PORT}`);
    });
    console.log("App connected to the database");
  })
  .catch((error) => {
    console.log(error);
  });
