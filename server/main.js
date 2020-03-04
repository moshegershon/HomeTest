const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');




/* config  */
const app = express();
app.use(cors());
app.use(bodyParser());
const PORT = 6789;
/* end config */


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
        console.log(res.name)
        for(i=0;i<moviearr.length; i++){
            moviearr.pop();
        }
    res.send(moviearr);
});


app.listen(PORT, () => {
    console.log('Listening on ', PORT);

});
