const mysql = require('mysql2');
const dbConfig = require('./dbConfig');
const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');

    // Insert sample data into account table
    const insertAccounts = `
        INSERT INTO account (account_number, balance) VALUES 
        (101, 5000.00),
        (102, 3000.00);
    `;

    // Insert sample data into account_changes table (initially empty)
    const insertAccountChanges = `
        INSERT INTO account_changes (account_number, amount, remark) VALUES 
        (101, 5000.00, 'Initial deposit'),
        (102, 3000.00, 'Initial deposit');
    `;

    connection.query(insertAccounts, err => {
        if (err) throw err;
        console.log('Sample data inserted into account table');

        connection.query(insertAccountChanges, err => {
            if (err) throw err;
            console.log('Sample data inserted into account_changes table');
            connection.end();
        });
    });
});