// External JavaScript
// change image of homepage with certain interval of time
	var images = ["images/nerd2.jpg", "images/nerd3.jpg","images/nerd1.jpg","images/nerd4.jpg","images/nerd3.jpg"];

	var x = 0;

    setInterval(slider, 3000);
    function slider() {
      if (x < images.length) {
        x = x + 1;
      } else {
        x = 1;
      }
      document.getElementById('img').innerHTML = "<img src=" + images[x - 1] + ">";
      document.getElementById('img1').innerHTML = "<img src=" + images[x - 1] + ">";
      document.getElementById('img2').innerHTML = "<img src=" + images[x - 1] + ">";
      document.getElementById('img3').innerHTML = "<img src=" + images[x - 1] + ">";

    }

 //set digital time
 setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            am_pm = "AM";
  
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
  
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = hour + ":" 
                + min + ":" + sec + am_pm;
  
            document.getElementById("clock")
                .innerHTML = currentTime;
        }
  
        showTime();
