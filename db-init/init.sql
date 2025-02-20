CREATE Table if not exists users (
    id serial primary key,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);

Insert into users (name, email, password) values ('admin', 'admin@localhost.fr', 'admin');