CREATE DATABASE IF NOT EXISTS Vot;
USE Vot;


CREATE TABLE Posts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    username VARCHAR(255) NOT NULL,
);