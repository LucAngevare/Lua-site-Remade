var scrollPosition;
var scrollBoxWidth;
var win;

function start(feed, windowID) {
  scrollPosition = 0;
  win = document.getElementById(windowID);
  scrollBoxWidth = win.style.width.substr(0, win.style.width.indexOf("px"));
  getNews2(feed);
  setInterval(function() {getNews2(feed);}, 60000);
  scrollNews();
}

function getNews2(feed) {
  var newsFeedRequest = new XMLHttpRequest({mozSystem: true});
  newsFeedRequest.open("GET", 'https://cors-anywhere.herokuapp.com/' + feed, true);
  newsFeedRequest.onreadystatechange = processNewsFeed;
  newsFeedRequest.send(null);

  function processNewsFeed() {
    var stream = "";
    if (newsFeedRequest.readyState == 4 && newsFeedRequest.status == 200) {
      items = newsFeedRequest.responseXML.getElementsByTagName("item");
      
      for (var i=0; i<items.length; i++) {
        if (Math.floor(Math.random() * 100) === 1) {
          var title = "BREAKING: USE OF ANY PROGRAMMING LANGUAGE BESIDES LUA NOW RESTRICTED"
          var url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        } else {
          var title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
          var url = (items[i].getElementsByTagName("link")[0]) ? items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue : "#";
        }
        stream += "<a href='" + url + "' target='_blank'>" + title + "</a> " + " | ";
      }
      win.innerHTML = stream + stream;
    }
  }
}

function scrollNews() {
  var interval = setInterval(moveNews, 60);
  win.onmouseover = function() {clearInterval(interval);};
  win.onmouseout = function() {interval = setInterval(moveNews, 40);};
}

function moveNews() {
  win.scrollLeft += 5;
  if (scrollPosition == win.scrollLeft) {
    win.scrollLeft = (win.scrollLeft - scrollBoxWidth)/2 - 1;
  }
  scrollPosition = win.scrollLeft;
}
