-- Exercise 2

-- CREATE TABLE students(
-- 	id BIGSERIAL NOT NULL PRIMARY KEY,
-- 	last_name VARCHAR(10) NOT NULL,
-- 	first_name VARCHAR(10) NOT NULL,
-- 	birth_data DATE NOT NULL
-- );

-- INSERT INTO students(
-- first_name,
-- last_name,
-- birth_data)
-- VALUES('Marc','Benichou',DATE '02/11/1998'),
-- ('Yoen','Cohen',DATE '03/12/2010'),
-- ('Lea','Benichou',DATE '07/27/1987'),
-- ('Amelia','Dux',DATE '04/07/1996'),
-- ('David','Grez',DATE '03/14/2003'),
-- ('Omer','Simpson',DATE '10/03/1980');


SELECT * FROM students;

SELECT first_name,last_name FROM students;

-- Fetch the student which id is equal to 2.

SELECT * FROM students WHERE id = 2;

-- Fetch the student whose last_name is Benichou AND first_name is Marc.

SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

-- Fetch the students whose last_names are Benichou OR first_names are Marc.

SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

-- Fetch the students whose first_names contain the letter a.

SELECT * FROM students WHERE first_name iLIKE '%a%';

-- Fetch the students whose first_names start with the letter a.

SELECT * FROM students WHERE first_name iLIKE 'a%';

-- Fetch the students whose first_names end with the letter a.

SELECT * FROM students WHERE first_name iLIKE '%a';

-- Fetch the students whose second to last letter of their first_names are a (Example: Leah)

SELECT * FROM students WHERE first_name iLIKE '%a_';

-- Fetch the students whose id’s are equal to 1 AND 3

SELECT * FROM students WHERE id IN (1,3)