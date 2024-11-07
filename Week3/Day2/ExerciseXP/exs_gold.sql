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


-- exercise 2
-- grant select, insert, update, delete on all tables in SCHEMA public to daniel;

-- Update
-- ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.
update students
set birth_date='02/11/1998'
where last_name like '%Benichou'
;

select * from students;

-- Change the last_name of David from ‘Grez’ to ‘Guez’.
update students 
set last_name='Guez'
where id=5;

select * from students;

-- Delete
-- Delete the student named ‘Lea Benichou’ from the table.
delete from students 
where first_name='Lea' and last_name='Benichou';

select * from students;

-- Count
-- Count how many students are in the table.
select count(*) from students; -- 5

-- Count how many students were born after 1/01/2000.
select count(*) from students
where birth_date > '1/01/2000'; -- 2


--grant create on database bootcamp to daniel;
-- Insert / Alter
-- Add a column to the student table called math_grade.
alter table students 
add math_grade integer;

select * from students;

-- Add 80 to the student which id is 1.
update students
set math_grade=80 
where id=1;

-- Add 90 to the students which have ids of 2 or 4.
update students
set math_grade=90 
where id in (2,4);


-- Add 40 to the student which id is 6.
update students
set math_grade=40 
where id=6;

-- Count how many students have a grade bigger than 83
select count(*) from students where math_grade > 83; -- 2

-- Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
insert into students(last_name, first_name, birth_date, math_grade)
values('Simpson', 'Omer', '1980-10-03', 70);

-- Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.

-- Bonus: Count how many grades each student has.
-- Tip: You should display the first_name, last_name and the number of grades of each student. If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.
-- Tip : Use an alias called total_grade to fetch the grades.
-- Hint : Use GROUP BY.

-- TO THE CHECKER: GUEZ without grades!
select (first_name, last_name) as full_name, count(math_grade) from students
group by full_name;

-- SUM
-- Find the sum of all the students grades.
select sum(max) from (
    select (first_name, last_name) as full_name, max(math_grade) from students
    where math_grade is not null
    group by full_name
);


-- exercise 3
-- Create a table named purchases. It should have 3 columns :
-- id : the primary key of the table
-- customer_id : this column references the table customers
-- item_id : this column references the table items
-- quantity_purchased : this column is the quantity of items purchased by a certain customer
create table purchases(
    id serial primary key,
    customer_id integer,
    item_id integer,
    quantity_purchased integer
);

select * from purchases;

insert into purchases(id, customer_id, item_id, quantity_purchased)
values
(1,3,3,1),
(2,5,2,10),
(3,1,1,2);

-- Use SQL to get the following from the database:
-- All purchases. Is this information useful to us?
select * from purchases;
-- nope

-- All purchases, joining with the customers table.
select first_name, last_name, purchases.item_id, quantity_purchased 
from purchases
inner join customers
on customers.customer_id = purchases.customer_id;

-- Purchases of the customer with the ID equal to 5.
select first_name, last_name, purchases.item_id, quantity_purchased 
from purchases
inner join (select * from customers where customer_id=5) as customers
on customers.customer_id = purchases.customer_id;


-- Purchases for a large desk AND a small desk
select * from (
    select items.item_name, purchases.customer_id, quantity_purchased from purchases
    inner join items
    on items.item_id = purchases.item_id
)
where item_name like '%Desk';

-- update items set item_id=1 where item_name='Small Desk';
-- update items set item_id=2 where item_name='Large Desk';
-- update items set item_id=3 where item_name='Fan';

-- select * from purchases;
-- select * from items;