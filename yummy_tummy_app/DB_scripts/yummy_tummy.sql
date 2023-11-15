ALTER TABLE orders AUTO_INCREMENT = 1001;
ALTER TABLE  menu COLUMN item_name VARCHAR(255); -- Adjust the length as needed
ALTER TABLE orders MODIFY COLUMN order_id INT AUTO_INCREMENT = 1001; -- particular column

