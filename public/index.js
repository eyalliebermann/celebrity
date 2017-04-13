var celebrities = [{
        name: "Madonna",
        image: "http://static.deathandtaxesmag.com/uploads/2015/04/madonna-do-or-dont-list.jpg",
        description: "An American singer, songwriter, actress, and businesswoman"
    },

    {
        name: "Arnold Schwarzenegger",
        image: "https://metrouk2.files.wordpress.com/2016/04/arnie-2.jpg",
        description: "An Austrian-American actor, producer, businessman, investor, author, philanthropist, activist, politician and former professional bodybuilder"
    }
];
$(document)
    .ready(
        function () {
            var i = 0;
            $("button").click(function () {
                var celebrity = celebrities[i];
                $("h1").html(celebrity.name);
                $("img").attr("src", celebrity.image);
                $("img").attr("alt", celebrity.name + "'s picture");
                $("#description").html(celebrity.description);
                i += 1;
                i %= celebrities.length;
            });
        });