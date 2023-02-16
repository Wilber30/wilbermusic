fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC9kU2JIBBbaHq8DD66_k_vA&maxResults=2&order=date&key=AIzaSyCD5Er8uK3EDBagis1L53xhRarPucBgE0U")
.then((result) => {
  return result.json()
}).then((data)=> {
  console.log(data)
  let videos = data.items
  let videoContainer = document.querySelector(".youtube-container")
  for(video of videos){
    videoContainer.innerHTML += `
    <div class="latest-video flex flex-col">
      <iframe id="player" type="text/html" height="390" 
      src="https://www.youtube.com/embed/${video.id.videoId}" ></iframe>
      <h3 class="font-Line">${video.snippet.title}</h3> 
    </div>
    `
  }
})



