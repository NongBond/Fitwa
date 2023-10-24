const userModel = require("../models/User");
const {ObjectId} = require("mongodb")
const admin = require("firebase-admin");
const serviceAccount = require("../../firebase/fitwa-197c5-firebase-adminsdk-p74f5-ed54d829ee.json");

// const mongoose = require('mongoose');

// const mongoURI = 'mongodb://localhost:27017/your_mongodb_database';
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// const mongooseSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//   });
  
//   const MongooseModel = mongoose.model('MongooseModel', mongooseSchema);

// const PORT = process.env.PORT || 6969;
// const URI = process.env.ATLAS_URI;

// exports.syncFirestoreToMongo = functions.firestore
//   .document('your_firestore_collection/{docId}')
//   .onWrite(async (change, context) => {
//     const docData = change.after.exists ? change.after.data() : null;
//     const docId = context.params.docId;

//     if (!docData) {
//       // Document deleted in Firestore, delete it in MongoDB
//       await MongooseModel.findByIdAndRemove(docId);
//     } else {
//       // Update or insert the document in MongoDB
//       await MongooseModel.findByIdAndUpdate(docId, docData, { upsert: true });
//     }
//   });


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const firestore = admin.firestore();


async function transferData(){
    console.log("transfer")
    const collectionRef = firestore.collection("users");
    try{
        const querySnapshot = await collectionRef.get();


        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(data)
          //data.then()
          const firestoreId = doc.id; // Get the Firestore document ID
        //   const mongoId = new ObjectId(firestoreId);
        //   console.log(mongoId)
    
        userModel.find({ userId: firestoreId })
        .exec()
        .then(documents => {
          if (documents.length > 0) {
            console.log(`Found documents with the same id`);
          } else {
            const newData = new userModel({
              name: data.Name,
              surname: data.Surname,
              age: data.age,
              email: data.email,
              sex: data.sex,
              userId: firestoreId, // Set the Firestore document ID
              // Add other fields as needed
            });
      
            newData.save()
              .then(() => {
                console.log('New data saved.');
              })
              .catch(err => {
                console.error('Error saving new data:', err);
              });
          }
        })
        .catch(err => {
          console.error('Error finding documents:', err);
        });})

    }catch(err){
        console.error('Error getting documents from Firestore:', err);
    }
}

const findUserViaFirebase = async (req, res) => {
    const userId = req.params.userId;
    try{
      const user = await userModel.findOne({userId: userId})
      res.status(200).json(user);
    }catch(err){
      console.log(err);
      res.status(500).json(err);
    }
}

const findUser = async (req, res) => {
  const userId = req.params.userId;
  try{
    const user = await userModel.findById(userId)
    res.status(200).json(user);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
}

const getUsers = async (req, res) => {
  try{
    const users = await userModel.find();
    res.status(200).json(users);
  }catch(err){
    console.log(err);
    res.status(500).json(err);
  }
}

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// const MongoClient = require('mongodb').MongoClient;

// admin.initializeApp();

// const db = admin.firestore();
// const mongoURI = 'mongodb://localhost:27017';
// const dbName = 'your_mongodb_database';

// exports.syncFirestoreToMongo = functions.firestore
//   .document('your_firestore_collection/{docId}')
//   .onWrite(async (change, context) => {
//     const docData = change.after.exists ? change.after.data() : null;
//     const docId = context.params.docId;

//     // If the document was deleted in Firestore, delete it in MongoDB
//     if (!docData) {
//       const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//       await client.connect();
//       const mongodb = client.db(dbName);
//       await mongodb.collection('your_mongodb_collection').deleteOne({ _id: docId });
//       await client.close();
//     } else {
//       // Update or insert the document in MongoDB
//       const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//       await client.connect();
//       const mongodb = client.db(dbName);
//       await mongodb.collection('your_mongodb_collection').updateOne(
//         { _id: docId },
//         { $set: docData },
//         { upsert: true }
//       );
//       await client.close();
//     }
//   });


module.exports = {transferData, findUserViaFirebase, findUser, getUsers};
