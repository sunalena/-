function l_image (a) {
   document.example_img.src=a
}
function show_div(id)
{
    for (var i = 0; i < document.getElementById("texts").getElementsByTagName("div").length; i++)
      {
        var div = document.getElementById("texts").getElementsByTagName("div")[i];
        if (div.id == id)
        	div.style.display = "block";
        else
        	div.style.display = "none";
      }
}
function hide(element_id){
		var obj = document.getElementById(element_id); 
        obj.style.display = "none"; 
}
$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu_hamburger" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu_hamburger" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu_hamburger" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

});