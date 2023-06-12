var requestUrl = 'api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=13c2cd754a4de8fb6b73109a81151aa4'

fetch(requestUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('Fetch Response \n-------------');
        console.log(data);
    })