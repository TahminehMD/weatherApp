let city = $("#input").val()
const request = {

    url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=afe2059524f2819537b763396d07ba98`

}

$("#button").click(() => {

    let weatherPromise = $.ajax(request)
    weatherPromise.then((data) => {
        console.log(data)
        let degree = data.main.temp - 273
        $("#city").text("Weather For:" + data.name)
        $("#temp").text("Tempature:" + Math.round(degree))
        $("#weather").text("Weather:" + data.weather[0].description)
        $("#feel").text("Feels like:" + data.main.feels_like)

    }, (error) => { })
})
