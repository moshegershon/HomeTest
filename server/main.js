const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const Product = require('./movie.model');
// const mongoose = require('mongoose');
// mongoose.set('useCreateIndex', true);



/* config  */
const app = express();
app.use(cors());
app.use(bodyParser());
const PORT = 6789;
/* end config */

// const movie ;
var moviearr = [];

app.post('/api/add', function (req, res) {
    var newMovie = {};
    newMovie.name = req.body.name;
    newMovie.category = req.body.category;
    newMovie.photo = req.body.photo;
    newMovie.imdb = req.body.photo;
    moviearr.push(newMovie);
    console.log(moviearr);
    res.send(200,moviearr);
    
});

app.get('/api/secure', function (req, res) {
    console.log('getting all movies');
    res.json(moviearr);
});

app.delete('/api/secure/:name', (req, res) => {
        // console.log(moviearr[0].name);
        console.log(res.name)
        for(i=0;i<moviearr.length;){
            // console.log(req)
            if(moviearr[i].name == req.name){
                delete moviearr[i];
            }
            else {
                i++
            }
        }
    // console.log(moviearr);
    res.send(moviearr);
});


app.listen(PORT, () => {
    console.log('Listening on ', PORT);

});
