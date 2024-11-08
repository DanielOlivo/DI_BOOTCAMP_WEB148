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