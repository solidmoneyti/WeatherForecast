// $(document).ready(function () {
//     // Event listener for the search form
//     $('#search-form').submit(function (event) {
//         event.preventDefault();

//         // Get the value from the search input
//         var city = $('#search-input').val().trim();

//         // Check if the city is not empty
//         if (city !== '') {
//             // Call a function to handle the search with the entered city
//             handleSearch(city);

//             // Clear the search input
//             $('#search-input').val('');
//         }
//     });

//     // Function to handle the search with the entered city
//     function handleSearch(city) {
//         console.log('Searching for city:', city);
//         var WeatherURL =
//             'http://api.openweathermap.org/data/2.5/weather?q=' +
//             city +
//             '&appid=5654da89db7f3e30da2b3d1b2a8aa11a&units=metric';
//         var forecastURL =
//             'http://api.openweathermap.org/data/2.5/forecast?q=' +
//             city +
//             '&appid=5654da89db7f3e30da2b3d1b2a8aa11a&units=metric';

//         // Fetch the current weather data
//         fetch(WeatherURL)
//             .then(function (response) {
//                 // Parse the JSON response
//                 return response.json();
//             })
//             .then(function (weatherData) {
//                 console.log('Data:', weatherData);
//                 // Update the #today section with the weather data
//                 updateTodaySection(weatherData);
//             })
//             .then(function () {
//                 // Fetch the forecast data
//                 return fetch(forecastURL);
//             })
//             .then(function (response) {
//                 // Parse the JSON response
//                 return response.json();
//             })

//             .then(function (forecastData) {
//                 console.log('Data:', forecastData);
//                 // Update the #forecast section with the forecast data
//                 updateForecastSection(forecastData);
//             })

//             .then(function () {
//                 // Add the city to the history
//                 addToHistory(city);
//             });
//         }

//     function updateTodaySection(weatherData) {
//         // Get the #today section element
//         var todaySection = $('#today');

//         // Clear the existing content
//         todaySection.empty();

//         // Create a div for the current weather with a box stroke
//         var currentWeatherDiv = $('<div>').addClass('current-weather-box');

//         // Create elements to display the weather information
//         var cityNameElement = $('<h2>').text(`${weatherData.name}`);
//         currentWeatherDiv.append(cityNameElement);

//         var temperatureElement = $('<p>').text(`Temp: ${weatherData.main.temp}°C`);
//         currentWeatherDiv.append(temperatureElement);

//         var windSpeedElement = $('<p>').text(`Wind: ${weatherData.wind.speed} m/s`);
//         currentWeatherDiv.append(windSpeedElement);
        
//         var humidityElement = $('<p>').text(`Humidity: ${weatherData.main.humidity}%`);
//         currentWeatherDiv.append(humidityElement);



//         // Append the current weather div to the #today section
//         todaySection.append(currentWeatherDiv);

//         // Log the updated content to the console
//         console.log('Updated #today section:', todaySection.html());
//     }

//     function updateForecastSection(forecastData) {
//         // Get the #today section element
//         var forecastSection = $('#forecast');

//         var numofdays = 5;

//         // Clear the existing content
//         forecastSection.empty();

//         // Create a Bootstrap row to hold the forecast cards
//         var $forecastRow = $('<div>').addClass('row');

//         for (var i = 0; i < numofdays; i++) {
//             // Create a Bootstrap column for each forecast card
//             var $forecastCol = $('<div>').addClass('col-md-2 mt-3');

//             // Create a Bootstrap card with dark background and white text
//             var $forecastCard = $('<div>').addClass('card text-white bg-dark mb-3');
//             var $cardBody = $('<div>').addClass('card-body');
//             $forecastCard.append($cardBody);

//             // Use day.js to format the date
//             var date = dayjs(forecastData.list[i].dt_txt);
//             var formattedDate = date.format('DD/MM/YYYY');

//             var dateElement = $('<h5>').addClass('card-title').text(`${formattedDate}`);
//             $cardBody.append(dateElement);

//             var temperatureElement = $('<p>').addClass('card-text').text(`Temp: ${forecastData.list[i].main.temp}°C`);
//             $cardBody.append(temperatureElement);

//             var windSpeedElement = $('<p>').addClass('card-text').text(`Wind: ${forecastData.list[i].wind.speed} m/s`);
//             $cardBody.append(windSpeedElement);
            
//             var humidityElement = $('<p>').addClass('card-text').text(`Humidity: ${forecastData.list[i].main.humidity}%`);
//             $cardBody.append(humidityElement);



//             // Append the card to the column
//             $forecastCol.append($forecastCard);

//             // Append the column to the row
//             $forecastRow.append($forecastCol);
//         }

//         // Append the row to the forecast section
//         forecastSection.append($forecastRow);

//         console.log('Updated #forecast section:', forecastSection.html());
//     }
    

//     function addToHistory(city) {
//         // Get the #history section element
//         var historySection = $('#history');

//         // Check if the history already contains the city
//         if (historySection.children().length === 5) {
//             // If there are already 5 items, remove the oldest one
//             historySection.children().first().remove();
//         }

//         // Create a button for the city with padding
//         var $historyButton = $('<button>').addClass('btn btn-secondary history-button').text(city).css('margin', '5px');

