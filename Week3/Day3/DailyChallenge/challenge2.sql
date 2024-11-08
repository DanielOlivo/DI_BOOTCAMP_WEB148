create table items(
    id serial primary key,
    name varchar(100) not null,
    cost int check(cost >= 0) not null
);

create table orders(
    id serial primary key,
    order_id int,
    item_id serial,
    amount int check(amount > 0),
    foreign key (item_id) references items(id) on delete cascade on update cascade 
);

select * from items;
select * from orders;

insert into items(name, cost) values
    ('item1', 10),
    ('item2', 10),
    ('item3', 10),
    ('item4', 10),
    ('item5', 10);

insert into orders(order_id, item_id, amount) values
    (1, 1, 1),
    (1, 2, 2),
    (1, 3, 3),
    (1, 4, 4),
    (1, 5, 5);

create or replace function cost_count(order_id int) returns int as $result$
declare
    result int;
begin 
    result := (
        select sum(cost * amount) 
        from orders 
        inner join items on orders.item_id = items.id
    );
    return result;
end;
$result$ language plpgsql;

select * from cost_count(1);