--1.
CREATE DATABASE IF NOT EXISTS "public"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'

--2.
create table if not exists public.items (
    item_id serial primary key,
    item_name varchar(100) not null,
    price int not null
);

create table if not exists public.customers(
    customer_id serial primary key,
    first_name varchar (50) not null,
    last_name varchar (100) not null
);

--3.1
INSERT INTO public.items (item_name, price) VALUES('Small Desk', 100);
INSERT INTO public.items (item_name, price) VALUES('Large Desk', 300);
INSERT INTO public.items (item_name, price) VALUES('Fan', 80);

--3.2
INSERT INTO public.customers (first_name, last_name) VALUES('Greg', 'Jones');
INSERT INTO public.customers (first_name, last_name) VALUES('Sandra', 'Jones');
INSERT INTO public.customers (first_name, last_name) VALUES('Scott', 'Scott');
INSERT INTO public.customers (first_name, last_name) VALUES('Trevor', 'Green');
INSERT INTO public.customers (first_name, last_name) VALUES('Melanie', 'Johnson');

--3.3
--3.3.1
select * from items;
--3.3.2
select * from items where price > 80;
--3.3.3
select * from items where price <= 300;
--3.3.4
select * from customers where last_name = 'Smith'; --empty
--3.3.5
select * from customers where last_name = 'Jones';
--3.3.6
select * from customers where first_name = 'Scott';