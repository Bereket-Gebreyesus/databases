const mysql = require('mysql2');
const dbConfig = require('./dbConfig');
const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database');

    // Query to print names of all authors and their corresponding mentors
    const query1 = `
        SELECT a.author_name AS author_name, m.author_name AS mentor_name
        FROM authors a
        LEFT JOIN authors m ON a.mentor_id = m.author_id;
    `;

    connection.query(query1, (err, results1) => {
        if (err) throw err;
        console.log('query 1 Results:');
        console.table(results1);

        // Query to print all columns of authors and their published paper titles
        const query2 = `
            SELECT a.*, rp.paper_title
            FROM authors a
            LEFT JOIN author_paper ap ON a.author_id = ap.author_id
            LEFT JOIN research_papers rp ON ap.paper_id = rp.paper_id;
        `;

        connection.query(query2, (err, results2) => {
            if (err) throw err;
            console.log('query 2 Results:');
            console.table(results2);

            connection.end();
        });
    });
});