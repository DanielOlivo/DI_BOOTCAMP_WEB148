drop table if exists students;

create table if not exists students(
    id serial primary key,
    last_name varchar(255) not null,
    first_name varchar(255) not null,
    birth_date DATE not null
);

insert into students (first_name, last_name, birth_date)
values('Marc','Benichou','1998-11-02');

insert into students (first_name, last_name, birth_date)
values('Yoan','Cohen','2010-12-03');

insert into students (first_name, last_name, birth_date)
values('Lea','Benichou','1987-07-27');

insert into students (first_name, last_name, birth_date)
values('Amelia','Dux','1996-04-07');

insert into students (first_name, last_name, birth_date)
values('David','Grez','2003-06-14');

insert into students (first_name, last_name, birth_date)
values('Omer','Simpson','1980-10-03');

-- select

--1
select * from students;

--2
select first_name, last_name from students;

--3.1
select first_name, last_name from students where id=2;

--3.2
select first_name, last_name from students where last_name='Benichou' and first_name='Marc';

--3.3
select first_name, last_name from students where last_name='Benichou' or first_name='Marc';

--3.4
select first_name, last_name from students where first_name like '%a%';

--3.5
select first_name, last_name from students where first_name like 'a%';

--3.6
select first_name, last_name from students where first_name like '%a';

--3.7
select first_name, last_name from students where position('a' in first_name) > 0;

--3.8
select first_name, last_name from students where id=1 and id=3; --empty

--4
select first_name, last_name from students where birth_date >= '2000-01-01';


