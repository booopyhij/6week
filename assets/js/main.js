// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=columbus&units=imperial&appid=13c2cd754a4de8fb6b73109a81151aa4'
// var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName + '&units=imperial&appid=13c2cd754a4de8fb6b73109a81151aa4'
// 
// fetch(requestUrl)
// .then(function (response) {
// return response.json();
// })
// .then(function (data) {
// console.log('Fetch Response \n-------------');
// console.log(data);
// })
var searchedCities = $(document.getElementById('searchHistory'));
var cities = JSON.parse(localStorage.getItem('cities')) || [];
$(document).ready(function () {
    $('#searchButton').on('click', function () {
        var cityName = $('#searchBar').val();
        console.log(cityName);
        var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=13c2cd754a4de8fb6b73109a81151aa4'

        fetch(requestUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log('Fetch Response \n-------------');
                console.log(data);
            });
            

    })

});

function createSearchHistory() {
    for (let i = 0; i < cities.length; i++){
        var city = cities[i];
        var cityButtonEl = $('<button>');
        cityButtonEl.textContent = city;
    }
}



    //search function
    //save the search to the local storage
    //create the city name variable
    //function to append the search data to the cards
    //history, make button = to search form
    //append todays data to the main row

    //$('#searchBar').val(localStorage.getItem('#searchBar')).appendChild('#searchHistory').attr('li');