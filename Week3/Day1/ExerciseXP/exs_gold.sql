--1
select first_name, last_name, birth_date from students
order by last_name ASC 
limit 4;

--2
select first_name, last_name, birth_date from students
where birth_date=(select max(birth_date) from students);

--3
select first_name, last_name, birth_date from students
limit 3
offset 2;
