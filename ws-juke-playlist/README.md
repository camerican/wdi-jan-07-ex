# Jukebox Playlist Example

This example is looking to change the current song of the audio tag by modifying the audio src attribute whenever we click on an li from the ul.  Note: For this to work for you, you'd have to specify the location of real files within the repository.

The strategy here (which Kyle has been using) is to have a list of songs to play from.  Each of the songs will contain the filename that the audio tag can use to play it.  In cases like this where we're using a custom attribute within the HTML, it's often considered a best practice to use the "data-" prefix for our attribute.  

"data-song" is specifying the file name that we're looking to play for each song.