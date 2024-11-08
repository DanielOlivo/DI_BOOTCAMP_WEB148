-- exercise 1: dvd rental

-- Get a list of all the languages, from the language table.
select * from language;

-- Get a list of all films joined with their languages – select the following details : 
-- film title, description, and language name.

select title, description, language.name from film
inner join language
on film.language_id = language.language_id
-- limit 3
;

-- Get all languages, even if there are no films in those languages – 
-- select the following details : film title, description, and language name.
select title, description, name from language 
left join film 
on film.language_id = language.language_id
-- limit 3
;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film(
    id serial not null,
    name varchar(50),
    primary key(id)
);

drop table new_film;


create table customer_review(
    review_id serial not null,
    film_id integer not null,
    language_id integer,
    title varchar(50) not null,
    score integer,
    review_text varchar(255) not null,
    last_update date default now(),
    primary key(review_id),
    foreign key (film_id) references new_film(id) on delete cascade
);

-- select * from new_film;
-- select * from customer_review;

insert into new_film(name) values('Blade Runner'), ('Blade Runner 2048');

insert into customer_review(film_id, title, language_id, score, review_text) values
((select id from new_film where name='Blade Runner'), 'Blade Runner', 1, 90, 'Amazing'),
((select id from new_film where name='Blade Runner 2048'), 'Blade Runner 2048', 1, 90, 'Astonishing');

-- drop table customer_review;
-- drop table new_film;
-- select language_id from language where name = 'English';


delete from new_film where name='Blade Runner';
select * from new_film;
select * from customer_review;



-- exercise 2: dvd rental

-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

-- I absolutely adore Citizen Shrek and Lebowski Soldiers, two of my favorite films

-- citizen shrek is now german
update film 
set language_id=(select language_id from language where name = 'German')
where title='Citizen Shrek';

-- check
select title, language_id from film where title like '%Shrek%' limit 10;

-- lebowski soldiers in french now
update film
set language_id=(select language_id from language where name = 'French')
where title='Lebowski Soldiers';

-- check
select title, language_id from film where title like '%Lebo%' limit 10;


-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
CREATE TABLE IF NOT EXISTS public.customer
(
    customer_id integer NOT NULL DEFAULT nextval('customer_customer_id_seq'::regclass),
    store_id smallint NOT NULL,
    first_name character varying(45) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(45) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default",
    address_id smallint NOT NULL,
    activebool boolean NOT NULL DEFAULT true,
    create_date date NOT NULL DEFAULT ('now'::text)::date,
    last_update timestamp without time zone DEFAULT now(),
    active integer,
    CONSTRAINT customer_pkey PRIMARY KEY (customer_id),
    CONSTRAINT customer_address_id_fkey FOREIGN KEY (address_id)
        REFERENCES public.address (address_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE RESTRICT
)
-- address_id is foreign key

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
drop table customer_review;
-- table dropped without extra steps


-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select count(*) from rental
where return_date is null
;
-- 183


-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select film.title, rental_rate
from film 
full join inventory 
on film.film_id = inventory.film_id
full join rental
on inventory.inventory_id=rental.inventory_id
where rental.return_date is null
order by rental_rate desc
limit 30
; 

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, 
-- but he can’t remember their names. Can you help him find which movies he wants to rent?

-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select title, description 
from film
inner join film_actor 
on film.film_id = film_actor.film_id
inner join actor
on actor.actor_id=film_actor.actor_id
where 
    actor.first_name='Penelope' 
    and actor.last_name='Monroe'
    and description like '%Sumo%'
;


-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select title, category.name
from film
inner join film_category
on film.film_id = film_category.film_id
inner join category
on category.category_id = film_category.category_id
where
    rating='R'
    and category.name = 'Documentary'
    and length < 60
;


-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, 
-- and he returned it between the 28th of July and the 1st of August, 2005.
select title
from customer
inner join rental 
on rental.customer_id = customer.customer_id
inner join inventory 
on rental.inventory_id = inventory.inventory_id
inner join film 
on film.film_id = inventory.film_id
where
    first_name='Matthew'
    and last_name='Mahan'
    and rental_date >= '2005-07-28'
    and return_date <= '2005-08-01'
    and rental_rate > 4.00
;

-- The 4th film : His friend Matthew Mahan watched this film, as well. 
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
select title, description, replacement_cost
from customer
inner join rental 
on rental.customer_id = customer.customer_id
inner join inventory 
on rental.inventory_id = inventory.inventory_id
inner join film 
on film.film_id = inventory.film_id
where
    first_name='Matthew'
    and last_name='Mahan'
    and (title like '%Boat%' or description like '%Boat%')
order by replacement_cost desc
limit 1
;