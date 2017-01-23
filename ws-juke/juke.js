window.addEventListener("load",function(){
  console.log("Window loaded");

  var tracks = ["216847995","66301726"];
  var currentSong = 0;
  // var player;

  // 3) To use the SoundCloud API, we are asked to initialize the sound cloud object first.  This is defined within the SDK.
  SC.initialize({
    client_id: 'fd4e76fc67798bfa742089ed619084a6'
  });

  SC.get("/tracks",{
    q: "Pirates"
  }).then(function(response){
    console.log(response);
  });
  // 4) We should then experiment looking at the tracks we're able to get from SoundCloud.
  SC.get("/tracks/216847995").then(function(response) {
    // things to do after the tracks load...

    // this should display all relevant information regarding the track
    // e.g title, author, album art
    console.log(response);
  });

  SC.stream("/tracks/"+tracks[currentSong]).then(function(_player){
    player = _player;
    player.play();
    console.log(player);
    player.on("pause",function(){
      console.log("Pause detected");
      document.getElementById("toggle_play").innerText = "Play";
    }).on("play",function(){
      console.log("Play detected");
      document.getElementById("toggle_play").innerText = "Pause";
    });
  });

  document.getElementById("toggle_play").addEventListener("click",function(){
    if( player.controller._state == "paused") {
      player.play();
    } else {
      player.pause();
    }
  });

  document.getElementById("play").addEventListener("click",function(){
    player.play()
  });

  document.getElementById("pause").addEventListener("click",function(){
    player.pause()
  });

//   var currentSong = 0;
//   var tracks = ["mycoolsong.mp3","anotherone.mp3"];


//   function Track(url, trackname, artist, coverart) {
//     this.url=url;
//     this.trackname = trackname;
//     this.artist = artist;
//     this.coverart = coverart;
//   }

//   var tracks = [
//     new Track("mycoolsong.mp3","Coolest","Mr. Cool", "coolpic.jpg"),
//     new Track("myothercoolsong.mp3","Cooler than cool", "Mr. Cool", "coolest.gif")
//   ];
// //  tracks[0]  // get first song

//   function playSong(){
//     // store a reference to the audio tag
//     var elAudio = document.getElementById("audio");
//     // make sure the src is set to start...
//     if( !elAudio.src ) {
//       elAudio.src = tracks[currentSong];
//     }
//     elAudio.play().then(function(){
//       // increase the index so we refer to the 
//       // next song in our tracks list
//       currentSong += 1;
//       // if we have gone too far, reset to 0
//       if( currentSong >= tracks.length ){
//         currentSong = 0;
//       }
//       // update the source to refer to the new
//       // song track we want to play
//       elAudio.src = tracks[currentSong];
//       // call play song again
//       playSong();
//     });
//   }
//   // call playAudio when the page loads...
//   playSong();

});



