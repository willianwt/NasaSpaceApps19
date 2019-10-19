// recebe o arquivo em uma variavel
const fireplaces = require('./nasaFile.json'); 
var fs = require('fs');

//cria uma nova array para receber os dados filtrados
var filtro = [];
for (let index = 0; index < fireplaces.length; index++) {
    const element = fireplaces[index];
    
    //delimita quais dados vão ser inclidos de acordo com a latitude e longitude
    if (element.latitude < -15.338396 && element.latitude > -16.165006) {
        if (element.longitude < -47.113581 && element.longitude > -48.507557){
           
            //adiciona o elemento
            filtro.push(element)        
        }
    }
}

//export default filtro;

var json = JSON.stringify(filtro);


fs.writeFile("./filtro.json", json, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

