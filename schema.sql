DROP DATABASE IF EXISTS travel;

CREATE DATABASE travel;

USE travel;

CREATE TABLE blog (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50),
  email varchar(50),
  country varchar(50),
  description varchar(50),
  imageUrl varchar(500),
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- INSERT INTO (name,email,description,imageUrl)  VALUES ("Malisia","benaskerichrak@gmail", "Malaysia is a multi-ethnic and multi-religious country in Southeast Asia and one of the wealthiest and most developed countries, outranked in GNP only by Singapore and oil-rich Brunei. The Federation of Malaya became an independent country on 31 August 1957","https://www.exportiamo.it/thumb/1200x800/public/aree/14242/malesia-1.jpg");
-- INSERT Into (name,email,description,imageUrl) VALUES  ("Switzerland","hhhhh@gmail.com","https://img-4.linternaute.com/t4CHV7jImJOko9OIw7Zi4AEp5DM=/660x366/smart/fe4cdc42c6704f0999801738a2d474d9/ccmcms-linternaute/13287800.jpg","Switzerland, officially the Swiss Confederation, is a country situated at the confluence of Western, Central, and Southern Europe.[note 4][13] It is a federal republic composed of 26 cantons, with federal authorities based in Bern.[note 1][2][1] Switzerland is a landlocked country bordered by Italy to the south, France to the west");
-- INSERT Into (name,email,description,imageUrl) VALUES ( )