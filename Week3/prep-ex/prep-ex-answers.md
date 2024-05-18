## Was your database already in 2NF / 3 NF?

## Yes! The ERD for database recipe is in First Normal Form (1NF)
Atomic Values: Each column in your tables holds atomic values, meaning each value is indivisible. 

Unique Column Names: Each column in a table has a unique name.

No Repeating Groups: Each table organizes data into rows and columns

Primary Keys: Each table has a primary key column

##  The ERD for database recipe satisfies the Second Normal Form (2NF)

It satisfies 1NF

In all the tables the Non-key attributes are functionally dependent on the entire primary key of each table. There are no partial dependencies since all non-key attributes rely on the entire primary key.

Some tables they only have one non primary key, it only depends on the PK

##  The ERD for database recipe satisfies the Second Normal Form (3NF)

It satisfies 1NF

There are no transitive dependencies on all the tables since all non-key attributes are directly dependent on primary key, and foreign key, which doesn't introduce transitive dependencies.
Some of the tables it only contains one non-PK, which doesn't introduce transitive dependencies.

## If you want to add thousands of recipes to your database, what challenges do you foresee?

Storage

Performance

Data Integrity

Indexing and Query Performance : should be properly indexed

Concurrency: With multiple users adding, updating, or deleting recipes concurrently
