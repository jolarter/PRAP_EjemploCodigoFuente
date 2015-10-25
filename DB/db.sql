CREATE TABLE rol
  (
     idrol INT UNIQUE,
     name  VARCHAR(50),
     PRIMARY KEY(idrol)
  )

CREATE TABLE level
  (
     idlevel INT UNIQUE,
     name    VARCHAR(50),
     points  INT,
     PRIMARY KEY(idlevel)
  )

CREATE TABLE users
  (
     iduser   INT,
     name     VARCHAR(100),
     mail     VARCHAR(50),
     password VARCHAR(50),
     active   BIT,
     rol      INT,
     level    INT,
     PRIMARY KEY(iduser),
     FOREIGN KEY(rol) REFERENCES rol(idrol),
     FOREIGN KEY(level) REFERENCES level(idlevel)
  )

CREATE TABLE token
  (
     idtoken    INT,
     token      VARCHAR(100),
     tipe       INT,
     start_date DATE,
     end_date   DATE,
     iduser     INT,
     PRIMARY KEY(idtoken),
     FOREIGN KEY(iduser) REFERENCES users(iduser)
  )

CREATE TABLE category
  (
     idcategory  INT UNIQUE,
     name        VARCHAR(50),
     description TEXT,
     imgurl      VARCHAR(250),
     PRIMARY KEY(idcategory)
  )

CREATE TABLE lesson
  (
     idlesson     INT UNIQUE,
     name         VARCHAR(100),
     description  TEXT,
     introduction TEXT,
     category     INT,
     PRIMARY KEY(idlesson),
     FOREIGN KEY(category) REFERENCES category(idcategory)
  )

CREATE TABLE step
  (
     idstep     INT UNIQUE,
     name       VARCHAR(50),
     challenge  TEXT,
     points     INT,
     code       TEXT,
     expression TEXT,
     eval       TEXT,
     lesson     INT,
     PRIMARY KEY(idstep),
     FOREIGN KEY(lesson) REFERENCES lesson(idlesson)
  )

CREATE TABLE solution
  (
     idsolution INT UNIQUE,
     start_date DATE,
     end_date   DATE,
     trials     INT,
     points     INT,
     complete   BIT,
     code       TEXT,
     step       INT,
     iduser     INT,
     PRIMARY KEY(idsolution),
     FOREIGN KEY(step) REFERENCES step(idstep),
     FOREIGN KEY(iduser) REFERENCES users(iduser)
  ) 
