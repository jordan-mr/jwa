window.addEventListener("load", () =>{ 
  //CHAHGE PAGE
  let links = document.querySelectorAll(".city-save");
  let sPage = document.querySelector("#search-page");
  let cPage = document.querySelector(".current-page");
  let rPage = document.querySelector(".random-page");

  links[0].addEventListener("click", () =>{
    sPage.style.display = "inherit";
    cPage.style.display = "none";
    rPage.style.display = "none";

  })
  links[1].addEventListener("click", () =>{
    cPage.style.display = "inherit";
    sPage.style.display = "none";
    rPage.style.display = "none";

  })
  links[2].addEventListener("click", () =>{
    rPage.style.display = "inherit";
    cPage.style.display = "none";
    sPage.style.display = "none";

  })

  //GET LOCATION
  document.getElementById("current-location").addEventListener("click", getLocation);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude; 
    let long = position.coords.longitude;
    let arg = "lat=" + lat + "&lon=" +long;
    apiRequest(arg);

    //document.getElementById("city2").innerText ="ur location";
  }

  // RANDON city
  function rand ()
  {
    let number = Math.floor((Math.random() * 40) + 1);
    return number;
  }
  document.getElementById("rand-location").addEventListener("click", getRandCity);

  function getRandCity(){
    // 'JSON' data included as above
    

   // Function to 'load JSON' data
     var jsonData = JSON.parse(data);
     //console.log(jsonData[0].id); // Will log "is my fave color"
     let theId = jsonData[rand()].id;
     
     let arg = "id=" + theId;
     apiRequest(arg);
  }


  
  
  //WEATHER API
  let cityName = document.getElementById("city").innerText;

  document.getElementById("search").addEventListener("keyup", () =>{
    cityName = document.getElementById("search").value;
    document.getElementById("city").innerHTML = `${cityName}`;
    let arg = "q=" + cityName;
    apiRequest(arg);


  })

  function apiRequest(value){
    const api = `HTTPS://api.openweathermap.org/data/2.5/weather?${value}&units=metric&APPID=180fd9b8a31faf2ba147fa01f0d26902`;
//180fd9b8a31faf2ba147fa01f0d26902
//https://openweathermap.org/current#format
  fetch(api)
    .then(responce =>{
      return responce.json();
    })
    .then(data =>{
      let currentCity = data.name;
      let description = data.weather[0].description;
      let { temp } = data.main;
      
      
      temperture.textContent = temp;
      des.textContent = description;

      temperture2.textContent = temp;
      des2.textContent = description;
      city2.textContent = currentCity;

      temperture3.textContent = temp;
      des3.textContent = description;
      city3.textContent = currentCity;
      //alert("working");
    })


  }
}) 