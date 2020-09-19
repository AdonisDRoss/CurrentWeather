window.addEventListener('load',() =>{
   
    let long;
    let lat;
    let  tempD = document.querySelector(".temp-description");
    let  tempDegree = document.querySelector(".temp-degrees");
    let  tzone = document.querySelector(".location-TimeZone");
    let  timing = document.querySelector(".timet");
    let timeDate = document.querySelector(".dated");
    let con = document.querySelector(".item")   ;
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
   
    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
             
                long = position.coords.longitude;
                lat = position.coords.latitude; 

                
const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
                fetch(api)
                .then(response => {
                    return response.json(options);
                })
                .then(data =>{
                    console.log(data);
                    const{temperature, summary, icon, time} = data.currently;
                    
                    
                   //DOM ELEMENTS
                   tempDegree.textContent=  temperature;
                   tempD.textContent = summary;
                   tzone.textContent = data.timezone; 
                   timeDate.textContent = data.time;
                    con = data.icon(/-/g + "_");
                   let unix_timestamp = time;
                  
                   //set icon
                  
                   
                });
            });
    } 
      

    function ss() { 
         var d = Date(Date.now());
        a = d.toString()
        let    fTime = a;
        timing.textContent = fTime;
     
    }
    

        setInterval(ss, 1000);

        function updateBackground() {
            var 
                
              hr = (new Date()).getHours(),
              body = document.body,
              bstyle = document.getElementById('surface').style,    
              hello = document.querySelector(".hello");    
            if (hr < 10) {
              bstyle.background = "yellow";
              bstyle.color = "black";
              hello.innerText = "Have a good morning";
            } else if (hr < 20) {
              bstyle.background = "linear-gradient(slateblue, blue)";
              bstyle.color = "white";
              hello.innerText ="Have a good day!";
            } else {
              bstyle.background = "black";
              bstyle.color = "white";
              hello.innerText = "Have a good night!";
            } 
          }
          
          setInterval(updateBackground, 1000 * 60);
          updateBackground();

   

        })

         

        