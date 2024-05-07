const mysql = require('mysql2');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
});

// Create and connect to the 'meetup' database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');
  createDatabase();
});

// Function to create the 'meetup' database
function createDatabase() {
  connection.query('DROP DATABASE IF EXISTS meetup', (err) => {
    if (err) throw err;
    console.log('Database dropped (if existed)');
    connection.query('CREATE DATABASE meetup', (err) => {
      if (err) throw err;
      console.log('Database created');
      useDatabase();
    });
  });
}

// Function to use the 'meetup' database
function useDatabase() {
  connection.query('USE meetup', (err) => {
    if (err) throw err;
    console.log('Using meetup database');
    createTables();
  });
}

// Function to create tables: Invitee, Room, Meeting
function createTables() {
  const createInviteeTable = `CREATE TABLE Invitee (
    invitee_no INT AUTO_INCREMENT PRIMARY KEY,
    invitee_name VARCHAR(255),
    invited_by VARCHAR(255)
  )`;

  const createRoomTable = `CREATE TABLE Room (
    room_no INT AUTO_INCREMENT PRIMARY KEY,
    room_name VARCHAR(255),
    floor_number INT
  )`;

  const createMeetingTable = `CREATE TABLE Meeting (
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

// Function to insert data into tables
function insertData() {
  const insertInviteeData = `INSERT INTO Invitee (invitee_name, invited_by) VALUES
    ('John Doe', 'Jane Smith'),
    ('Alice Johnson', 'Bob Brown'),
    ('Emily Davis', 'John Doe'),
    ('Michael Wilson', 'Alice Johnson'),
    ('Sarah Thompson', 'Michael Wilson')
  `;

  const insertRoomData = `INSERT INTO Room (room_name, floor_number) VALUES
    ('Conference Room A', 1),
    ('Conference Room B', 2),
    ('Meeting Room 1', 3),
    ('Meeting Room 2', 4),
    ('Boardroom', 5)
  `;

  const insertMeetingData = `INSERT INTO Meeting (meeting_title, starting_time, ending_time, room_no) VALUES
    ('Project Kickoff', '2024-05-07 09:00:00', '2024-05-07 11:00:00', 1),
    ('Team Sync-up', '2024-05-08 10:00:00', '2024-05-08 11:30:00', 2),
    ('Client Presentation', '2024-05-10 14:00:00', '2024-05-10 16:00:00', 3),
    ('Board Meeting', '2024-05-12 15:00:00', '2024-05-12 17:00:00', 4),
    ('Training Session', '2024-05-15 09:30:00', '2024-05-15 12:30:00', 5)
  `;

  connection.query(insertInviteeData, (err) => {
    if (err) throw err;
    console.log('Invitee data inserted');
    connection.query(insertRoomData, (err) => {
      if (err) throw err;
      console.log('Room data inserted');
      connection.query(insertMeetingData, (err) => {
        if (err) throw err;
        console.log('Meeting data inserted');
        console.log('All data inserted successfully');
        connection.end(); // Close the connection after all operations are completed
      });
    });
  });
}