const mysql = require('mysql2');
const dbConfig = require('./dbConfig');
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database');

    // Queries
    const queries = [
        // Query 1: All research papers and the number of authors that wrote that paper
        `SELECT rp.paper_title, COUNT(ap.author_id) AS num_authors
         FROM research_papers rp
         LEFT JOIN author_paper ap ON rp.paper_id = ap.paper_id
         GROUP BY rp.paper_title`,

        // Query 2: Sum of the research papers published by all female authors
        `SELECT SUM(rp.paper_id) AS total_papers
         FROM research_papers rp
         JOIN author_paper ap ON rp.paper_id = ap.paper_id
         JOIN authors a ON ap.author_id = a.author_id
         WHERE a.gender = 'F'`,

        // Query 3: Average of the h-index of all authors per university
        `SELECT university, AVG(h_index) AS avg_h_index
         FROM authors
         GROUP BY university`,

        // Query 4: Sum of the research papers of the authors per university
        `SELECT a.university, COUNT(ap.paper_id) AS total_papers
         FROM authors a
         LEFT JOIN author_paper ap ON a.author_id = ap.author_id
         GROUP BY a.university`,

        // Query 5: Minimum and maximum of the h-index of all authors per university
        `SELECT university, MIN(h_index) AS min_h_index, MAX(h_index) AS max_h_index
         FROM authors
         GROUP BY university`
    ];

    // Execute all queries
    queries.forEach((query, index) => {
        connection.query(query, (err, results) => {
            if (err) throw err;
            console.log(`Query ${index + 1} Results:`);
            console.table(results);
        });
    });

    connection.end();
});