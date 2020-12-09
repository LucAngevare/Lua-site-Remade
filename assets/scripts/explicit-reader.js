async function explicit_reading() {
  const news_feed = document.getElementById("newsFeed");
  const stack_feed = await getNews();

  let htmlString = "<ul>";
  for (let i=0;i<stack_feed.length;i++) {
    htmlString += `<li>${stack_feed[i]}</li>`
  }
  htmlString += "</ul>"
  news_feed.innerHTML = htmlString
}

function getNews() {
  return new Promise((resolve, reject) => {
    const newsFeedRequest = new XMLHttpRequest({
      mozSystem: true
    });
    newsFeedRequest.open("GET", 'https://cors-anywhere.herokuapp.com/https://www.lua.org/news.rss', true);
    
    newsFeedRequest.onreadystatechange = function () {
      if ((newsFeedRequest.readyState == 4) && (newsFeedRequest.status == 200)) {
        items = newsFeedRequest.responseXML.getElementsByTagName("item");
        let feed_arr = [];

        for(let i = 0; i < items.length; i++) {
          const title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
          const url = (items[i].getElementsByTagName("link")[0]) ? items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue : "#";
          var datetime = (items[i].getElementsByTagName("pubDate")[0]) ? items[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue.replace(/( -0200)|( -0300)|( 00:00:00)/g, "") : "No date defined";
          var stream = "<p class='news_date-time'>" + datetime + "</p><a href='" + url + "' target='_blank'>" + title + "</a>";

          feed_arr.push(stream)
        }
        resolve(feed_arr);
      }
    }
    newsFeedRequest.send(null);
  });
}