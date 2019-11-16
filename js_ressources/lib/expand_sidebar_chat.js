var mini = true;

function toggleSidebar(p_min) {
  if (mini && p_min) {
    // console.log("opening sidebar");
    document.getElementsByClassName('game_chat_main_area_options')[0].style.width = "250px";
    var chat = document.getElementsByClassName('game_chat_main_area_reception')[0];
    chat.style.opacity = 0.2;    
    this.mini = false;

    document.querySelector(".cd-menu-icon").classList.toggle("is-clicked");
  } else if(!mini) {
    // console.log("closing sidebar");
    document.getElementsByClassName('game_chat_main_area_options')[0].style.width = "40px";
    var chat = document.getElementsByClassName('game_chat_main_area_reception')[0];
    chat.style.opacity = 1;
    this.mini = true;

    document.querySelector(".cd-menu-icon").classList.toggle("is-clicked");
  }
}
