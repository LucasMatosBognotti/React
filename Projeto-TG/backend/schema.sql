/* Create database */
CREATE DATABASE LostandFound;

/* Create table users */
CREATE TABLE Users (
  idUser INTEGER AUTO_INCREMENT PRIMARY KEY,
  ra VARCHAR(50) NOT NULL,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password_hash VARCHAR(50) NOT NULL
);

/* Create table Items */
CREATE TABLE Items (
	idItem INTEGER AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL,
  descricao VARCHAR(200) NOT NULL,

  idUser INTEGER,
  FOREIGN KEY (idUser) REFERENCES Users(idUser)
);

/* Create table Post */
CREATE TABLE Posts (
	idPost INTEGER AUTO_INCREMENT PRIMARY KEY,
  descricao VARCHAR(200) NOT NULL,

  idPostPai INTEGER,
  FOREIGN KEY (idPostPai) REFERENCES Posts(idPost),

  idItem INTEGER,
  FOREIGN KEY (idItem) REFERENCES Items(idItem),

  idUser INTEGER,
  FOREIGN KEY (idUser) REFERENCES Users(idUser)
);


/* TABLE USERS */
SELECT * FROM Users;
INSERT INTO Users(ra, nome, email, password_hash) VALUES ('1090481721030', 'Lucas Matos Bognotti', 'lucasmatosbognotti@gmail.com', '123')
INSERT INTO Users(ra, nome, email, password_hash) VALUES ('109048172105', 'Ana Paula Santos', 'anapaulasantos@gmail.com', '123')


/* TABLE ITEMS */
SELECT * FROM Items;
INSERT INTO Items(nome, descricao, idUser) VALUES ('Mochila', 'Mochila, Preta da Dell', 1)


/* TABLE POST */
SELECT * FROM Posts;
INSERT INTO Posts(descricao, idItem, idUser) VALUES ('Encontrei a mochila da dell na sala do 4ºADS', 1, 1)
INSERT INTO Posts(descricao, idPostPai, idItem, idUser) VALUES ('Ola Lucas, Muito obrigado por ter achado minha mochila', 1, 1, 2)


/*

  Usuario (1 : 1) perde/pertence (0 : N) Item

  Items (1 : 1) ter/pertence (1 : N) Post

  Post (0 : N) pertence/ter (1 : 1) Usuario

  Post (1 : 1) ter/pertence (0 : N) Post

*/