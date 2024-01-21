const fs = require('fs')
const path = require('path')
let bookDir = path.join(__dirname,'Book.json')
console.log(bookDir);
fs.writeFile(
    bookDir,
    '[{"Book":"Ikigai"},{"Book":"DA"},{"Book":"CS"}]',
    {
        encoding:'utf-8',
        flag:'w'
    },
    ((err)=>{
        if(!err) console.log("Successfully Done")
        else console.log(err);
    })
)