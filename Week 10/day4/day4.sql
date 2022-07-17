--Exercise 1

-- All items, ordered by price (lowest to highest)

SELECT * FROM Items ORDER BY price;

-- Items with a price above 80 (80 included), ordered by price (highest to lowest).

SELECT * FROM Items WHERE price >= 80 ORDER BY price DESC;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.

SELECT first_name,last_name FROM Customers ORDER BY first_name;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)

SELECT first_name,last_name FROM Customers ORDER BY first_name,last_name;

-- All purchases, joining with the customers table.

-- SELECT customers.customer_id,customers.first_name,customers.last_name, purchases.item_id, purchases.quantity_purchased
-- FROM customers 
-- INNER JOIN purchases 
-- ON purchases.customer_id = Customers.customer_id;

-- Purchases of the customer with the ID equal to 5.

-- SELECT customers.customer_id,customers.first_name,customers.last_name, purchases.item_id, purchases.quantity_purchased
-- FROM customers 
-- INNER JOIN purchases 
-- ON purchases.customer_id = Customers.customer_id
-- WHERE customers.customer_id = 5;

-- Purchases for a large desk AND a small desk

-- SELECT customers.customer_id,customers.first_name,customers.last_name, items.product,items.price
-- FROM customers 
-- INNER JOIN items 
-- ON items.product_id = Customers.customer_id
-- WHERE items.product IN ('Large desk','Small desk')

--Exercise  2

-- In the dvdrental database write a query to select all the columns from the “customer” table.

SELECT * FROM customer;

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.

SELECT (first_name,last_name) AS Full_name FROM customer;

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).

SELECT DISTINCT create_date FROM customer;

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.

SELECT * FROM customer ORDER BY first_name DESC;

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.

SELECT film_id,title,description,release_year,rental_rate FROM film ORDER BY rental_rate;

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.

SELECT address,phone FROM address WHERE district = 'Texas';

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.

SELECT * FROM film WHERE film_id = 15 OR film_id = 150;

-- Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.

SELECT film_id,title,description,length,rental_rate FROM film WHERE title iLIKE 'Ro%';

-- Write a query which will find the 10 cheapest movies.

SELECT * FROM film ORDER BY rental_rate LIMIT 10;

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.

SELECT * FROM film WHERE film_id BETWEEN 10 AND 20 ORDER BY rental_rate;

-- Write a query which will join the data in the customer table and the payment table. You want to get the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).

SELECT customer.first_name,customer.last_name,payment.amount,payment.payment_date FROM customer
INNER JOIN payment ON payment.customer_id = customer.customer_id;

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.

SELECT inventory.film_id,film.title FROM inventory
INNER JOIN film ON film.film_id = inventory.film_id;

-- Write a query to find which city is in which country.

SELECT city.country_id,city.city,country.country FROM country
INNER JOIN city
ON city.country_id = country.country_id;

-- Bonus You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

SELECT staff.staff_id,customer.customer_id,customer.first_name,customer.last_name,payment.amount,payment.payment_date FROM payment
INNER JOIN staff
ON staff.staff_id = payment.staff_id
INNER JOIN customer
ON customer.customer_id = payment.customer_id;















