$("#createburger").on("submit", function (event) {
    event.preventDefault();
    // [name=burger] will find an element with a "name" attribute equal to the string "burger"
    var newBurger = {
        burger_name: $("#createburger [name=burger]").val().trim(),
        devoured: 0
    };

    // send the POST request
    $.ajax("/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});

$(document).on('click', '.devourburg', function () {
    var burgerId = $(this).attr('data-burgerid');
    // send the PUT request.
    $.ajax("/devour/" + burgerId, {
        type: "PUT"
    }).then(
        function () {
            console.log("updated devoured");
            // Reload the page to get the updated list
            location.reload();
        }
    );
})
