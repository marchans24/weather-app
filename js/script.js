// Constants and Variables
let reportData;

const API_KEY = '06dfafdfdba20a4051a82d26036578ff';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'


// Cached Element References

const $name = $('#name');
const $temp = $('#temp');
const $feels = $('#feels_like');
const $weather = $('#weather');
const $form = $('form');
const $input = $('input[type="text"]');


// Event Listeners

$form.on('submit', handleGetData);

// Functions

function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax(BASE_URL + `q=${userInput}&` + 'units=imperial&appid=' + API_KEY)

    .then(function(data) {
        console.log(data)
        reportData = data;
        render();
    }, function(error) {
        console.log('Error: ', error);
    });
}

function render() {
    $name.text('City: ' + reportData.name);
    $temp.text('Temperature: ' + Math.round(reportData.main.temp) + '°');
    $feels.text('Feels Like: ' + Math.round(reportData.main.feels_like) + '°');
    $weather.text('Description: ' + reportData.weather[0].main);
}