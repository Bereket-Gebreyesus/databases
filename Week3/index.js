require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    const database = client.db('databaseWeek3');
    const collection = database.collection('bob_ross_episodes');
    console.log("Connected to the database!");

    // Fetch all episodes
    const episodes = await collection.find({}).toArray();
    console.log('All Episodes:', episodes);

    // Insert a new episode
    const newEpisode = {
      title: 'Winter Wonderland',
      elements: ['snow', 'trees', 'mountain'],
      episode_number: 1,
    };
    const insertResult = await collection.insertOne(newEpisode);
    console.log('New episode inserted with id:', insertResult.insertedId);

    // Update an episode
    const updateResult = await collection.updateOne(
      { _id: new ObjectId(episodes[0]._id) }, // Updating the first episode
      { $set: { title: 'Updated Episode Title' } } // Updating the title
    );
    console.log('Updated Episode:', updateResult);

    // Delete an episode
    const deleteResult = await collection.deleteOne(
      { _id: new ObjectId(episodes[1]._id) } // Deleting the second episode
    );
    console.log('Deleted Episode:', deleteResult);
  } finally {
    await client.close();
  }
}

run().catch(console.error);