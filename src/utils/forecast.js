const request = require('postman-request');

//// https://weatherstack.com/  //email:noel@owlymail.com pass:noelnoel
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a7909fd0d98e775e9e822d2110df423b&query='+latitude+','+longitude+'&units=m';
    request({url, json:true}, (error, {body} = {}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error === 0){
            callback('Unable to find location', undefined);
        } else{
            callback(undefined, {
                description: 'Weather: '+body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degress out. It feels like '+body.current.feelslike+' degress out.',
                icon: body.current.weather_icons
            });
        }
    })
}

module.exports = forecast