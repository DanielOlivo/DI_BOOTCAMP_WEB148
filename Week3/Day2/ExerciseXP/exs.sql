-- exercise 1

-- 1.1 all items, ordered by price (lowest to highest)
select * from items
order by price asc;

-- 1.2 Items with a price above 80 (80 included), ordered by price (highest to lowest).
select * from items
where price >= 80
order by price desc;

-- 1.3 The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
(select first_name, last_name from customers 
limit 3)
order by first_name asc;

-- 1.4 All last names (no other columns!), in reverse alphabetical order (Z-A)
select last_name from customers
order by last_name desc;


-- 2.1 In the dvdrental database write a query to select all the columns from the “customer” table.
select * from customer;

-- 2.2 Write a query to display the names (first_name, last_name) using an alias named “full_name”.
select first_name, last_name as full_name from customer;

-- 2.3 Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
select distinct create_date from customer;

-- 2.4 Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
select * from customer 
order by first_name desc;

-- 2.5 Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
select film_id, title, description, release_year 
from film 
order by rental_rate asc;

-- 2.6 Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
select customer.address_id, address.phone
from customer 
inner join address
on customer.address_id = address.address_id
where address.district = 'Texas';

-- 2.7 Write a query to retrieve all movie details where the movie id is either 15 or 150.
select * from film
where film_id=15 or film_id=150;

-- 2.8 Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
select * from film
where title like '%Blade Runner%';

-- 2.9 No luck finding your movie? Maybe you made a mistake spelling the name. Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
select film_id, title, description, length, rental_rate from film
where title like 'Bl%'
-- limit 3
;

-- 2.10 Write a query which will find the 10 cheapest movies.
select * from film 
order by replacement_cost asc
limit 10
;

-- 2.11 Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
select * from film 
order by replacement_cost asc
offset 10
limit 10
;

-- 2.12 Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
select customer.first_name, customer.last_name, payment.amount, payment_date
from customer
inner join payment
on customer.customer_id = payment.customer_id
order by payment.payment_id asc
-- limit 3
;

-- 2.13 You need to check your inventory. Write a query to get all the movies which are not in inventory.
select * from film
where film_id not in (select film_id from inventory)
-- limit 3
;

-- 2.14 Write a query to find which city is in which country.
select city, country from city
inner join country
on city.country_id = country.country_id
-- limit 3
;

-- 2.15 Bonus You want to be able to see how your sellers have been doing? 
-- Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.

select customer.customer_id, first_name, last_name, amount, payment_date from customer
inner join payment
on customer.customer_id = payment.customer_id
order by payment.staff_id asc
-- limit 3
;