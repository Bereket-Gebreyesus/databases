const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://hyfuser:hyfpassword@cluster0.fg98dvl.mongodb.net/databaseWeek4';

// Function to get total population per year for a given country
async function getTotalPopulationByYear(country) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection('populationData');

    const pipeline = [
      { $match: { Country: country } },
      { 
        $group: {
          _id: '$Year',
          countPopulation: { $sum: { $add: ['$M', '$F'] } }
        }
      },
      { $sort: { _id: 1 } },
      {
        $project: {
          _id: 1,
          countPopulation: 1
        }
      }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    return result;
  } catch (error) {
    console.error('Error:', error);
    return [];
  } finally {
    await client.close();
  }
}

// Example usage
getTotalPopulationByYear('Netherlands')
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));