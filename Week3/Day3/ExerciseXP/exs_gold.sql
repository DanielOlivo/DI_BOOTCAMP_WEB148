-- exercise 1

-- Get a list of all rentals which are out (have not been returned). How do we identify these films in the database?
select rental_id, title
from inventory 
inner join rental on rental.inventory_id = inventory.inventory_id 
inner join film on inventory.film_id = film.film_id
where return_date is null
-- limit 3
;

-- Get a list of all customers who have not returned their rentals. Make sure to group your results.
select distinct (first_name, last_name)
from rental
inner join customer on customer.customer_id = rental.customer_id
-- limit 3
;


-- Get a list of all the Action films with Joe Swank.
select title 
from film
inner join film_category on film.film_id = film_category.film_id
inner join category on category.category_id = film_category.category_id
inner join film_actor on film.film_id = film_actor.film_id
inner join actor on film_actor.actor_id = actor.actor_id
where 
    first_name = 'Joe'
    and last_name = 'Swank'
    and category.name = 'Action'
;
