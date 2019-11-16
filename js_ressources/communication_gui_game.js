//Add event on game_action class elements
var classname = document.getElementsByClassName("game_action");
for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', function()
    {
        var iframe = document.getElementsByClassName("pixi_game_view")[0];
        command = this.getAttribute("action");
        command = JSON.parse(command);
        iframe.contentWindow.postMessage(command, '*');
    }, false);
}