const fs = require('fs')
fs.writeFile(
    'movie.txt',
    `{'name':'Animal','rating':9},
    {'name':'Dunki','rating':7.8}
    {'name':'Archies','rating':4.1}
    {'name':'Jawaan','rating':8.2}`,
    {
        encoding:"utf-8",
        flag:'w'
    },
    ((err)=>{
        if(!err) console.log("Success")
        else console.log(err);
    })
)