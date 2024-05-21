const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'authors_database'
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySQL database');

    // Insert authors
    const authors = [
        ['John Smith', 'University of Science', '1980-01-15', 12, 'M', 1],
        ['Alice Johnson', 'Tech University', '1978-05-20', 8, 'F', 2],
        ['Michael Brown', 'Research Institute', '1985-09-10', 10, 'M', 2],
        ['Emily Davis', 'Data Science College', '1990-03-25', 9, 'F'],
        ['William Wilson', 'Computer Science Institute', '1982-07-12', 11, 'M', 3],
        ['Sophia Martinez', 'Engineering University', '1988-12-30', 10, 'F', 1],
        ['James Taylor', 'Artificial Intelligence Lab', '1976-06-18', 15, 'M', 2],
        ['Olivia Anderson', 'Robotics Research Center', '1983-04-08', 13, 'F'],
        ['Daniel Thomas', 'Mathematics Institute', '1987-11-05', 9, 'M', 3],
        ['Isabella Jackson', 'Neuroscience Research Group', '1984-08-22', 11, 'F', 3],
        ['Benjamin White', 'Chemistry Department', '1979-10-02', 7, 'M'],
        ['Emma Harris', 'Physics Academy', '1981-02-14', 8, 'F'],
        ['Alexander Martin', 'Biology Institute', '1986-09-29', 10, 'M', 2],
        ['Chloe Thompson', 'Medical School', '1989-07-07', 11, 'F'],
        ['Ethan Garcia', 'Environmental Studies Center', '1983-12-12', 9, 'M', 1]
    ];

    const insertAuthorsQuery = 'INSERT INTO authors (author_name, university, date_of_birth, h_index, gender) VALUES ?';
    connection.query(insertAuthorsQuery, [authors], (err, result) => {
        if (err) throw err;
        console.log(`${result.affectedRows} author(s) inserted`);

        // Insert research papers
        const papers = [
            ['Exploring Machine Learning Algorithms for Image Recognition', 'Conference A', '2023-01-10'],
            ['Advances in Neural Network Architectures for Natural Language Processing', 'Conference B', '2022-05-20'],
            ['A Survey on Blockchain Technology and its Applications', 'Conference C', '2022-09-05'],
            ['Evolutionary Algorithms for Optimization Problems', 'Conference D', '2021-11-15'],
            ['Quantum Computing: Principles and Applications', 'Conference E', '2023-03-30'],
            ['Deep Reinforcement Learning in Robotics', 'Conference F', '2022-07-25'],
            ['Understanding Human Brain Connectivity Networks', 'Conference G', '2021-10-01'],
            ['Applications of CRISPR-Cas9 Gene Editing Technology', 'Conference H', '2023-02-12'],
            ['Climate Change and its Impact on Biodiversity', 'Conference I', '2022-04-18'],
            ['Drug Discovery using Computational Methods', 'Conference J', '2021-12-05'],
            ['Smart Cities: Technologies and Challenges', 'Conference K', '2022-08-10'],
            ['Sustainable Energy Solutions for Urban Areas', 'Conference L', '2023-06-20'],
            ['The Role of Microorganisms in Soil Health', 'Conference M', '2021-09-30'],
            ['Innovations in Cancer Treatment: From Immunotherapy to Nanomedicine', 'Conference N', '2022-03-12'],
            ['Exploring the Potential of 3D Printing in Medicine', 'Conference O', '2023-05-15'],
            ['Renewable Energy Sources: Current Status and Future Prospects', 'Conference P', '2021-07-07'],
            ['Social Network Analysis: Methods and Applications', 'Conference Q', '2022-11-28'],
            ['Cybersecurity Threats and Countermeasures', 'Conference R', '2023-04-03'],
            ['Human-Computer Interaction: Trends and Developments', 'Conference S', '2021-08-22'],
            ['Augmented Reality: Applications in Education and Training', 'Conference T', '2023-01-05'],
            ['Enhancing Supply Chain Efficiency using IoT and Big Data Analytics', 'Conference U', '2022-12-18'],
            ['Next-Generation Wireless Communication Technologies', 'Conference V', '2021-06-30'],
            ['Autonomous Vehicles: Challenges and Opportunities', 'Conference W', '2022-02-20'],
            ['Genome Sequencing and Precision Medicine', 'Conference X', '2023-03-05'],
            ['Urban Planning and Design Strategies for Sustainability', 'Conference Y', '2021-10-25'],
            ['Bionic Limbs: Advancements in Prosthetics', 'Conference Z', '2022-09-15'],
            ['Disaster Management and Resilience Building', 'Conference AA', '2023-07-20'],
            ['Artificial Intelligence in Healthcare: Current Applications and Future Directions', 'Conference BB', '2021-12-10'],
            ['Renewable Energy Integration into Power Grids', 'Conference CC', '2022-04-28'],
            ['Enhancing Data Privacy and Security in Cloud Computing', 'Conference DD', '2023-08-01']
        ];

        const insertPapersQuery = 'INSERT INTO research_papers (paper_title, conference, publish_date) VALUES ?';
        connection.query(insertPapersQuery, [papers], (err, result) => {
            if (err) throw err;
            console.log(`${result.affectedRows} paper(s) inserted`);

            // Insert into author_paper table
            const authorPaperValues = [
                [1, 3], [1, 8], [1, 12], [1, 19], [1, 25], [1, 28], [1, 29], [1, 30],
                [2, 2], [2, 6], [2, 11], [2, 16], [2, 20],
                [3, 4], [3, 9], [3, 14], [3, 18], [3, 29],
                [4, 1], [4, 5], [4, 10], [4, 15], [4, 21], [4, 24], [4, 27],
                [5, 3], [5, 7], [5, 13], [5, 17], [5, 23], [5, 29],
                [6, 2], [6, 8], [6, 12], [6, 19], [6, 26], [6, 28],
                [7, 1], [7, 6], [7, 11], [7, 16], [7, 22], [7, 25], [7, 29],
                [8, 4], [8, 9], [8, 15], [8, 18], [8, 20], [8, 28], [8, 29],
                [9, 2], [9, 7], [9, 10], [9, 14], [9, 21], [9, 28], [9, 29],
                [10, 1], [10, 5], [10, 13], [10, 17], [10, 28], [10, 29],
                [11, 3], [11, 6], [11, 12], [11, 19], [11, 28], [11, 29],
                [12, 2], [12, 8], [12, 11], [12, 16], [12, 22], [12, 28], [12, 29],
                [13, 4], [13, 9], [13, 14], [13, 18], [13, 23], [13, 28], [13, 29],
                [14, 1], [14, 7], [14, 10], [14, 15], [14, 28], [14, 29],
                [15, 3], [15, 6], [15, 13], [15, 17], [15, 20], [15, 28], [15, 29]
            ];
            const insertAuthorPaperQuery = 'INSERT INTO author_paper (author_id, paper_id) VALUES ?';
            connection.query(insertAuthorPaperQuery, [authorPaperValues], (err, result) => {
                if (err) throw err;
                console.log(`${result.affectedRows} author-paper relationships inserted`);

                // Close the connection
                connection.end();
            });
        });
    });
});
