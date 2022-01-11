CREATE DATABASE todolist;

USE todolist;

CREATE TABLE Users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Todos(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    created_at DATE,
    status VARCHAR(20) NOT NULL,
    PRIMARY KEY(id)
);