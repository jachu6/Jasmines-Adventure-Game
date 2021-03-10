$(".decline").click(function() {
    $(".disappointed").delay("fast").fadeIn();
    $(".start").hide();
});

$(".accept").click(function() {
    $(".sauce").delay("slow").fadeIn();
    $(".start").delay("fast").fadeOut();
});

$(".red").hover(function() {
    $(".toppings").show();
    $(".sauce").hide();
    $(".red").val("Yes");
});

$(".syrup").hover(function() {
    $(".toppings").show();
    $(".sauce").hide();
    $(".syrup").val("Yes");
});

$(".cheese").dblclick(function() {
    if ($(".syrup").val() === "Yes") {
        $(".unsatisfied").delay("fast").fadeIn();
        $(".toppings").hide();
    }
});

$(".cheese").dblclick(function() {
    if ($(".red").val() === "Yes") {
        $(".satisfied").delay("fast").fadeIn();
        $(".toppings").hide();
    }
});

$(".marshmallow").dblclick(function() {
    if ($(".syrup").val() === "Yes") {
        $(".satisfied").delay("fast").fadeIn();
        $(".toppings").hide();
        $(".satisfied").append("✰ He loves the sweet take on the pizza!");
    }
});

$(".marshmallow").dblclick(function() {
    if ($(".red").val() === "Yes") {
        $(".unsatisfied").delay("fast").fadeIn();
        $(".toppings").hide();
    }
});