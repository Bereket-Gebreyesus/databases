const mysql = require('mysql2');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'new_world'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL server');

  // Perform queries
  queryCountriesWithPopulationGreaterThan8Million();
  queryCountriesWithNameContainingLand();
  queryCitiesWithPopulationBetween500KAnd1M();
  queryCountriesInEurope();
  queryCountriesByDescendingSurfaceArea();
  queryCitiesInNetherlands();
  queryPopulationOfRotterdam();
  queryTop10CountriesBySurfaceArea();
  queryTop10MostPopulatedCities();
  queryPopulationOfWorld();
});

// Function to execute query and log results
function executeQuery(query, queryName) {
  connection.query(query, (err, results) => {
    if (err) throw err;
    console.log(`Results for ${queryName}:`);
    console.log(results);
    console.log('-----------------------------');
  });
}

// Queries
function queryCountriesWithPopulationGreaterThan8Million() {
  const query = "SELECT Name FROM country WHERE Population > 8000000";
  executeQuery(query, "Countries with population greater than 8 million");
}

function queryCountriesWithNameContainingLand() {
  const query = "SELECT Name FROM country WHERE Name LIKE '%land%'";
  executeQuery(query, "Countries with 'land' in their names");
}

function queryCitiesWithPopulationBetween500KAnd1M() {
  const query = "SELECT Name FROM city WHERE Population BETWEEN 500000 AND 1000000";
  executeQuery(query, "Cities with population between 500,000 and 1 million");
}

function queryCountriesInEurope() {
  const query = "SELECT Name FROM country WHERE Continent = 'Europe'";
  executeQuery(query, "Countries in Europe");
}

function queryCountriesByDescendingSurfaceArea() {
  const query = "SELECT Name FROM country ORDER BY SurfaceArea DESC";
  executeQuery(query, "Countries ordered by descending surface area");
}

function queryCitiesInNetherlands() {
  const query = "SELECT Name FROM city WHERE CountryCode = 'NLD'";
  executeQuery(query, "Cities in Netherlands");
}

function queryPopulationOfRotterdam() {
  const query = "SELECT Population FROM city WHERE Name = 'Rotterdam'";
  executeQuery(query, "Population of Rotterdam");
}

function queryTop10CountriesBySurfaceArea() {
  const query = "SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10";
  executeQuery(query, "Top 10 countries by surface area");
}

function queryTop10MostPopulatedCities() {
  const query = "SELECT Name FROM city ORDER BY Population DESC LIMIT 10";
  executeQuery(query, "Top 10 most populated cities");
}

function queryPopulationOfWorld() {
  const query = "SELECT SUM(Population) AS Population FROM country";
  executeQuery(query, "Population of the world");
}