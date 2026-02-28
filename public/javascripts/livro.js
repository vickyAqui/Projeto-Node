var express = require('express');

class Livro {
  constructor(titulo, autor, ano, genero) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.genero = genero;
  }
}

module.exports = Livro