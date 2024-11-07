-- exercise 1

-- You were hired to babysit your cousin and you want to find a few movies that he can watch with you.
-- 1. Find out how many films there are for each rating.
select count(distinct rating) from film;


-- 2. Get a list of all the movies that have a rating of G or PG-13.
select title from film
where rating in ('G', 'PG-13')
-- limit 3
;

-- 2.1 Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
select title from film
where length < 120 and rental_rate < 3.00
order by title asc
-- limit 3
;


-- 3. Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- let it be the customer with id 310
-- grant select on all tables in SCHEMA public to daniel;
-- grant update on all tables in SCHEMA public to daniel;
update customer
set first_name='Vitalii', last_name='Masterov', email='vit.masterov@gmail.com'
where customer_id=310
;

--checking
select * from customer
where customer_id=310
;

-- 4. Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
-- I will create a new one
select max(address_id) from address; -- just to know the next id (it is 605)


select count(*) from city;

select * from country 
where country='Israel'; -- id of Israel is 48; Haifa's id wiil be 601

insert into city (city_id, city, country_id)
values (601, 'Haifa', 48);

-- checking
select * from city where city='Haifa';


-- this will be posted on public repository, so I will not tell you 
insert into address (address_id, address, district, city_id, postal_code, phone)
values(1000, 'some street', 'some district', 601, 'unknown', '000-0000000')
;

--updating my entry
update customer 
set address_id=1000 
where customer_id=310;


