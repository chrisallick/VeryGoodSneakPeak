$(document).ready(function() {
    var products = JSON.parse($("head #products").text());

    $(".brick").each(function(index,value){
        if( products[index].title && products[index].price_category.range_min ) {
            var div = document.createElement("div");

            console.log( $(this) );
            
            div.class = "brick-overlay";
            $(div).css({
                background: "rgba(255,255,255,.8)",
                position: "absolute",
                top: 0,
                left: 0,
                width: $(this).width(),
                height: 60,
                color: "#000000",
                "z-index": 10000
            }).html("<p>"+products[index].title+"</p><p>$"+products[index].price_category.range_min+"</p>");
            $("p", div).css({
                margin: 0
            });
            
            $(this).append(div);
        }
    });
});