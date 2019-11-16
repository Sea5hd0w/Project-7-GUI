move = null;
$( '.resize_slice_v' ).on('mousedown touchstart',function() {
    $('.overlay_game_disable_event').show();
    move = "chat";
});

$( '.resize_slice_h' ).on('mousedown touchstart',function() {
    $('.overlay_game_disable_event').show();
    move = "command";
});

$( "html" ).on('mousemove',function(event) {
    if(move == "chat")
    {
        var width = (event.pageX / $( '.main' ).width()) *100;
        if(width > 100) width = 100;
        if(width < 0) width = 0;

        $('.main_game').css("width", width + "%");
        $('.game_chat').css("width", 100 - width + "%");
    }
    else if(move == "command")
    {
        var height = (event.pageY / $( '.main' ).height()) *100;
        if(height > 100) height = 100;
        if(height < 0) height = 0;

        $('.game_engine').css("height", height + "%");
        $('.game_interaction').css("height", "calc(" + (100 - height) + "% - 4px)");
    }
});

$( "html" ).on('touchmove',function(event) {
    event.preventDefault ();
    var touch= event.originalEvent.touches [0] || event.originalEvent.changedTouches [0];

    if(move == "chat")
    {
        var width = (touch.pageX / $( '.main' ).width()) *100;
        if(width > 100) width = 100;
        if(width < 0) width = 0;

        $('.main_game').css("width", width + "%");
        $('.game_chat').css("width", 100 - width + "%");
    }
    else if(move == "command")
    {
        var height = (touch.pageY / $( '.main' ).height()) *100;
        if(height > 100) height = 100;
        if(height < 0) height = 0;

        $('.game_engine').css("height", height + "%");
        $('.game_interaction').css("height", "calc(" + (100 - height) + "% - 4px)");
    }
});

$( "html" ).on('mouseup touchend',function() {
    $('.overlay_game_disable_event').hide();
    move = null;
});
