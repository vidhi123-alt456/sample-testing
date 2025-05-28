<<<<<<< HEAD
<<<<<<< HEAD
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
=======
# LoginApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> d3350c3 (Initial Angular 18 project commit)
=======
# Tatvasoft 
# Summer_Internship – 2025

## Day 1: Introduction to PostgreSQL
- Learned SQL basics and set up PostgreSQL database with schema.
- Performed CRUD operations (Create, Insert, Update, Delete) and subqueries.
- Hands-on practice with tables `customer` and `orders`.

## Day 2: Introduction to Angular
- Explored Angular framework and built a basic app.
- Created a login page with forms and components.
- Hands-on experience with Angular CLI and component creation.
>>>>>>> 552fc6bb05cb6545e4572aec8fbeae95ac41df12
