// recebe o arquivo em uma variavel
var fireplaces = require('./nasaFile.json');

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
//console.log(filtro)
//console.log(count)


