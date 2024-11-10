create table regions(
    id serial primary key,
    name varchar(50) not null unique
);

select * from regions;

-- insert into regions(name) values('reg1'), ('reg2');
-- insert into regions(name) values('reg1');

create table countries(
    id serial primary key,
    region_id serial not null,
    name varchar(100) unique not null,
    foreign key (region_id) references regions(id) on delete cascade on update cascade
);

create table capitals(
    id serial primary key,
    country_id serial not null,
    name varchar(100) not null,
    foreign key (country_id) references countries(id) on delete cascade on update cascade
);

create table flags(
    id serial primary key,
    country_id serial not null,
    png varchar(255),
    svg varchar(255),
    foreign key (country_id) references countries(id) on delete cascade on update cascade
);

create table populations(
    id serial primary key,
    country_id serial not null,
    population int not null,
    foreign key (country_id) references countries(id) on delete cascade on update cascade
);
