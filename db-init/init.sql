CREATE Table if not exists users (
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);

Insert into users (name, email, password) values ('admin', 'admin@localhost.fr', 'admin');

CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    published_date DATE NOT NULL,
    genre VARCHAR(255) NOT NULL
);

INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 1', 'Auteur 1', '2023-01-01', 'Fiction');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 2', 'Auteur 2', '2023-02-01', 'Science');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 3', 'Auteur 3', '2023-03-01', 'Histoire');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 4', 'Auteur 4', '2023-04-01', 'Fiction');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 5', 'Auteur 5', '2023-05-01', 'Science');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 6', 'Auteur 6', '2023-06-01', 'Histoire');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 7', 'Auteur 7', '2023-07-01', 'Fiction');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 8', 'Auteur 8', '2023-08-01', 'Science');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 9', 'Auteur 9', '2023-09-01', 'Histoire');
INSERT INTO books (title, author, published_date, genre) VALUES ('Livre 10', 'Auteur 10', '2023-10-01', 'Fiction');