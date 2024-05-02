console.log("hello");
fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCBJycsmduvYEL83R_U4JriQ&maxResults=10&order=date&key=AIzaSyCKQeMU0uf6nhmvh6yGK_ZvpRe2PsHNC8k").then((result) => {
  return result.json();
}).then((result) => {
  console.log(result);
  let videos = result.items;
  console.log(videos);
})