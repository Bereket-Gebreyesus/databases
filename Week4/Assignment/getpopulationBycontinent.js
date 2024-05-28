const { MongoClient, ObjectId } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://hyfuser:hyfpassword@cluster0.fg98dvl.mongodb.net/databaseWeek4';

async function getPopulationByContinent(year, age) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db();
    const collection = database.collection('populationData');

    const pipeline = [
      {
        $match: {
          Country: { $in: ['AFRICA', 'ASIA', 'EUROPE', 'LATIN AMERICA AND THE CARIBBEAN', 'NORTHERN AMERICA', 'OCEANIA'] },
          Year: year,
          Age: age
        }
      },
      {
        $group: {
          _id: '$Country',
          Country: { $first: '$Country' },
          Year: { $first: '$Year' },
          Age: { $first: '$Age' },
          M: { $sum: '$M' },
          F: { $sum: '$F' },
          TotalPopulation: { $sum: { $add: ['$M', '$F'] } }
        }
      }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    return result.map(doc => ({
      _id: new ObjectId(),
      Country: doc.Country,
      Year: doc.Year,
      Age: doc.Age,
      M: doc.M,
      F: doc.F,
      TotalPopulation: doc.TotalPopulation
    }));
  } catch (error) {
    console.error('Error:', error);
    return [];
  } finally {
    await client.close();
  }
}

// Example usage:
getPopulationByContinent(2020, '100+')
  .then(result => console.log(result))
  .catch(error => console.error('Error:', error));