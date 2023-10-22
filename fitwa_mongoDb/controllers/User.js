const userModel = require("../models/User");
const {ObjectId} = require("mongodb")
const admin = require("firebase-admin");
const serviceAccount = require("../../firebase/fitwa-197c5-firebase-adminsdk-p74f5-ed54d829ee.json");


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


// async function transferData(){
//     console.log("transfer")
//     const collectionRef = firestore.collection("users");
//     try{
//         const querySnapshot = await collectionRef.get();


//         querySnapshot.forEach((doc) => {
//           const data = doc.data();
//           console.log(data)
//           //data.then()
//           const firestoreId = doc.id; // Get the Firestore document ID
//         //   const mongoId = new ObjectId(firestoreId);
//         //   console.log(mongoId)
    
//           // Create a new document with the Firestore ID and save it to MongoDB
//           const newData = new userModel({
//             name: data.Name,
//             surname: data.Surname,
//             age: data.age,
//             email: data.email,
//             sex: data.sex,
//             userId: firestoreId, // Set the Firestore document ID
//             // Add other fields as needed
//           });
    
//           newData.save();
//         });

//     }catch(err){
//         console.error('Error getting documents from Firestore:', err);
//     }
// }


module.exports = {transferData};
