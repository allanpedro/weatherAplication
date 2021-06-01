const baseUrl = 'https://dataservice.accuweather.com/'
const APIKey = 'pIxhE1xHyIR0ZVZvAOi86bAR2MMbrdUG'

const getCityURL= cityName => `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl= cityKey => `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error('Não foi possível obter os dados!')
        }

        return response.json()
    } catch ({ name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityName = cityName => fetchData(getCityURL(cityName))
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))