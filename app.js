const fs = require('fs')

let data = [];

const nameW =['kasia', 'asia', 'zosia', 'magda', 'wiola', 'ola', 'marzena', 'agnieszka', 'aneta', 'marta'];
const nameM =['adam', 'piotrek', 'kamil', 'pawel', 'Radek','szymon', 'jakub', 'tomek', 'zdzisiek', 'czesiek']
const surname =['skarzynska', 'makłowicz', 'bedzikowska', 'linda', 'domagala', 'lotkowska', 'poliglota', 'machay', 'puszek','okruszek'];
const gender =['f','m'];
const age =18+Math.floor(Math.random()*60);

const randomChoice = (array) => {

    const arrayLength = array.length;
    const randomElement =array[Math.floor(Math.random()*arrayLength)];

    return randomElement;
}

 //data = randomChoice(nameW)

for( let i = 0; i < 20; i++){

    if(randomChoice(gender) === 'f'){
        data.push(randomChoice(nameW) +' ' + randomChoice(surname) + '", "age":' + age + ', "gender": "f' )
    }else{
        data.push(randomChoice(nameM) +' ' + randomChoice(surname) + '", "age":' + age + ', "gender": "m')
    }
}
  
   const dataSave = data.join('"},{"person":"');  
        dataSaveJson = '[{"person":"' + dataSave +'"'+ '}]'
fs.writeFile('people.json', dataSaveJson, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });