const apiKey = "a27a3b40bc6c422db1e153852230110";
const form = document.querySelector("form");
const input = document.querySelector("input");
const header = document.querySelector(".header")

form.onsubmit = function(e){
    e.preventDefault();

    let city = input.value.trim();
    console.log(city);
    const apiLink =`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiLink).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        const html = `
            <div class="card">
                <h2 class="cardCity">${data.location.name} <span>${data.location.country}</span></h2>
                <div class="cardWeather">
                    <div class="cardValue">${data.current.temp_c}<span class="temp">℃</temp></div>
                    <img class="cardImg" src="${data.current.condition.icon}" alt="weather">
                </div>
                <div class="cardDescription">${data.current.condition.text}</div>
                <div class="cardFeels">Feels like: ${data.current.feelslike_c} ℃</div>
                <div class="cardWind">Wind: ${data.current.wind_kph} Km/h</div>
                <div class="cardHumidity"> Humidity air: ${data.current.humidity} %</div>
            </div>
            `;
        
        header.insertAdjacentHTML('afterend', html)
    })
}