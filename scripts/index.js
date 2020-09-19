window.addEventListener('load',() =>{
    let long;
    let lat;
    let  tempD = document.querySelector(".temp-description");
    let  tempDegree = document.querySelector(".temp-degrees");
    let  tzone = document.querySelector(".location-TimeZone");
    let  timing = document.querySelector(".timet");
    let timeDate = document.querySelector(".dated");
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
                  
                   let unix_timestamp = time;
                  
                   //set icon
                   setIcons(icon, document.querySelector(icon));
                   
                });
            });
    } 
      

    function ss() {  var d = Date(Date.now());
        a = d.toString()
        let    formattedTime = a;
        timing.textContent = formattedTime;}
        setInterval(ss, 1000);

    function setIcons(icon, iconID){
        const skycons = new skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, kycons[currentIcon]);
    }
}
);