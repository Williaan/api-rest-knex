CREATE DATABASE query_knex;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE IF NOT EXISTS usuarios (
	id serial primary key,
	nome text not null,
	email text not null,
	telefone text not null
);