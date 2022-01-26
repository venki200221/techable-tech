var menuBtn=document.getElementById("menuBtn");
var sideNav=document.getElementById("sideNav");
var menu=document.getElementById("menu")

sideNav.style.right="-250px";
menuBtn.onclick=function(){
   
    if (sideNav.style.right=="-250px"){
        sideNav.style.right="0";
        menu.src="images/close.png"
    }
    else{
        sideNav.style.right="-250px";
       
        menu.src="images/menu.png"
    }
}


// var players = [];

// function onPlay(e) {
//     var id = e.target.id;
//     console.log(id);
//     for (var i = 0; i < players.length; i++) {
//       if (players[i].id() != id) {
//         videojs.getPlayer(players[i].id()).pause();
//       }
//     }
//  }

// for (x = 0; x < Object.keys(videojs.players).length; x++) {
//     var setPlayer = Object.keys(videojs.players)[x];
//     console.log("hi");
//     videojs.getPlayer(setPlayer).ready(function() {
//       var myPlayer = this;
//       myPlayer.on("play", onPlay);
//       players.push(myPlayer);
//     });
//   }

$(".video-js").each(function (videoIndex) {

  var videoId = $(this).attr("id");

  videojs(videoId).ready(function(){
      this.on("play", function(e) {
          //pause other video
          $(".video-js").each(function (index) {
              if (videoIndex !== index) {
                  this.player.pause();
              }
          });
      });

  });
});


 
  