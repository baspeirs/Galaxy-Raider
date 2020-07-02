DROP DATABASE IF EXISTS galaxy_db;

CREATE DATABASE galaxy_db;

USE galaxy_db;

CREATE TABLE planet (
	id INT AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
    occupied_race VARCHAR(30) NOT NULL,
    hostile_race VARCHAR(30) NULL,
    engineering_recources INT(10) NULL,
    cooking_recource INT(10) NULL,
    financier_recource INT(10) NULL,
    PRIMARY KEY(id)
);