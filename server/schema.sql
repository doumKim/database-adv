DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45),
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(255) NOT NULL,
  roomname VARCHAR(45) NOT NULL,
  username VARCHAR(45),
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);


/* Create other tables and define schemas for them here! */
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

 /*
 id
 username
 text
 date
 roomname
 */