window.addEventListener('load',() =>{
    let long;
    let lat;
    let  tempD = document.querySelector(".temp-description");
    let  tempDegree = document.querySelector(".temp-degrees");
    let  tzone = document.querySelector(".location-TimeZone");



    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                long = position.coords.longitude;
                lat = position.coords.latitude; 

            
const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`
                fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    const{temperature, summary, icon} = data.currently;
            
                    
                   //DOM ELEMENTS
                   tempDegree.textContent=  temperature;
                   tempD.textContent = summary;
                   tzone.textContent = data.timezone; 
                   //set icon
                   setIcons(icon, document.querySelector(icon));
                   
                });
            });
    } 
    function setIcons(icon, iconID){
        const skycons = new skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, kycons[currentIcon]);
    }
}
);