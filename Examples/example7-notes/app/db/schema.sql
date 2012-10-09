-- schema.sql
-- in here, put the DDL for creation of your database

-- these are just samples to go with the sample controller and model

create table notes
(
	id integer primary key,
	note varchar(1000)
);

-- note that Neutrino requires separate tables for record IDs

create table notes_id_seq
(
	id integer primary key auto_increment
);

