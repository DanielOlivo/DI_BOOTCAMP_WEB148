-- exercise 1: dvd rental

-- Get a list of all the languages, from the language table.

-- SELECT * FROM language;



-- Get a list of all films joined with their languages – select the following details : 
-- film title, description, and language name.

-- SELECT title, description, language.name FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id;



-- Get all languages, even if there are no films in those languages – 
-- select the following details : film title, description, and language name.

-- SELECT title, description, name FROM language 
-- LEFT JOIN film 
-- ON film.language_id = language.language_id;



-- Create a new table called new_film with the following 
-- columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film(
--     id SERIAL NOT NULL,
--     name VARCHAR(50),
--     PRIMARY KEY(id)
-- );



-- Create a new table called customer_review

-- CREATE TABLE customer_review(
--     review_id SERIAL NOT NULL,
--     film_id INTEGER NOT NULL,
--     language_id INTEGER,
--     title VARCHAR(50) NOT NULL,
--     score INTEGER,
--     review_text VARCHAR(255) NOT NULL,
--     last_update DATE DEFAULT NOW(),
--     PRIMARY KEY(review_id),
--     FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE
-- );



-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- insert into new_film(name) values('Blade Runner'), ('Blade Runner 2048');

-- insert into customer_review(film_id, title, language_id, score, review_text) values
-- ((select id from new_film where name='Blade Runner'), 'Blade Runner', 1, 90, 'Amazing'),
-- ((select id from new_film where name='Blade Runner 2048'), 'Blade Runner 2048', 1, 90, 'Astonishing');


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- delete from new_film where name='Blade Runner';
-- select * from new_film;
-- select * from customer_review;



-- exercise 2: dvd rental



-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- I absolutely adore Citizen Shrek and Lebowski Soldiers, two of my favorite films
-- citizen shrek is now german

-- UPDATE film 
-- SET language_id=(SELECT language_id FROM language WHERE name = 'German')
-- WHERE title='Citizen Shrek';

-- check
-- SELECT title, language_id FROM film WHERE title LIKE '%Shrek%';

-- lebowski soldiers in french now
-- UPDATE film
-- SET language_id=(SELECT language_id FROM language WHERE name = 'French')
-- WHERE title='Lebowski Soldiers';

-- check
-- SELECT title, language_id FROM film WHERE title LIKE '%Lebo%';



-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- CREATE TABLE IF NOT EXISTS public.customer
-- (
--     customer_id integer NOT NULL DEFAULT nextval('customer_customer_id_seq'::regclass),
--     store_id smallint NOT NULL,
--     first_name character varying(45) COLLATE pg_catalog."default" NOT NULL,
--     last_name character varying(45) COLLATE pg_catalog."default" NOT NULL,
--     email character varying(50) COLLATE pg_catalog."default",
--     address_id smallint NOT NULL,
--     activebool boolean NOT NULL DEFAULT true,
--     create_date date NOT NULL DEFAULT ('now'::text)::date,
--     last_update timestamp without time zone DEFAULT now(),
--     active integer,
--     CONSTRAINT customer_pkey PRIMARY KEY (customer_id),
--     CONSTRAINT customer_address_id_fkey FOREIGN KEY (address_id)
--         REFERENCES public.address (address_id) MATCH SIMPLE
--         ON UPDATE CASCADE
--         ON DELETE RESTRICT
-- )
-- address_id is foreign key



-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
-- DROP TABLE customer_review;
-- table dropped without extra steps



-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
-- SELECT count(*) FROM rental
-- WHERE return_date IS NULL;
-- 183



-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
-- SELECT film.title, rental_rate
-- FROM film 
-- FULL JOIN inventory 
-- ON film.film_id = inventory.film_id
-- FULL JOIN rental
-- ON inventory.inventory_id=rental.inventory_id
-- WHERE rental.return_date IS NULL
-- ORDER BY rental_rate DESC
-- LIMIT 30; 



-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, 
-- but he can’t remember their names. Can you help him find which movies he wants to rent?

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
-- SELECT title, description 
-- FROM film
-- INNER JOIN film_actor 
-- ON film.film_id = film_actor.film_id
-- INNER JOIN actor
-- ON actor.actor_id=film_actor.actor_id
-- WHERE 
--     actor.first_name='Penelope' 
--     AND actor.last_name='Monroe'
--     AND description LIKE '%Sumo%';



-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- SELECT title, category.name
-- FROM film
-- INNER JOIN film_category
-- ON film.film_id = film_category.film_id
-- INNER JOIN category
-- ON category.category_id = film_category.category_id
-- WHERE
--     rating='R'
--     AND category.name = 'Documentary'
--     AND length < 60;



-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.

-- SELECT title
-- FROM customer
-- INNER JOIN rental 
-- ON rental.customer_id = customer.customer_id
-- INNER JOIN inventory 
-- ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN film 
-- ON film.film_id = inventory.film_id
-- WHERE
--     first_name='Matthew'
--     AND last_name='Mahan'
--     AND rental_date >= '2005-07-28'
--     AND return_date <= '2005-08-01'
--     AND rental_rate > 4.00;



-- The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

-- SELECT title, description, replacement_cost
-- FROM customer
-- INNER JOIN rental 
-- ON rental.customer_id = customer.customer_id
-- INNER JOIN inventory 
-- ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN film 
-- ON film.film_id = inventory.film_id
-- WHERE
--     first_name='Matthew'
--     AND last_name='Mahan'
--     AND (title LIKE '%Boat%' OR description like '%Boat%')
-- ORDER BY replacement_cost DESC
-- LIMIT 1;