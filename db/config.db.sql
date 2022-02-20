CREATE DATABASE todolist;

USE todolist;

CREATE TABLE Users(
    userId INT NOT NULL AUTO_INCREMENT,
    lastname VARCHAR(100) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    bio VARCHAR(255)
    PRIMARY KEY(userId)
);

CREATE TABLE Project(
    projectId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    userId INT,
    PRIMARY KEY(projectId),
    FOREIGN KEY(userId) REFERENCES Users(userId) ON DELETE CASCADE
);

CREATE TABLE Task(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    created_at VARCHAR(255),
    projectId INT,
    PRIMARY KEY(id),
    FOREIGN KEY(projectId) REFERENCES Project(projectId) ON DELETE CASCADE
);