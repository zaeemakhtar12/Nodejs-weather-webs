const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=bf21f4c8cbe75d503bfc0590998463ee&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is ' + body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degress out. But it feels like ' + response.body.current.feelslike + ' degress out')
        }
    })
}

module.exports = forecast