

 var myData = {
    name: 'Helianthus',
    track: 'Frontend Track',
  };

  document.getElementById("slackUserName").innerHTML = myData.name;
  document.getElementById("myTrack").innerHTML = myData.track;

  const myImg = document.querySelector("img")
  myImg.src ="/slackdp.JPG";

  const githubURL = document.querySelector("a")
  githubURL.href ="https://github.com/cherish-an1/hng-stageone.git";


  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const d = new Date();
  let day = weekday[d.getDay()];
  document.getElementById("currentDayOfTheWeek").innerHTML = day;

  const date = new Date();
  document.getElementById("currentUTCTime").innerHTML = date;