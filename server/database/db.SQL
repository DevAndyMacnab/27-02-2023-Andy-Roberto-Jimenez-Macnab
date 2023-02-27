
USE managedb;
CREATE TABLE products(
 id INT(11) NOT NULL AUTO_INCREMENT,
 nombre VARCHAR(255)NOT NULL,
 categoria VARCHAR(255) NOT NULL,
 descripcion VARCHAR(300),
 disponible BOOLEAN NOT NULL DEFAULT 1,
 PRIMARY KEY(id));

CREATE TABLE sucursal(
    id INT (11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    direccion VARCHAR(255) NOT NULL,
    correo VARCHAR(255)NOT NULL,
    departamento VARCHAR(255)NOT NULL,
    municipio VARCHAR (255)NOT NULL,
    telefono VARCHAR(255),
    PRIMARY KEY(id)
);

SELECT * FROM products;
SELECT *FROM sucursal;






