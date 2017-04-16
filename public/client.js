
$(document)
    .ready(
        function () {
            var i = 0;
            var interval = null;

            var celebrities = $.getJSON('/api/v1/celebs', function(data) {
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
                $('#name').slabText();
                i += 1;
                i %= celebrities.length;
            }
        });