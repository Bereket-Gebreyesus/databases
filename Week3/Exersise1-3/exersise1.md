## Violations of 1NF (First Normal Form)
1NF requires that the values in each column of a table be atomic (indivisible). The table violates 1NF in the following ways:

1.The food_code column contains multiple food codes separated by commas.
2.The food_description column contains multiple food descriptions separated by commas.

## Identifying Entities

Member: Contains details about the members.
Dinner: Contains details about the dinners.
Venue: Contains details about the venues.
Food: Contains details about the food items served at the dinners.
Dinner_Food: Represents the relationship between dinners and the food served at each dinner.


## Creating 3NF Compliant Tables

Each table represents a single entity.
All non-key attributes are fully functionally dependent on the primary key.
There are no transitive dependencies (i.e., non-key attributes are not dependent on other non-key attributes)

## Member Table

+-----------+---------------+----------------+
| member_id | member_name   | member_address |
+-----------+---------------+----------------+
|         1 | Amit          | 325 Max park   |
|         2 | Ben           | 24 Hudson lane |
|         3 | Cristina      | 516 6th Ave    |
|         4 | Dan           | 89 John St     |
|         5 | Gabor         | 54 Vivaldi St  |
|         6 | Hema          | 9 Peter St     |
+-----------+---------------+----------------+

## Dinner Table

+-----------+-------------+------------+
| dinner_id | dinner_date | venue_code |
+-----------+-------------+------------+
| D00001001 | 2020-03-15  | B01        |
| D00001002 | 2020-03-15  | B02        |
| D00001003 | 2020-03-20  | B03        |
| D00001004 | 2020-03-25  | B04        |
| D00001005 | 2020-03-26  | B05        |
+-----------+-------------+------------+

## Venue Table

+------------+-------------------+
| venue_code | venue_description |
+------------+-------------------+
| B01        | Grand Ball Room   |
| B02        | Zoku Roof Top     |
| B03        | Goat Farm         |
| B04        | Mama's Kitchen    |
| B05        | Hungry Hungary    |
+------------+-------------------+

## Food Table

+-----------+------------------+
| food_code | food_description |
+-----------+------------------+
| C1        | Curry            |
| C2        | Cake             |
| S1        | Soup             |
| P1        | Pie              |
| T1        | Tea              |
| M1        | Mousse           |
| F1        | Falafel          |
| G1        | Goulash          |
| P2        | Pasca            |
+-----------+------------------+

## Dinner_Food Table

+-----------+-----------+
| dinner_id | food_code |
+-----------+-----------+
| D00001001 | C1        |
| D00001001 | C2        |
| D00001002 | S1        |
| D00001002 | C2        |
| D00001003 | P1        |
| D00001003 | T1        |
| D00001003 | M1        |
| D00001004 | F1        |
| D00001004 | M1        |
| D00001005 | G1        |
| D00001005 | P2        |
+-----------+-----------+

## Dinner_Member Table

+-----------+-----------+
| dinner_id | member_id |
+-----------+-----------+
| D00001001 | 1         |
| D00001002 | 2         |
| D00001002 | 3         |
| D00001003 | 4         |
| D00001003 | 1         |
| D00001004 | 3         |
| D00001005 | 5         |
| D00001003 | 6         |
+-----------+-----------+
