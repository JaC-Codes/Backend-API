$ = require('/node_modules/jquery/jquery.module.js')

const item = ".item";


$(function() {
    $(".toggle").on("click", function() {
        if ($(item).hasClass("active")) {
            $(item).removeClass("active");
        } else {
            $(item).addClass("active");
        }
    })
});


