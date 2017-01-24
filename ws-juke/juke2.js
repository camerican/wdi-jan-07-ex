

// we can define a constructor for our Jukebox
function Jukebox() {
  // First, we can store a reference to the SC 
  // object inside of our jukebox...
  this.service = SC;
  // we'll now be able to refer to SC as "service"
  // within our Jukebox...  next we'll want to
  // initialize the Sound Cloud object 
  this.service.initialize({
    client_id: 'fd4e76fc67798bfa742089ed619084a6'
  });

  // common trick to create a "that" variable
  var that = this;  // using a variable to store
                    // the current "this" will 
                    // allow us to refer to
                    // our jukebox instance no
                    // matter what object is 
                    // calling our methods

  // we can store a list of songs within an array...
  // let's start out with some default songs
  // and store their id, title, and artwork_url
  // within object literals
  this.tracks = [{
      id: 304293882,
      title: "Ibu Petiwi",
      artwork_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Statue_of_Goddess_or_Queen_at_Monas.JPG/250px-Statue_of_Goddess_or_Queen_at_Monas.JPG"
    },{
      id: 304314494,
      title: "You Know I'm No Good",
      artwork_url: "http://ilarge.lisimg.com/image/2307976/800full-amy-winehouse.jpg"
    },{
      id: 304314484,
      title: "Black Crow",
      artwork_url: "https://i1.sndcdn.com/artworks-000204478327-3z7rl6-large.jpg"
    }
  ];
  // let's use an instance variable to track
  // which is the current song we should be playing
  this.currentTrack = 0;

  // we'll want to have functions to control
  // the playing of our Jukebox
  this.play = function(){
    // to play, we'll have to call the Sound Cloud
    // stream function
    if( !that.tracks[that.currentTrack].player ) {
      that.service.stream("/tracks/"+that.tracks[that.currentTrack].id).then(function(player){
        that.tracks[that.currentTrack].player = player;
        that.tracks[that.currentTrack].player.play();
          that.updateHTML();
      });
    } else {
      that.tracks[that.currentTrack].player.play();
        that.updateHTML();
    }
  };
  this.pause = function(){
    // to pause, we're going to want to pause
    // the current song
    var player = that.tracks[that.currentTrack].player;
    if( player ) player.pause();
  };
  this.next = function(){
    // let's: 
    //   1) pause the current song
    //   2) then advance the current song index
    //   2b) go back to the start if the index
    //       has reached the end
    //   3) play the (new) current song
    that.tracks[that.currentTrack].player.pause();
    that.currentTrack += 1;
    if( that.currentTrack >= that.tracks.length ) {
      that.currentTrack = 0;
    } 
    that.play();  // call our play function
  };
  this.prev = function(){
    that.tracks[that.currentTrack].player.pause();
    that.currentTrack -= 1;
    if( that.currentTrack < 0 ) {
      that.currentTrack = that.tracks.length-1;
    } 
    that.play();
  };
  this.updateHTML = function(){
    //look for #result and update
    var elResult = document.getElementById("result");
    elResult.querySelector("h2").innerText = that.tracks[that.currentTrack].title;
    elResult.querySelector("img").src = that.tracks[that.currentTrack].artwork_url;
  }
}
// initialize our Jukebox
var juke = new Jukebox();
juke.play();
// attach listeners so that our buttons 
// call our jukebox functions
document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("play").addEventListener("click",juke.play);
  document.getElementById("pause").addEventListener("click",juke.pause);
  document.getElementById("next").addEventListener("click",juke.next);
  document.getElementById("prev").addEventListener("click",juke.prev);
});


