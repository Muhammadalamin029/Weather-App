async function getKey() {
    const apiKey = '148e1c6d60fb5df73f308cc886d4fe6c';
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    
    if (city === "") {
        alert("City not entered")
    }

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    if (data.cod === 200) {
        displayWeather(data)
    } else {
        alert(data.message)
    }
    
    
}


function displayWeather(data) {  
    const weatherImage = document.querySelector('img');
    const tempReport = document.querySelector('.temp-report');
    const reportCity = document.querySelector('.report-city');
    const reportDescription = document.querySelector('.report-description');
    const imgUrl = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@4x.png';

    weatherImage.src = imgUrl;
    weatherImage.style.display = "block";
    reportCity.innerHTML = data.name;
    reportDescription.innerHTML = data.weather[0].description;
    tempReport.innerHTML = Math.round(data.main.temp - 273.15) + "°C";

}




