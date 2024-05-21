const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');

    // Create database
    connection.query('CREATE DATABASE IF NOT EXISTS dinner_club', (err, result) => {
        if (err) throw err;
        console.log('Database dinner_club created');

        // Use the newly created database
        connection.query('USE dinner_club', (err, result) => {
            if (err) throw err;

            // Create account table
            const createAccountTable = `
                CREATE TABLE IF NOT EXISTS account (
                    account_number INT PRIMARY KEY,
                    balance DECIMAL(10, 2)
                );
            `;

            // Create account_changes table
            const createAccountChangesTable = `
                CREATE TABLE IF NOT EXISTS account_changes (
                    change_number INT AUTO_INCREMENT PRIMARY KEY,
                    account_number INT,
                    amount DECIMAL(10, 2),
                    changed_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    remark VARCHAR(255),
                    FOREIGN KEY (account_number) REFERENCES account(account_number)
                );
            `;

            connection.query(createAccountTable, err => {
                if (err) throw err;
                console.log('account table created');

                connection.query(createAccountChangesTable, err => {
                    if (err) throw err;
                    console.log('account_changes table created');
                    connection.end();
                });
            });
        });
    });
});