var secretKey = config.SECRET_KEY;

fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PL_z0zoKXOY28rEztLXF3e0fa1yHJ3pFtj&key="+secretKey)
 
.then((result) => {
  return result.json()
}).then((data)=> {
  console.log(data)
  let videos = data.items
  let videoContainer = document.querySelector(".youtube-container1")

  for(video of videos){
    videoContainer.innerHTML += 
    `
      <div class="latest-video flex flex-col">
        <iframe id="player" type="text/html" height="390" 
        src="https://www.youtube.com/embed/${video.snippet.resourceId.videoId}"></iframe>

        <h3 class="video-header font-Line text-xl">${video.snippet.title}</h3> 
      </div>
    `
  }
})

fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PL_z0zoKXOY28APzPlJYLFdKjUQPKT6pxc&key="+secretKey)

.then((result) => {
  return result.json()
}).then((data)=> {
  console.log(data)
  let videos = data.items
  let videoContainer = document.querySelector(".youtube-container2")

  for(video of videos){
    videoContainer.innerHTML += 
    `
      <div class="latest-video flex flex-col">
        <iframe id="player" type="text/html" height="390" 
        src="https://www.youtube.com/embed/${video.snippet.resourceId.videoId}"></iframe>

        <h3 class="video-header font-Line text-xl">${video.snippet.title}</h3> 
      </div>
    `
  }
})




