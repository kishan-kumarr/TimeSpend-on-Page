    let values = [],
        keys = Object.keys(localStorage);

      var localStorageData = {};

      for (var i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);

        localStorageData[keys[i]] = value;
      }


      // --------------------------------------------------------------------------------------
      
      var ol = document.getElementById("timespendid");

      for (var page in localStorageData) {
        if (localStorageData.hasOwnProperty(page)) {
          let li = document.createElement("li");

           let time = localStorageData[page];
       
            // Calculate hours, minutes, and remaining seconds
            let hours = Math.floor(time / 3600);
            hours = hours < 10 ? "0" + hours + " hr" : hours + " hrs";

            let minutes = Math.floor((time % 3600) / 60);
            minutes = minutes < 10 ? "0" + minutes + " minute" : minutes + " minutes";

            let seconds = time % 60;  
            seconds = seconds < 10 ? "0" + seconds + " second" : seconds + " seconds";

            time = `${hours} : ${minutes} : ${seconds}`;

          li.textContent = `${page} - ${time}`;

          ol.appendChild(li);
        }
      }

