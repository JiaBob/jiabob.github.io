var showsmall;
var showlarge;

$(document).ready(function() {
    $('input#0').click(function() {
        if (showsmall != null){
            $('img#showimage').attr('src', showsmall)
        }
    })
    $('input#1').click(function() {
        if (showlarge != null){
            $('img#showimage').attr('src', showlarge)
        }
    })
    $('input[name=smallImageUrl]').blur(function(){
        showsmall = $('input[name=smallImageUrl]').val();
        if ($('input#0').prop('checked') == true){
            $('img#showimage').attr('src', showsmall)
        }
    });
    $('input[name=largeImageUrl]').blur(function(){
        showlarge = $('input[name=largeImageUrl]').val();
         if ($('input#1').prop('checked') == true){
            $('img#showimage').attr('src', showlarge)
        }
    });
});



