
var bingAPI = "AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi";

// Variables for TicketMaster

var ticketMasterAPI = "rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";
// ticketMaster Sercret:
var ticketMasterSecret = "fp9pomMQ54vqq3rd";
var ticketMasterRootURL = "https://app.ticketmaster.com/discovery/v2/";

// ticket example URL searches with our API key
// Search for music events in the Los Angeles area https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi
// TicketMaster docs: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/


// var startingAddress = "";
// // populated from bing/IP address
// var startLat = "";
// var startLon = "";
// var eventListHTML = ``;
// var eventLat = "";
// var eventLon = "";
// var radius = "10"; 


// var startingAddressEl = document.getElementById("search-bar");

// var startAddress = "";



// User inputs starting address - 
// Start function - onclick button to ssave address and send to TM


    // MONDAY LOCAL STORAGE STARTING CODE
    // let startButton = JSON.parse(localStorage.getItem("startingAddress")) || [];
    // if (!startButton.includes(startAddress)) {
    //     startButton.push(startAddress);
    //     localStorage.setItem("startingAddress", JSON.stringify(startButton));
      
    // }

//    mainSearchInput.textContent = '';
//    startingAddressEl.value = '';
//    console.log(startingAddressEl);



    
// Add suggestion of how to format address in the search bar
    
    
    // Start with an actual full search (Button)?
    // Console log 


    // Address or coordinates are saved into local storage and send to Bing

    // Clear History Button


// Start address is sent to TM to find events within 50 miles (either in address or converted to lat/long)

// Create a function to pull search results off of homepage
// Pushes to 'Search Page'


// var getEventInfo = function (startLat, startLon) {
// var userSearchLatLonURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi&latlong=${startLat},${startLon}&radius=${radius}&locale=*`;

    fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi")
    .then(function (data) {
    data.json().then(function (eventResponse) {
        console.log(eventResponse);

        // var eventsArray = [];

        for (var i = 0; i < 10; i++) {
            // eventsArray.push(eventsArray[i]);
            console.log(eventResponse._embedded.events[i].name);
            console.log(eventResponse._embedded.events[i].dates.start.localDate);
            console.log(eventResponse._embedded.events[i].dates.start.localTime);
            console.log(eventResponse._embedded.events[i]._embedded.venues[0].name);
            console.log(eventResponse._embedded.events[i]._embedded.venues[0].address);

            // console.log(eventsArray);

            
    
            eventListHTML = `<div class="flex justify-between items-center bg-white/75 text-black py-5 px-14">
            <div> 
                <ul id="events"> <strong>Event Name:</strong> ${eventResponse._embedded.events[i].name} </ul> 
                <ul id="events"> <strong>Date:</strong> ${eventResponse._embedded.events[i].dates.start.localDate} </ul>
                <ul id="events"> <strong>Time:</strong> ${eventResponse._embedded.events[i].dates.start.localTime} </ul>
                <ul id="events"> <strong>Location:</strong> ${eventResponse._embedded.events[i]._embedded.venues[0].name} </ul>
                <ul id="events"> <strong>Address:</strong> ${eventResponse._embedded.events[i]._embedded.venues[0].address.line1} </ul>
            </div> 

            <button type="button" class="flex items-center justify-center bg-pink-500  border-l inline-block h-10 px-4 py-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" 
            id=eventAddress> Get Directions 
            </button>
        </div>`;

            document.querySelector('#eventList').innerHTML+= eventListHTML;

            // MONDAY save lat and lon in local storage of events it is pulling
        } 

        // POTENTIALLY EXTRA TASK If user wants more events, link to the actual TM page AND BING maps
       
        // POTENTIALLY EXTRA TASK Save search results in local storage so it is not lost during refresh

        // Link remove history button after events are listed (id hide)

    }) 
}) 




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

