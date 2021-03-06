DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(150),
    department_name VARCHAR(150),
    price DOUBLE(10,2),
    stock_quantity INT NOT NULL,
    Primary Key (item_id)
);