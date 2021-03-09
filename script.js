$(".decline").click(function() {
    $(".disappointed").fadeIn();
    $(".start").hide();
});

$(".accept").click(function() {
    $(".sauce").show();
    $(".start").hide();
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
        $(".unsatisfied").fadeIn();
        $(".toppings").hide();
    }
});

$(".cheese").dblclick(function() {
    if ($(".red").val() === "Yes") {
        $(".satisfied").fadeIn();
        $(".toppings").hide();
    }
});

$(".marshmallow").dblclick(function() {
    if ($(".syrup").val() === "Yes") {
        $(".satisfied").fadeIn();
        $(".toppings").hide();
        $(".satisfied").append("✰ He loves the sweet take on the pizza!");
    }
});

$(".marshmallow").dblclick(function() {
    if ($(".red").val() === "Yes") {
        $(".unsatisfied").fadeIn();
        $(".toppings").hide();
    }
});