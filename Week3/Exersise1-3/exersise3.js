// Answer 1

//To exploit SQL injection in the provided function, an attacker can pass malicious inputs that manipulate the SQL query
// getPopulation("Country", "'; DROP TABLE Country; --", "'; DROP TABLE Country; --", cb); it's crossponding SQL  is SELECT Population FROM Country WHERE Name = ''; DROP TABLE Country; --' and code = ''; DROP TABLE Country; --'


// Answer 2

function getPopulation(Country, name, code, cb) {
    // assuming that connection to the database is established and stored as conn
    conn.query(
      `SELECT Population FROM ?? WHERE Name = ? and code = ?`,
      [Country, name, code],
      function (err, result) {
        if (err) cb(err);
        if (result.length === 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    );
  }