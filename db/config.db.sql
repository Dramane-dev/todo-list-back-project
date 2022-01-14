CREATE DATABASE todolist;

USE todolist;

CREATE TABLE Users(
    userId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(userId)
);

CREATE TABLE TodoList(
    todoListId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    userId INT,
    PRIMARY KEY(todoListId),
    FOREIGN KEY(userId) REFERENCES Users(userId)
);

CREATE TABLE Task(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    created_at DATE,
    status VARCHAR(20) NOT NULL,
    todoListId INT,
    PRIMARY KEY(id),
    FOREIGN KEY(todoListId) REFERENCES TodoList(todoListId)
);