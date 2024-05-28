const setup = async (client) => {
    const database = client.db('databaseWeek4');
    const accounts = database.collection('accounts');
  
    // Clear existing data
    await accounts.deleteMany({});
  
    // Insert sample data
    await accounts.insertMany([
      {
        account_number: 101,
        balance: 5000,
        account_changes: []
      },
      {
        account_number: 102,
        balance: 3000,
        account_changes: []
      },
      {
        account_number: 103,
        balance: 7000,
        account_changes: []
      }
    ]);
  
    console.log('Setup complete');
  };
  
  module.exports = setup;