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


-- part 2
-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
create table book(
    book_id serial primary key,
    title varchar(100) not null,
    author varchar(100) not null
);
select * from book;

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
insert into book(title, author) values 
    ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K. Rowling'),
    ('To kill a mockingbird', 'Harper Lee');

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
create table student(
    student_id serial primary key,
    name varchar(100) not null unique,
    age int check(age <= 15)
);
select * from student;

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14
insert into student(name, age) values 
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
create table library(
    book_fk int,
    student_fk_id int,
    borrowed_date date,
    foreign key (book_fk) references book(book_id) on delete cascade on update cascade,
    foreign key (student_fk_id) references student(student_id) on delete cascade on update cascade,
    primary key (book_fk, student_fk_id)
);
select * from library;

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
insert into library(book_fk, student_fk_id, borrowed_date) values
    ((select book_id from book where title like 'Alice%'), (select student_id from student where name='John'), '15/02/2022'),
    ((select book_id from book where title like 'To kill%'), (select student_id from student where name='Bob'), '03/03/2021'),
    ((select book_id from book where title like 'Alice%'), (select student_id from student where name='Lera'), '23/05/2021'),
    ((select book_id from book where title like 'Harry%'), (select student_id from student where name='Bob'), '12/08/2021');

-- Display the data
-- Select all the columns from the junction table
select * from library;

-- Select the name of the student and the title of the borrowed books
select name, title 
from library 
inner join student on student.student_id = library.student_fk_id
inner join book on book.book_id = library.book_fk;

-- Select the average age of the children, that borrowed the book Alice in Wonderland
select avg(age) from library
inner join student on student.student_id = library.student_fk_id
inner join book on book.book_id = library.book_fk
where title like 'Alice%';

-- Delete a student from the Student table, what happened in the junction table ?
delete from student 
where name='John';

select * from student;
select * from library;
-- he is gone