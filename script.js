// const apikey="0890a3d5b1d2c35c8893fd7e013a61d7"
// const apiurl="https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=0890a3d5b1d2c35c8893fd7e013a61d7"

async function getWeatherData(city) {
  try {
    let apikey = "0890a3d5b1d2c35c8893fd7e013a61d7";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    let response = await fetch(apiurl);
    let data = await response.json();
    console.log(data);

    let container = document.getElementById("container");

    container.innerHTML = `<div id="firstcontainer">
    <input type="text" placeholder="enter city name" id="searchbox">
    <button id="search"><i class="fa-solid fa-magnifying-glass"></i></button><br>
    </div>
    <img  id="weather-icon" src="https://cdn0.iconfinder.com/data/icons/weather-3/512/rain_with_sun1-512.png" alt="weather icon" width="140px" height="150px">
    <div id="weather-description">
    <p id="temp">${data.main.temp}</p>
    
     <p id="description">${data.weather[0].description}</p>
    <p id="city">${data.name}</p>
    </div>
    
     <div id="secondcontainer">
            <h3>Humidity</h3>
              <p>${data.main.humidity}</p>
            
          <h3>WindSpeed</h3>
            <p>${data.wind.speed}</p>
            
    
     
        <h3>Temperature min</h3><p>${data.main.temp_min}</p>
        <h3>Temperature max</h3><p>${data.main.temp_max}</p>
        <h3>Sea Level</h3><p>${data.main.sea_level}</p>
        <h3>Pressure</h3><p>${data.main.pressure}</p>
        <h3>Ground Level</h3><p>${data.main.grnd_level}</p>
        <h3>Feels Like</h3><p>${data.main.feels_like}</p>
       <h3>Wind degree</h3><p>${data.wind.deg}</p>
      </div>`;

    let search = document.getElementById("search");
    search.addEventListener("click", function () {
      let searchbox = document.getElementById("searchbox");
      getWeatherData(searchbox.value);
    });
  } catch (error) {
    console.error("Error");
  }
}
getWeatherData("bangalore");
