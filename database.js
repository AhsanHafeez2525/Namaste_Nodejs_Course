const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const URI =
  "mongodb+srv://ahsansatti402:xzVbTQNUqri2NWAb@cluster0.etcwvym.mongodb.net/";
const client = new MongoClient(URI);

// Database Name
const dbName = "HelloWorld";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const data = {
    firstname: "john",
    lastname: "cena",
    city: "usa",
    phoneNumber: 89765444,
  };

  const insertResult = await collection.insertMany([data]);
  console.log("Inserted documents =>", insertResult);

  // the following code examples can be pasted here...
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments({});
  console.log("counts of the user doucment ==>", countResult);

  const result = await collection.find({ firstname: "john" }).toArray();
  console.log("name starts from john =>", result);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
