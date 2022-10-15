CREATE DATABASE ProductDB;
USE ProductDB;
CREATE TABLE ProductType (ID int PRIMARY KEY NOT NULL, Name varchar(70) NOT NULL, Suffix varchar(50));

CREATE TABLE Product (SKU varchar(40) PRIMARY KEY NOT NULL, Name varchar(70) NOT NULL, 
Price float NOT NULL, ProductInfo varchar(70) NOT NULL, ProductTypeID int NOT NULL, 
FOREIGN KEY (ProductTypeID) REFERENCES ProductType(ID));

INSERT INTO `ProductType` ( `ID`, `Name`, `Suffix`) VALUES (1,'DVD', 'MB'),(2,'Book', 'KG'),(3,'Furniture', '');