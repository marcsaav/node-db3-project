-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
    productname,
    c.categoryname
from product p
join category c
    on p.categoryid = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select
    id,
    s.companyname,
    orderdate
from `order` o
join shipper s
    on o.shipvia = s.id
where DATE(orderdate) < DATE('2012-08-09')

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
    orderid,
    p.productname,
    quantity
from `orderdetail` o
join product p
    on o.productid = p.id
where o.orderid = 10251
order by p.productname


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
    id orderid,
    c.companyname customer_companyname,
    e.lastname employee_lastname
from `order` o
join customer c
    on o.customerid = c.Id
join employee e
    on o.EmployeeId = e.Id
