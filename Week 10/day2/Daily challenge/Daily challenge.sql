-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- );

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5),
-- ('George','Clooney','06/05/1961', 2),
-- ('Jennifer','Aniston','11/02/1969', 0),
-- ('Angelina','Jolie','06/04/1975', 1);

SELECT * FROM actors;

-- Count how many actors are in the table.

SELECT first_name, COUNT(*) FROM actors GROUP BY first_name ORDER BY first_name;

-- Try to add a new actor with some blank fields. What do you think the outcome will be ?

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES('Brad','Pitt','',4);

-- if the constraints is given as not null and we use null in the value it will throw an error
-- if we dont use not null it will not throw an error
-- if we dont use not null we can also keep the value empty without use null.



