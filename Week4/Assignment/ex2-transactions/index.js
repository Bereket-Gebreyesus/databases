const { MongoClient } = require('mongodb');
const setup = require('./setup');
const transfer = require('./transfer');

// Connection URI
const uri = 'mongodb+srv://hyfuser:hyfpassword@cluster0.fg98dvl.mongodb.net/databaseWeek4';

(async () => {
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // Run setup to initialize accounts
    await setup(client);

    // Transfer 1000 from account number 101 to account number 102
    await transfer(client, 101, 102, 1000, 'Test transfer');

    console.log('Setup and transfer completed successfully');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
})();