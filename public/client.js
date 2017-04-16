$(document)
    .ready(
        function () {
            var i = 0;
            var interval = null;

            var celebrities = $.getJSON('/api/v1/celebs', function (data) {
                celebrities = data;
            });

            $('button').click(function () {
                loadNewCelebrity();
            });

            function loadNewCelebrity() {
                interval && clearInterval(interval);
                      $('#next')
                            .removeClass('btn-warning')
                            .html('Next Celebrity!');

                var timerVal = 11;
                interval = setInterval(function () {
                    if (timerVal > 1) {
                        timerVal -= 1;
                        $('#next').html('Next Celebrity ! (' + timerVal + ')');
                    } else {
                        $('#next')
                            .addClass('btn-warning')
                            .html('Next Celebrity !!!');
                        clearInterval(interval);
                        interval = 0;
                        setTimeout(loadNewCelebrity,1000);
                    }
                }, 1000);
                var celebrity = celebrities[i];

                $('#name').html(celebrity.name.split(' ').map(function (word) {
                        return '<span class="slabtext">' + word + '</span>';
                    }).join(' '))
                    .slabText();
                //.css("background-color", "yellow");;
                i += 1;
                i %= celebrities.length;
            }
        });