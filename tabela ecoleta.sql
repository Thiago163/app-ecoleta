create database BDECOLETA;
USE BDECOLETA;

create table TB_USUARIOS (
id int auto_increment primary key,
nome varchar(100),
email varchar(200),
senha varchar(20)
);

CREATE table TB_LOCAIS(
id int auto_increment primary key,
titulo varchar(100),
TipoResiduo varchar(100),
descricao varchar(200),
endereco text,
cidade varchar(200),
tefefone text,
latitude decimal (11, 7),
longitude decimal (11, 7)
);

insert into TB_USUARIOS (nome,email,senha) values
("Caio", "md.caio@gmail.com", "123"),
("Maria", "md.Maria@gmail.com", "123"),
("João", "md.João@gmail.com", "123");