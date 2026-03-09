USE biblioteca;

CREATE TABLE IF NOT EXISTS livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  autor VARCHAR(255) NOT NULL,
  ano INT,
  genero VARCHAR(100)
);

INSERT INTO livros (titulo, autor, ano, genero) VALUES
('1984','George Orwell',1949,'Distopia'),
('O Hobbit','J.R.R. Tolkien',1937,'Fantasia'),
('Dom Casmurro','Machado de Assis',1899,'Romance');