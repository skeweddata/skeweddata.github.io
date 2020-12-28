jQuery(document).ready(function() {
    $(".footnotes").each(function() {
        $(this).prepend("<h3>Footnotes</h3>");
    });
    $(".content div").each(function() {
        if ($(this).hasClass("previous-next")) {
            $(this).insertBefore($(this).prev("div"));
        }
    });
});