-- CREATE TABLE customers(
--     id SERIAL,
--     first_name VARCHAR(50),
--     last_name VARCHAR(100) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE customer_profile(
--     id INT,
--     isLoggedIn BOOLEAN DEFAULT false,
--     customer_id INTEGER,
--     primary key (id),
--     FOREIGN KEY(customer_id) REFERENCES customers(id) ON DELETE CASCADE ON UPDATE CASCADE
-- );



-- INSERT INTO customers(first_name, last_name) VALUES
--     ('John', 'Doe'), 
--     ('Jerome', 'Lalu'), 
--     ('Lea', 'Rive');



-- check
-- SELECT * FROM customers;
-- SELECT * FROM customer_profile;



-- Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in

-- INSERT INTO customer_profile (id,customer_id,isLoggedIn)
-- SELECT id, id, true FROM customers WHERE first_name='John';
-- INSERT INTO customer_profile(id, customer_id, isLoggedIn)
-- SELECT id, id, false from customers WHERE first_name='Jerome';



-- Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers

-- SELECT first_name FROM customers 
-- INNER JOIN customer_profile ON customer_id=customers.id
-- WHERE isLoggedIn=true;



-- All the customers first_name and isLoggedIn columns - even the 
-- customers those who don’t have a profile.

-- SELECT first_name, isLoggedIn FROM customers 
-- LEFT JOIN customer_profile ON customer_id=customers.id;



-- The number of customers that are not LoggedIn

-- SELECT first_name FROM customers 
-- LEFT JOIN customer_profile ON customer_id=customers.id
-- WHERE 
--     customers.id NOT IN (SELECT customer_id FROM customer_profile)
--     OR isLoggedIn=false;



-- part 2
-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL

-- CREATE TABLE book(
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     author VARCHAR(100) NOT NULL
-- );
-- select * from book;



-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee

-- INSERT INTO book(title, author) VALUES 
--     ('Alice In Wonderland', 'Lewis Carroll'),
--     ('Harry Potter', 'J.K. Rowling'),
--     ('To kill a mockingbird', 'Harper Lee');



-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);

-- CREATE TABLE student(
--     student_id SERIAL PRIMARY KEY,
--     NAME VARCHAR(100) NOT NULL UNIQUE,
--     age INT CHECK(age <= 15)
-- );

-- check
-- select * from student;



-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14

-- INSERT INTO student(name, age) VALUES 
--     ('John', 12),
--     ('Lera', 11),
--     ('Patrick', 10),
--     ('Bob', 14);



-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table

-- CREATE TABLE library(
--     book_fk INT,
--     student_fk_id INT,
--     borrowed_date DATE,
--     FOREIGN KEY (book_fk) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     FOREIGN KEY (student_fk_id) REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     PRIMARY KEY (book_fk, student_fk_id)
-- );

-- check
-- select * from library;

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021

-- INSERT INTO library(book_fk, student_fk_id, borrowed_date) VALUES
--     ((SELECT book_id FROM book WHERE title LIKE 'Alice%'), (SELECT student_id FROM student WHERE name='John'), '15/02/2022'),
--     ((SELECT book_id FROM book WHERE title LIKE 'To kill%'), (SELECT student_id FROM student WHERE name='Bob'), '03/03/2021'),
--     ((SELECT book_id FROM book WHERE title LIKE 'Alice%'), (SELECT student_id FROM student WHERE name='Lera'), '23/05/2021'),
--     ((SELECT book_id FROM book WHERE title LIKE 'Harry%'), (SELECT student_id FROM student WHERE name='Bob'), '12/08/2021');



-- Display the data



-- Select all the columns from the junction table

-- SELECT * FROM library;



-- Select the name of the student and the title of the borrowed books
-- SELECT name, title 
-- FROM library 
-- INNER JOIN student ON student.student_id = library.student_fk_id
-- INNER JOIN book ON book.book_id = library.book_fk;



-- Select the average age of the children, that borrowed the book Alice in Wonderland
-- SELECT avg(age) FROM library
-- INNER JOIN student ON student.student_id = library.student_fk_id
-- INNER JOIN book on book.book_id = library.book_fk
-- WHERE title like 'Alice%';



-- Delete a student from the Student table, what happened in the junction table ?
-- DELETE FROM student 
-- WHERE name='John';

-- SELECT * FROM student;
-- SELECT * FROM library;
-- he is gone