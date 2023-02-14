var bingAPI = "AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi";

// Variables for TicketMaster

var ticketMasterAPI = "rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";
// ticketMaster Sercret:
var ticketMasterSecret = "fp9pomMQ54vqq3rd";
var ticketMasterRootURL = "https://app.ticketmaster.com/discovery/v2/";

// ticket example URL searches with our API key
// Search for music events in the Los Angeles area https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi
// TicketMaster docs: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/


var startingAddress = "";
// populated from bing/IP address
var startLat = "";
var startLon = "";
var eventListHTML = ``;
var eventLat = "";
var eventLon = "";
var radius = "10"; 


var startingAddressEl = document.getElementById("search-bar");

// var startAddress = "";



// User inputs starting address - 
// Start function - onclick button to ssave address and send to TM
var enterAddress = async function(){
    // startingAddress = startingAddressEl.value.trim();

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
         // Validitation of the address step? Use console to tell user it didn't work
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    function getPosition(position) {
        startLat = position.coords.latitude;
        startLon = position.coords.longitude;
        console.log(startLat + ',' + startLon);
        getEventInfo(startLat, startLon);
    }
    

    // MONDAY LOCAL STORAGE STARTING CODE
    // let startButton = JSON.parse(localStorage.getItem("startingAddress")) || [];
    // if (!startButton.includes(startAddress)) {
    //     startButton.push(startAddress);
    //     localStorage.setItem("startingAddress", JSON.stringify(startButton));
      
    // }

//    mainSearchInput.textContent = '';
//    startingAddressEl.value = '';
//    console.log(startingAddressEl);

  
}

    
// Add suggestion of how to format address in the search bar
    
    
    // Start with an actual full search (Button)?
    // Console log 


    // Address or coordinates are saved into local storage and send to Bing

    // Clear History Button


// Start address is sent to TM to find events within 50 miles (either in address or converted to lat/long)

// Create a function to pull search results off of homepage
// Pushes to 'Search Page'


var getEventInfo = function (startLat, startLon) {
var userSearchLatLonURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi&latlong=${startLat},${startLon}&radius=${radius}&locale=*`;

    fetch(userSearchLatLonURL)
    .then(function (data) {
    data.json().then(function (eventResponse) {
        console.log(eventResponse);

        // var eventsArray = [];

        for (var i = 0; i < 10; i++) {
            // eventsArray.push(eventsArray[i]);
            // console.log(eventResponse._embedded.events[i].name);
            // console.log(eventResponse._embedded.events[i].dates.start.localDate);
            // console.log(eventResponse._embedded.events[i].dates.start.localTime);
            // console.log(eventResponse._embedded.events[i]._embedded.venues[0].name);
            // console.log(eventResponse._embedded.events[i]._embedded.venues[0].address);
            console.log(eventResponse._embedded.events[i]._embedded.venues[0].location[0].longitude)
            console.log(eventResponse._embedded.events[i]._embedded.venues[0].location[0].latitude)

            // console.log(eventsArray);

            
    
            eventListHTML = `<div> <br> <ul id="events"> Event Name: ${eventResponse._embedded.events[i].name} </ul> 
            <ul id="events"> Event Date: ${eventResponse._embedded.events[i].dates.start.localDate} </ul>
            <ul id="events"> Event Time: ${eventResponse._embedded.events[i].dates.start.localTime} </ul>
            <ul id="events"> Event Location: ${eventResponse._embedded.events[i]._embedded.venues[0].name} </ul>
            <ul id="events"> Event Address: ${eventResponse._embedded.events[i]._embedded.venues[0].address.line1} </ul>
            </div> 
            <button class="flex items-center justify-center px-4 border-l" id=eventAddress> Get Directions 
                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>`;

            document.querySelector('#eventList').innerHTML+= eventListHTML;

            // MONDAY save lat and lon in local storage of events it is pulling
        } 

        // POTENTIALLY EXTRA TASK If user wants more events, link to the actual TM page AND BING maps
       
        // POTENTIALLY EXTRA TASK Save search results in local storage so it is not lost during refresh

        // Link remove history button after events are listed (id hide)

    }) 
}) 


}

// User chooses an event using the button - lat and long are pulled from local storage - and event address/lat long are sent to Bing
// Map is created 
    // Use modal?
    
    // POTENTIALLY EXTRA TASK - add functionality of map (share it with user's phone or something)


// POTENTIAL LOCAL STORAGE RECALL - FROM MY WEATHER APP SO IT WILL CREATE BUTTONS FOR OLD SEARCHES
    // function displayHistory() {
    //     var previousSearchesHTML = ``;
    
    //     let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    
    //     for (var i = 0; i < searchHistory.length; i++) {
    //         const city = searchHistory[i];
    //         previousSearchesHTML += `
    //         <a type="button" onclick="getCityInfo('${city}')">
    //             <span class="input-group-text border-0 fw-bold" >
    //                 ${city}
    //             </span>
    //         </a>`
    //     }
    //     // NEEDS updating if we want to include buttons
    //     $('#previousCities').html(previousSearchesHTML);
    // }
// Bing returns a map with starting and ending address

