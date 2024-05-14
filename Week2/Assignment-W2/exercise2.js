const mysql = require('mysql2');
const dbConfig = require('./dbConfig');
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database');
    connection.query("SELECT * FROM information_schema.tables WHERE table_schema = 'your_database' AND table_name IN ('research_papers', 'author_paper')", (err, result) => {
        if (err) throw err;

        if (result.length < 2) {
            createTables();
        } else {
            console.log('research_papers and author_paper tables already exist');
            connection.end();
        }
    });
});

// Function to create research_papers and author_paper tables
function createTables() {
    const createResearchPapersTableQuery = `
        CREATE TABLE research_papers (
            paper_id INT AUTO_INCREMENT PRIMARY KEY,
            paper_title VARCHAR(255),
            conference VARCHAR(255),
            publish_date DATE
        )
    `;

    // Create author_paper table query
    const createAuthorPaperTableQuery = `
        CREATE TABLE author_paper (
            author_id INT,
            paper_id INT,
            PRIMARY KEY (author_id, paper_id),
            FOREIGN KEY (author_id) REFERENCES authors(author_id),
            FOREIGN KEY (paper_id) REFERENCES research_papers(paper_id)
        )
    `;

    // Execute the queries to create the tables
    connection.query(createResearchPapersTableQuery, (err, result) => {
        if (err) throw err;
        console.log('research_papers table created');
        connection.query(createAuthorPaperTableQuery, (err, result) => {
            if (err) throw err;
            console.log('author_paper table created');
            connection.end();
        });
    });
}