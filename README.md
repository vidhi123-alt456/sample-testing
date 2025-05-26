# TatvaSoft
# Summer Internship Training – 2025

## Day 1: Introduction to PostgreSQL

### Tasks Completed:
1. **Created Tables:**
   - `customer` table with fields: `customer_id`, `first_name`, `last_name`, `email`, `created_date`, `updated_date`, `active`.
   - `orders` table with fields: `order_id`, `customer_id`, `order_date`, `order_number`, `order_amount`.

2. **Inserted Sample Data:**
   - Added 19 records to the `customer` table.
   - Added 19 records to the `orders` table.

3. **Performed SQL Operations:**
   - **UPDATE:** Modified a customer's first name.
     ```sql
     UPDATE customer SET first_name = 'jhon' WHERE customer_id = 2;
     ```
   - **DELETE:** Removed a customer record.
     ```sql
     DELETE FROM customer WHERE customer_id = 8;
     ```
   - **SELECT Queries:**
     - Basic retrieval with sorting (`ASC`, `DESC`).
     - Filtering using `WHERE`, `AND`, `OR`, `IN`, `LIKE`, `BETWEEN`, `IS NULL`, `IS NOT NULL`.
     - Aggregation with `GROUP BY`, `COUNT`, `MAX`.
   - **Joins:**
     - `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN` between `customer` and `orders` tables.
   - **Subqueries:**
     - Used `IN`, `ANY`, `ALL`, and `EXISTS` with subqueries.

### SQL Snippets:
```sql
-- Example: Retrieve customers with their orders
SELECT customer.customer_id, customer.first_name, orders.order_id, orders.order_date 
FROM customer 
INNER JOIN orders ON customer.customer_id = orders.customer_id;

-- Example: Filter customers with names starting with 'J'
SELECT customer_id, first_name, last_name 
FROM customer 
WHERE first_name LIKE 'J%';
