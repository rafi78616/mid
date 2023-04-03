
import express from 'express';
import { MongoClient } from 'mongodb';

import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3100;
const url = "mongodb+srv://sreelekha:sreelekha1@cluster0.xhibn.mongodb.net/proj";

// Use bodyParser to parse JSON requests
app.use(bodyParser.json());


// // define a GET endpoint for retrieving data from the database
// app.get("/datacheck", (req, res) => {
//     console.log("entered");
//    const url="mongodb+srv://sreelekha:sreelekha1@cluster0.xhibn.mongodb.net/proj";
//    MongoClient.connect(url, function(err, db) {
//      if (err) {
//        throw err;
//      };
//      const dbo = db.db(proj);
//      dbo.collection(messages).find({}).toArray(function(err, result) {
//        if (err) throw err;
//        db.close();
//        res.json(result);
//      });
//    });
//   });
  
  
//   app.post('/data', (req, res) => {
//     // Extract the data from the request body
//     const url="mongodb+srv://sreelekha:sreelekha1@cluster0.xhibn.mongodb.net/proj";
//     const { id, name, email, phonenumber, message } = req.body;
    
//     // Create a new MongoClient
//     const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
//     // Connect to the MongoDB server
//     client.connect((err) => {
//       if (err) {
//         console.log("unable to connect. Sorry!");
//       }
//       console.log('Connected to MongoDB');
  
//       // Get a reference to the collection
//       const collection = client.db('proj').collection('messages');
  
//       // Define the document to insert
//       const document = {
//         id,
//         name,
//         email,
//         phonenumber,
//         message
//       };
  
//       // Insert the document into the collection
//       collection.insertOne(document, (err, result) => {
//         if (err) throw err;
//         console.log(`Inserted document with _id: ${result.insertedId}`);
//         client.close();
  
//         // Send a success response to the client
//         res.status(200).json({ message: 'Data inserted successfully!' });
//       });
//     });
//   });
  
  
  
  app.listen(3100, () => {
    console.log("Server is Runing On port 3100");
  });