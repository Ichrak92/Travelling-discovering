DROP DATABASE IF EXISTS travel;

CREATE DATABASE travel;

USE travel;

CREATE TABLE blog (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(15) NOT NULL ,
  country varchar(50) NOT NULL,
  descip varchar(1000) NOT NULL,
  imageUrl varchar(1000) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

INSERT INTO blog (name,country,descip,imageUrl)  VALUES ("Ichrak","Malaysia", "Malaysia is a multi-ethnic and multi-religious country in Southeast Asia and one of the wealthiest and most developed countries, outranked in GNP only by Singapore and oil-rich Brunei. The Federation of Malaya became an independent country on 31 August 1957","https://www.exportiamo.it/thumb/1200x800/public/aree/14242/malesia-1.jpg");
INSERT INTO blog (name,country,descip,imageUrl) VALUES  ("Ayssem","Switzerland","Switzerland officially the Swiss Confederation, is a country situated at the confluence of Western, Central, and Southern Europe.[note 4][13] It is a federal republic composed of 26 cantons, with federal authorities based in Bern.[note 1][2][1] Switzerland is a land","https://img-4.linternaute.com/t4CHV7jImJOko9OIw7Zi4AEp5DM=/660x366/smart/fe4cdc42c6704f0999801738a2d474d9/ccmcms-linternaute/13287800.jpg");
INSERT INTO blog (name,country,descip,imageUrl) VALUES ("Youssef","Galite Islands", "Galite is an archipelago of rocky islands of volcanic origin located in the north of Tunisia. It’s the most northerly point of all the African continent, about forty kilometers north-west of Cape Serrat, the closest point of the Tunisian coast, from which it is sepa of Cape Spartivento (south-west Sardinia), its area is 8,08 km2.The main island in the center of the archipelago, La Galite, measures 5.4 kilometers in length from east to west and up to 2.9 kilometers in width in its eastern part. Bordered by cliffs 200 meters high, it can be approached by the bay of Escueil de Pasque","http://www.pagesport.tn/wp-content/uploads/2016/04/la-galite.jpg" );
INSERT INTO blog (name,country,descip,imageUrl) VALUES ("Lina","Ain Soltan", "Ain Soltane is a Tunisian village in the north-west of Ghardimaou in the state of Jendouba, near the Tunisian border with Algeria. The village contains a Camping Centre managed by the Ministry of Youth and Sports. Groups of young people come from time to time to spend their summer holidays, especially Tunisian Scouts. In fact, summer camping dates back to the colonial period when Ain Soltane was designated as a national camping centre for the French. And until now there are traces of a swimming pool, bathrooms and camping sites in the village. Recently work has begun to build a national training complex for sports teams, similar to that in Ain Draham. This project will represent a quantum leap in the history of the .","https://www.voyage-tunisie.info/wp-content/uploads/2017/11/ainsoltan2.jpg")