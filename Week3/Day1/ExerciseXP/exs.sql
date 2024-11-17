--1.
-- CREATE DATABASE IF NOT EXISTS "public"
--     WITH
--     OWNER = postgres;

--2.
-- CREATE TABLE IF NOT EXISTS public.items (
--     item_id SERIAL PRIMARY KEY,
--     item_name VARCHAR(100) NOT NULL,
--     price INT NOT NULL
-- );

-- CREATE TABLE IF NOT EXISTS public.customers(
--     customer_id SERIAL PRIMARY KEY,
--     first_name VARCHAR (50) NOT NULL,
--     last_name VARCHAR (100) NOT NULL
-- );

--3.1
-- INSERT INTO public.items (item_name, price) VALUES('Small Desk', 100);
-- INSERT INTO public.items (item_name, price) VALUES('Large Desk', 300);
-- INSERT INTO public.items (item_name, price) VALUES('Fan', 80);

--3.2
-- INSERT INTO public.customers (first_name, last_name) VALUES('Greg', 'Jones');
-- INSERT INTO public.customers (first_name, last_name) VALUES('Sandra', 'Jones');
-- INSERT INTO public.customers (first_name, last_name) VALUES('Scott', 'Scott');
-- INSERT INTO public.customers (first_name, last_name) VALUES('Trevor', 'Green');
-- INSERT INTO public.customers (first_name, last_name) VALUES('Melanie', 'Johnson');

--3.3
--3.3.1 all the items
-- SELECT * FROM items;

--3.3.2 All the items with a price above 80 (80 not included).
-- SELECT * FROM items WHERE price > 80;

--3.3.3 All the items with a price below 300. (300 included)
-- SELECT * FROM items WHERE price <= 300;

--3.3.4 All customers whose last name is ‘Smith’ (What will be your outcome?).
-- SELECT * FROM customers WHERE last_name = 'Smith'; --empty

--3.3.5 All customers whose last name is ‘Jones’.
-- SELECT * FROM customers WHERE last_name = 'Jones';

--3.3.6 All customers whose firstname is not ‘Scott’.
-- SELECT * FROM customers WHERE first_name != 'Scott';