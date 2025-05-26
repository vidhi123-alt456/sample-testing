-- Create customer table
CREATE TABLE customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    created_date TIMESTAMPTZ,
    updated_date TIMESTAMPTZ,
    active BOOLEAN
);

-- Insert data into customer table
INSERT INTO customer (first_name, last_name, email, created_date, active)
VALUES
('Bansi', 'Sachade', 'bansi.sachade@tatvasoft.com', NOW(), true),
('John', 'Doe', 'johndoe@example.com', NOW(), true),
-- [remaining customer records...];

-- Create orders table
CREATE TABLE public.orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    order_date TIMESTAMPTZ NOT NULL,
    order_number VARCHAR(50) NOT NULL,
    order_amount NUMERIC(10,2) NOT NULL
);

-- Insert data into orders table
INSERT INTO public.orders (customer_id, order_date, order_number, order_amount) VALUES
(1, '2024-01-01 00:00:00+05:30', 'ORD001', 50.00),
(2, '2024-01-01 00:00:00+05:30', 'ORD002', 35.75),
-- [remaining order records...];

-- Select all customers
select * from customer;

-- Select all orders
select* from orders;

-- Update customer record
update customer set first_name = 'jhon' where customer_id = 2;

-- Delete customer record
delete from customer where customer_id=8;

-- Select with sorting
select first_name from customer order by first_name asc;
select first_name,last_name from customer order by last_name desc;

-- Filter records
select last_name,first_name from customer where first_name='bansi';
select last_name,first_name from customer where first_name='bansi' and last_name='patel';
select last_name,first_name from customer where first_name='bansi' or last_name='patel';

-- Advanced filtering
select customer_id,first_name,last_name from customer where first_name in ('bansi','John','James');
select customer_id,first_name,last_name from customer where first_name like 'J%';
select customer_id,first_name,last_name from customer where customer_id between 5 and 15;

-- Null checks
select customer_id,first_name,last_name from customer where last_name is null;
select customer_id,first_name,last_name from customer where last_name is not null;
select customer_id,first_name,last_name from customer where updated_date is not null;

-- Aggregation
select last_name,count(*) as count from customer group by last_name;
select first_name,max(customer_id) from customer group by first_name;

-- Table joins
select customer.customer_id,customer.first_name,orders.order_id,orders.order_date 
from customer inner join orders on customer.customer_id=orders.customer_id;

select customer.customer_id,customer.first_name,orders.order_id 
from customer left join orders on customer.customer_id=orders.customer_id;

select customer.customer_id,customer.first_name,orders.order_id,orders.order_date 
from customer right join orders on customer.customer_id = orders.customer_id;

select * from customer full join orders on customer.customer_id = orders.customer_id;

-- Subqueries
select first_name,last_name from customer where customer_id in (select customer_id from orders);
select first_name,last_name from customer where customer_id > any (select customer_id from orders);
select first_name,last_name from customer where customer_id > all (select customer_id from orders);

-- Exists clause
Select first_name, last_name FROM customer c 
where exists (
    Select 1
    from orders o
    where o.customer_id = c.customer_id
);