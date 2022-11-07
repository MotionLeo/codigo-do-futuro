const livros = require('./database');

//Pegar o input para escolher o livro por categoria

const readline = require('readline-sync');
const primeiraEntrada = readline.question('Deseja buscar um livro por categoria? S/N\n');

//Se for sim, mostra as categorias disponíveis e pergunta qual categoria será escolhida
if(primeiraEntrada.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis: ');
    console.log(' Américas', ' Estilo de vida', 'História brasileira', ' Produtividade', ' Tecnologia');
    const entradaCategoria = readline.question('Qual categoria você escolhe?\n');

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);
} else { //Se não, mostra todos os livros em ordem crescente de página
    const livrosOrdemCrescente = livros.sort((a, b) => a.paginas - b.paginas);
    console.log('Essas são todas os livros disponíveis: ')
    console.table(livrosOrdemCrescente);
}