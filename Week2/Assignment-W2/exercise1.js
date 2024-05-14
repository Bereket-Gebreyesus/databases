const mysql = require('mysql2');
const dbConfig = require('./dbConfig');
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');

  // Create the authors table
  const createTableQuery = `
    CREATE TABLE authors (
      author_id INT AUTO_INCREMENT PRIMARY KEY,
      author_name VARCHAR(255),
      university VARCHAR(255),
      date_of_birth DATE,
      h_index INT,
      gender VARCHAR(1)
    )
  `;
  
  connection.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log('Authors table created');

    // Add the mentor column with foreign key constraint
    const alterTableQuery = `
      ALTER TABLE authors
      ADD COLUMN mentor INT,
      ADD CONSTRAINT fk_mentor
      FOREIGN KEY (mentor) REFERENCES authors(author_id)
    `;
    
    connection.query(alterTableQuery, (err, result) => {
      if (err) throw err;
      console.log('Mentor column added with foreign key constraint');
      
      connection.end();
    });
  });
});