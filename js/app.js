const cityform = document.querySelector('[data-js="change-location"]')
const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContaineir = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const cityCard = document.querySelector('[data-js="cityCard"]')
let timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')


cityform.addEventListener('submit', async event => {
    event.preventDefault()

const inputValue = event.target.city.value
const [{Key, LocalizedName}] = await getCityName(inputValue)
const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)

const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg" />`

if (cityCard.classList.contains('d-none')) {
    cityCard.classList.remove('d-none')
}


if (IsDayTime) {
    timeImg.src = './src/day.svg'
} else {
    timeImg.src = './src/night.svg'
}

timeIconContainer.innerHTML = timeIcon
cityNameContainer.textContent = LocalizedName
cityWeatherContaineir.textContent = WeatherText
cityTemperatureContainer.textContent = Temperature.Metric.Value

cityform.reset()

})