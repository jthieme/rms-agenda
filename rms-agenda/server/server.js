import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import router from './routes/routes.js'
import bodyParser from 'body-parser'

const app = express()
app.use(cors());
app.use(express.json());
app.use('/update',router);
app.use(bodyParser.json({ limit: '20mb', extended: true }))
// does the same but for the url
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
// get driver connection
// const dbo = require("./db/conn");
 
// app.listen(port, () => {
//   // perform a database connection when server starts
//   dbo.connectToServer(function (err) {
//     if (err) console.error(err);
 
//   });
//   console.log(`Server is running on port: ${port}`);
// });
// connect to the database, using mongoose


const connectionUrl = 'mongodb+srv://rms26:rms26@rms26.qgmoz.mongodb.net/RMS26?retryWrites=true&w=majority';
const PORT = 5050;

mongoose.connect(connectionUrl, {
    // helps to avoid errr=ors and warnings 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => {
    console.log(`Server Connected on ${PORT}...`)
})).catch((error) => console.log(error.message))


// ingonre warnings in the console
mongoose.set('useFindAndModify', false);