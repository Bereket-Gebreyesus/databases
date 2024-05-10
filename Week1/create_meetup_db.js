const mysql = require('mysql2');
const dbConfig = require('./dbConfig');
// MySQL connection configuration
const connection = mysql.createConnection(dbConfig);

// Create and connect to the 'meetup' database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');
  createDatabase();
});

function executeQuery(query, successMessage) {
  connection.query(query, (err) => {
    if (err) throw err;
    console.log(successMessage);
  });
}

function createDatabase() {
  executeQuery('DROP DATABASE IF EXISTS meetup', 'Database dropped (if existed)');
  executeQuery('CREATE DATABASE meetup', 'Database created');
  useDatabase();
}

// Function to use the 'meetup' database
function useDatabase() {
  connection.query('USE meetup', (err) => {
    if (err) throw err;
    console.log('Using meetup database');
    createTables();
  });
}

//function to create tables
function createTables() {
  const createInviteeTable = `CREATE TABLE IF NOT EXISTS Invitee (
    invitee_no INT AUTO_INCREMENT PRIMARY KEY,
    invitee_name VARCHAR(255),
    invited_by VARCHAR(255)
  )`;

  const createRoomTable = `CREATE TABLE IF NOT EXISTS Room (
    room_no INT AUTO_INCREMENT PRIMARY KEY,
    room_name VARCHAR(255),
    floor_number INT
  )`;

  const createMeetingTable = `CREATE TABLE IF NOT EXISTS Meeting (
    meeting_no INT AUTO_INCREMENT PRIMARY KEY,
    meeting_title VARCHAR(255),
    starting_time DATETIME,
    ending_time DATETIME,
    room_no INT,
    FOREIGN KEY (room_no) REFERENCES Room(room_no)
  )`;

  connection.query(createInviteeTable, (err) => {
    if (err) throw err;
    console.log('Invitee table created');
    connection.query(createRoomTable, (err) => {
      if (err) throw err;
      console.log('Room table created');
      connection.query(createMeetingTable, (err) => {
        if (err) throw err;
        console.log('Meeting table created');
        insertData();
      });
    });
  });
}

function insertData() {
  const insertQueries = [
    {
      query: `INSERT INTO Invitee (invitee_name, invited_by) VALUES
        ('John Doe', 'Jane Smith'),
        ('Alice Johnson', 'Bob Brown'),
        ('Emily Davis', 'John Doe'),
        ('Michael Wilson', 'Alice Johnson'),
        ('Sarah Thompson', 'Michael Wilson')
      `,
      successMessage: 'Invitee data inserted'
    },
    {
      query: `INSERT INTO Room (room_name, floor_number) VALUES
        ('Conference Room A', 1),
        ('Conference Room B', 2),
        ('Meeting Room 1', 3),
        ('Meeting Room 2', 4),
        ('Boardroom', 5)
      `,
      successMessage: 'Room data inserted'
    },
    {
      query: `INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no) VALUES
        ('Project Kickoff', '2024-05-07 09:00:00', '2024-05-07 11:00:00', 1),
        ('Team Sync-up', '2024-05-08 10:00:00', '2024-05-08 11:30:00', 2),
        ('Client Presentation', '2024-05-10 14:00:00', '2024-05-10 16:00:00', 3),
        ('Board Meeting', '2024-05-12 15:00:00', '2024-05-12 17:00:00', 4),
        ('Training Session', '2024-05-15 09:30:00', '2024-05-15 12:30:00', 5)
      `,
      successMessage: 'Meeting data inserted'
    }
  ];

  executeInsertQueries(insertQueries);
}

function executeInsertQueries(queries) {
  if (queries.length === 0) {
    console.log('All data inserted successfully');
    connection.end(); // Close the connection after all operations are completed
    return;
  }

  const { query, successMessage } = queries.shift();
  connection.query(query, (err) => {
    if (err) throw err;
    console.log(successMessage);
    executeInsertQueries(queries);
  });
}
