$(document).ready(function() {
    var products = JSON.parse($("head #products").text());

    $(".brick").each(function(index,value) {
        if( products[index] && products[index].title && products[index].price_category.range_min ) {
            var div = document.createElement("div");

            $(div).css({
                background: "rgba(0,0,0,1)",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: $(this).width(),
                height: 60,
                color: "#FFFFFF",
                "z-index": 10000,
                display: "none"
            }).addClass("brick-overlay").html("<p>"+products[index].title+"</p><p>$"+products[index].price_category.range_min+"</p>");
            $("p", div).css({
                margin: 0
            });
            
            $(this).append(div);
        }

        $(this).mouseover(function(){
            $(".brick-overlay", this).show();
        }).mouseout(function(){
            $(".brick-overlay", this).hide();
        });
    });
});