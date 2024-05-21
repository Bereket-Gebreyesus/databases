require('dotenv').config();
const { MongoClient } = require('mongodb');
const data = require('./data.json'); // Assuming your data file is named data.json

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function seedDatabase() {
  try {
    await client.connect();
    const database = client.db('databaseWeek3');
    const collection = database.collection('bob_ross_episodes');

    // Clear the collection
    await collection.deleteMany({});

    // Insert new data
    await collection.insertMany(data);

    console.log('Database seeded successfully!');
  } finally {
    await client.close();
  }
}

seedDatabase().catch(console.error);