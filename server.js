const express = require('express');
const bodyParser = require('body-parser');

const app = express();



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

var celebrities = CELEBRITIES;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/api/v1/celebs', function (req, res) {
  res.status(200).json(celebrities);
});

app.post('/api/v1/celebs', function (req, res) {
  console.log('POST ' + req.path);
  console.log(JSON.stringify(req.body));

  //TODO sanitize
  let name = req.body.name;
  if (!name) {
    console.log("Bad Input. No celebrity name in body.");
    res.status(400).json({
      status: 'BadInput'
    });
    return;
  }

  if (name && !/^[A-Za-z]*[A-Za-z0-9 ']*[A-Za-z]*$/.test(name)) {
    console.log("Bad Input. RegEx failure.");
    res.status(400).json({
      status: 'BadInput'
    });
    return;
  }

  if (celebrities.map((celeb) => celeb.name.toLowerCase()).find((w) => w === name.toLowerCase())) {
    console.log("Bad Input. Name already found.");
    res.status(409).json({
      status: 'ConflictingInput'
    });
    return;
  }

  celebrities.push({
    name: req.body.name
  });
  res.status(200).json({
    status: 'OK',
    count: celebrities.length
  })
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

// == Export our app ==
module.exports = app;