const userModel = require("../models/User");
const { ObjectId } = require("mongodb");
const admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

const firestore = admin.firestore();

async function transferData() {
  console.log("transfer");
  const collectionRef = firestore.collection("users");
  try {
    const querySnapshot = await collectionRef.get();

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log(data);
      //data.then()
      const firestoreId = doc.id; // Get the Firestore document ID
      //   const mongoId = new ObjectId(firestoreId);
      //   console.log(mongoId)

      userModel
        .find({ userId: firestoreId })
        .exec()
        .then((documents) => {
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

            newData
              .save()
              .then(() => {
                console.log("New data saved.");
              })
              .catch((err) => {
                console.error("Error saving new data:", err);
              });
          }
        })
        .catch((err) => {
          console.error("Error finding documents:", err);
        });
    });
  } catch (err) {
    console.error("Error getting documents from Firestore:", err);
  }
}

const findUserViaFirebase = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findOne({ userId: userId });
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const findUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await userModel.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deletedUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!user) return res.status(404).json({ error: "User not Found!!" });

    res.status(200).json(deletedUser);
  } catch (err) {
    console.log("User is not deleted", err);
    res.status(500).json(err);
  }
};

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

module.exports = {
  transferData,
  findUserViaFirebase,
  findUser,
  getUsers,
  deletedUser,
};
