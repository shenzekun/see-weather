#!/usr/bin/env node

var axios = require('axios');

var data = {};
if (process.argv[2]) {
    data.params = {
        city: process.argv[2]
    }
}


axios.get('http://api.jirengu.com/weather.php', data).then(function (res) {
    if (res.data.status == 'success') {
        var weather = res.data.results[0].weather_data[0];
        console.log("位置：" + res.data.results[0].currentCity + " " + weather.temperature);
        console.log("今天" + weather.date);
        console.log(weather.wind);
        console.log(weather.weather);
        console.log("建议:" + res.data.results[0].index[0].des);
    } else {
        console.log(res.data.message);
    }
}).catch(function (err) {
    console.log(err);
})