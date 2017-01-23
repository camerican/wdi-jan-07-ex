window.addEventListener("load",function(){
  console.log("Window loaded");

  var tracks = ["216847995"];

  // 3) To use the SoundCloud API, we are asked to initialize the sound cloud object first.  This is defined within the SDK.
  SC.initialize({
    client_id: 'fd4e76fc67798bfa742089ed619084a6'
  });

  // 4) We should then experiment looking at the tracks we're able to get from SoundCloud.
  SC.get("/tracks/216847995").then(function(response) {
    // things to do after the tracks load...

    // this should display all relevant information regarding the track
    // e.g title, author, album art
    console.log(response);
  });

});