const fs = require("fs")
const { callbackify } = require("util")


const breedDetailsFromFile = function(breed, callback) {
    
    
    fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
        
        

        
        if (error === null) callback(data)

    })

}

const callback = (data) => {console.log('Return Value: ', data)}
const bombay = breedDetailsFromFile('Bombay', callback);
