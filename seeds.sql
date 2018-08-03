use bamazon;

-- Mock Data 
-- #1
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ShamWow","ShamWow",19.95,9);
-- #2
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flex Tape","FlexSealProducts",12.99,5);
-- #3
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brake Disc and Pad Kit","Auto Parts Train",333.88,2);
-- #4
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Noke Crossbody Bag","Noke",25.00,1);
-- #5
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bamazon For Dummies","Blops & Tobles",14.38,99);
-- #6
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("3ct Eternity Diamond","Blood Diamonds Inc.",55751.45,25);
-- #7
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brilliant Earth Band","Blood Diamonds Inc",550.33,3);
-- #8
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pizza Making Kit","Goober Products",89.99,12);
-- #9
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Derp Topic Black T-Shirt (Medium)","Derp Topic",24.95,10);
-- #10
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("24 Pack 12oz Shasta Soda","Shasta",36.00,10);

SELECT * FROM products;