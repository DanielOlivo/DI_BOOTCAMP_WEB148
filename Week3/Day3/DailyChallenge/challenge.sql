create table customers(
    id serial,
    first_name varchar(50),
    last_name varchar(100) not null,
    primary key (id)
);

create table customer_profile(
    id int,
    isLoggedIn boolean default false,
    customer_id integer,
    primary key (id),
    foreign key(customer_id) references customers(id) on delete cascade on update cascade
);

drop table customer_profile;

insert into customers(first_name, last_name) values
('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

select * from customers;
select * from customer_profile;

-- Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in
insert into customer_profile (id,customer_id,isLoggedIn)
select id, id, true from customers where first_name='John';

insert into customer_profile(id, customer_id, isLoggedIn)
select id, id, false from customers where first_name='Jerome';

-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
select first_name from customers 
inner join customer_profile on customer_id=customers.id
where isLoggedIn=true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
select first_name, isLoggedIn from customers 
left join customer_profile on customer_id=customers.id;

-- The number of customers that are not LoggedIn
select first_name from customers 
left join customer_profile on customer_id=customers.id
where 
    customers.id not in (select customer_id from customer_profile)
    or isLoggedIn=false
;
