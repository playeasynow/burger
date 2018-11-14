/* schema for SQL database/table */
DROP DATABASE IF EXISTS burgers_db;

/* database created and used */
CREATE DATABASE burgers_db;
USE burgers_db;

/* burgers table with a primary key that auto-increments, and a text field */
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);
