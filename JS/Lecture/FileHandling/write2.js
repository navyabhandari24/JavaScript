const fs = require('fs')
const path = require('path')
let movieDir = path.join(__dirname,'movie.json')
console.log(movieDir);
fs.writeFile(
    movieDir,
    '[{"movie":"golmaal","imdb":9},{"movie":"Dunki","imdb":8},{"movie":"12 Fail","imdb":7}]',
    {
        encoding:'utf-8',
        flag:'w'
    },
    ((err)=>{
        if(!err) console.log("Success")
        else console.log(err);
    })
)