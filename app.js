const express = require('express');
const app = express();  


const fs = require('fs');

app.listen(3000, () => {
    console.log('it works!');
 })

 app.use((req, res) => {
    if (req.url === '/') {
       res.end('write cat`s number in url to see a cat');
    }
    else if (req.url === '/1') {
       const frstCat = fs.readFileSync('./public/cat1.jpg');
       res.end(frstCat);
    }
    else if (req.url === '/2') {
       const scndCat = fs.readFileSync('./public/cat2.jpg');
       res.end(scndCat);
    }
    else if (req.url === '/3') {
       const thrdCat = fs.readFileSync('./public/cat3.jpg');
       res.end(thrdCat);
    }
    else if (req.url === '/4'){
        const textFile = fs.readFileSync('./public/txtfile.txt');
        res.end(textFile);
    } else{
       res.send('Write a 1-4 number in url!');
    }
 });




