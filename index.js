var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/api/celebs', function (req, res) {
  res.status(200).json(CELEBRITIES);
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

var CELEBRITIES = [{
    name: 'Madonna',
    image: 'http://static.deathandtaxesmag.com/uploads/2015/04/madonna-do-or-dont-list.jpg',
    description: 'An American singer, songwriter, actress, and businesswoman'
  },

  {
    name: 'Arnold Schwarzenegger',
    image: 'https://metrouk2.files.wordpress.com/2016/04/arnie-2.jpg',
    description: 'An Austrian-American actor, producer, businessman, investor, author, philanthropist, activist, politician and former professional bodybuilder'
  },
  {
    name: 'Barack Obama',
    image: 'https://www.fraudswatch.com/wp-content/uploads/2016/04/Barack-Hussein-Obama-1.jpg?w=640',
    description: 'An americn politician'
  },
  {
    name: 'Alan Turing',
    image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUzMTE2Njg3/alan-turing-9512017-1-402.jpg',
    description: 'A British mathematician'
  }
];