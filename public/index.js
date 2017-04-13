var celebrities = [{
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
$(document)
    .ready(
        function () {
            var i = 0;
            $('button').click(function () {
                var celebrity = celebrities[i];
                $('h1').html(celebrity.name);
                $('img').attr('src', celebrity.image);
                $('img').attr('alt', celebrity.name + "s picture");
                $('#description').html(celebrity.description);
                i += 1;
                i %= celebrities.length;
            });
        });