//         // Add click event listener to the history button
//         $historyButton.click(function () {
//             handleSearch(city);
//         });

//         // Append the button to the history section
//         historySection.prepend($historyButton);
//     }
// });

$(document).ready(function () {
    // Event listener for the search form
    $('#search-form').submit(function (event) {
        event.preventDefault();

        // Get the value from the search input
        var city = $('#search-input').val().trim();

        // Check if the city is not empty
        if (city !== '') {
            // Call a function to handle the search with the entered city
            handleSearch(city);

            // Clear the search input
            $('#search-input').val('');
        }
    });

    // Function to handle the search with the entered city
    function handleSearch(city) {
        console.log('Searching for city:', city);
        var weatherURL =
            'http://api.openweathermap.org/data/2.5/weather?q=' +
            city +
            '&appid=5654da89db7f3e30da2b3d1b2a8aa11a&units=metric';
        var forecastURL =
            'http://api.openweathermap.org/data/2.5/forecast?q=' +
            city +
            '&appid=5654da89db7f3e30da2b3d1b2a8aa11a&units=metric';

        // Fetch the current weather data
        fetch(weatherURL)
            .then(function (response) {
                // Parse the JSON response
                return response.json();
            })
            .then(function (weatherData) {
                console.log('Data:', weatherData);
                // Update the #today section with the weather data
                updateTodaySection(weatherData);

                // Fetch the forecast data
                return fetch(forecastURL);
            })
            .then(function (response) {
                // Parse the JSON response
                return response.json();
            })
            .then(function (forecastData) {
                console.log('Data:', forecastData);

                // Map the required indices from forecastData.list
                var selectedForecastData = [7, 15, 23, 31, 39].map(function (index) {
                    return forecastData.list[index];
                });

                // Update the #forecast section with the selected forecast data
                updateForecastSection(selectedForecastData);

                // Add the city to the history
                addToHistory(city);
            })
    }

    function updateTodaySection(weatherData) {
        // Get the #today section element
        var todaySection = $('#today');

        // Clear the existing content
        todaySection.empty();

        // Create a div for the current weather with a box stroke
        var currentWeatherDiv = $('<div>').addClass('current-weather-box');

        // Create elements to display the weather information
        var cityNameElement = $('<h2>').text(`${weatherData.name}`);
        currentWeatherDiv.append(cityNameElement);

        var temperatureElement = $('<p>').text(`Temp: ${weatherData.main.temp}°C`);
        currentWeatherDiv.append(temperatureElement);

        var windSpeedElement = $('<p>').text(`Wind: ${weatherData.wind.speed} m/s`);
        currentWeatherDiv.append(windSpeedElement);

        var humidityElement = $('<p>').text(`Humidity: ${weatherData.main.humidity}%`);
        currentWeatherDiv.append(humidityElement);

        // Append the current weather div to the #today section
        todaySection.append(currentWeatherDiv);

        // Log the updated content to the console
        console.log('Updated #today section:', todaySection.html());
    }

    function updateForecastSection(selectedForecastData) {
        // Get the #forecast section element
        var forecastSection = $('#forecast');

        // Clear the existing content
        forecastSection.empty();

        // Create a Bootstrap row to hold the forecast cards
        var $forecastRow = $('<div>').addClass('row');

        for (var i = 0; i < selectedForecastData.length; i++) {
            // Create a Bootstrap column for each forecast card
            var $forecastCol = $('<div>').addClass('col-md-2 mt-3');

            // Create a Bootstrap card with dark background and white text
            var $forecastCard = $('<div>').addClass('card text-white bg-dark mb-3');
            var $cardBody = $('<div>').addClass('card-body');
            $forecastCard.append($cardBody);

            // Use day.js to format the date
            var date = dayjs(selectedForecastData[i].dt_txt);
            var formattedDate = date.format('DD/MM/YYYY');

            var dateElement = $('<h5>').addClass('card-title').text(`${formattedDate}`);
            $cardBody.append(dateElement);

            var temperatureElement = $('<p>').addClass('card-text').text(`Temp: ${selectedForecastData[i].main.temp}°C`);
            $cardBody.append(temperatureElement);

            var windSpeedElement = $('<p>').addClass('card-text').text(`Wind: ${selectedForecastData[i].wind.speed} m/s`);
            $cardBody.append(windSpeedElement);

            var humidityElement = $('<p>').addClass('card-text').text(`Humidity: ${selectedForecastData[i].main.humidity}%`);
            $cardBody.append(humidityElement);

            // Append the card to the column
            $forecastCol.append($forecastCard);

            // Append the column to the row
            $forecastRow.append($forecastCol);
        }

        // Append the row to the forecast section
        forecastSection.append($forecastRow);

        console.log('Updated #forecast section:', forecastSection.html());
    }

    function addToHistory(city) {
        // Get the #history section element
        var historySection = $('#history');

        // Check if the history already contains the city
        if (historySection.children().length === 5) {
            // If there are already 5 items, remove the oldest one
            historySection.children().first().remove();
        }

        // Create a button for the city with padding
        var $historyButton = $('<button>').addClass('btn btn-secondary history-button').text(city).css('margin', '5px');

        // Add click event listener to the history button
        $historyButton.click(function () {
            handleSearch(city);
        });

        // Append the button to the history section
        historySection.prepend($historyButton);
    }
});
