jQuery(document).ready(function() {
    $(".footnotes").each(function() {
        $(this).prepend("<h2>Footnotes</h2>");
    });
    $(".content div").each(function() {
        if ($(this).hasClass("previous-next")) {
            $(this).insertBefore($(this).prev("div"));
        }
    });
});