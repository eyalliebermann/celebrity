var celebrities = [{
        name: 'Madonna',
        image: 'http://static.deathandtaxesmag.com/uploads/2015/04/madonna-do-or-dont-list.jpg',
        description: 'An American singer, songwriter, actress, and businesswoman (local)'
    },

    {
        name: 'Arnold Schwarzenegger',
        image: 'https://metrouk2.files.wordpress.com/2016/04/arnie-2.jpg',
        description: 'An Austrian-American actor, producer, businessman, investor, author, philanthropist, activist, politician and former professional bodybuilder(local)'
    },
    {
        name: 'Barack Obama',
        image: 'https://www.fraudswatch.com/wp-content/uploads/2016/04/Barack-Hussein-Obama-1.jpg?w=640',
        description: 'An americn politician (local)'
    },
    {
        name: 'Alan Turing',
        image: 'https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTUzMTE2Njg3/alan-turing-9512017-1-402.jpg',
        description: 'A British mathematician(local)'
    }
];
$(document)
    .ready(
        function () {
            var i = 0;
            var interval = null;

            celebrities = $.getJSON('/api/celebs', function(data) {
                celebrities = data;
            });

            $('button').click(function () {
                loadNewCelebrity();
            });

            function loadNewCelebrity() {
                interval && clearInterval(interval);
                var timerVal = 60;
                $('#timer').html('<h1>' + timerVal + '</h1>');
                interval = setInterval(function () {
                    if (timerVal > 1) {
                        timerVal -= 1;
                        $('#timer').html('<h1>' + timerVal + '</h1>');
                    } else {
                        $('#timer').html('<h1 style="color:red"><i>Time passed</i></h>');
                        clearInterval(interval);
                        interval = 0;
                    }
                }, 1000);
                var celebrity = celebrities[i];
                $('#name').html(celebrity.name);
                $('img').attr('src', celebrity.image);
                $('img').attr('alt', celebrity.name + "s picture");
                $('#description').html(celebrity.description);
                i += 1;
                i %= celebrities.length;
            }
        });