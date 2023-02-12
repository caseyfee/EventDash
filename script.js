
var bingAPI = "AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi";

// Variables for TicketMaster

var ticketMasterAPI = "rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";
// ticketMaster Sercret:
var ticketMasterSecret = "fp9pomMQ54vqq3rd";

var ticketMasterRootURL = "https://app.ticketmaster.com/discovery/v2/";
var ticketMasterLA = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";

// ticket example URL searches with our API key
// Get a list of all events in the United States https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi
// Search for music events in the Los Angeles area https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi
// Get a list of all events for Adele in Canada https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ917Gku7&countryCode=CA&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi
// TicketMaster docs: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
// Dom variables

var startLat = "41.837285";
var startLon = "-88.284333";


// User inputs starting address - 

    // Start function - onclick button to ssave address and send to TM
    // Validitation of the address step? Use modal to tell user it didn't work
    // Add suggestion of how to format address in the search bar
    // Start with an actual full search (Button)?
    // Console log 


    // Address or coordinates are saved into local storage and send to Bing

    // Clear History Button


// Start address is sent to TM to find events within 50 miles (either in address or converted to lat/long)

// Create a function to pull search results off of homepage
// Pushes to 'Search Page'

var eventListHTML = ``;
var eventLat = "";
var eventLon = "";
var radius = "50"; 
// may need to be # ^^

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
    
            eventListHTML = `<div> <br> <ul id="events"> Event Name: ${eventResponse._embedded.events[i].name} </ul> 
            <ul id="events"> Event Date: ${eventResponse._embedded.events[i].dates.start.localDate} </ul>
            <ul id="events"> Event Time: ${eventResponse._embedded.events[i].dates.start.localTime} </ul>
            <ul id="events"> Event Location: ${eventResponse._embedded.events[i]._embedded.venues[0].name} </ul>
            <ul id="events"> Event Address: ${eventResponse._embedded.events[i]._embedded.venues[0].address.line1} </ul>
            </div> 
            <button class="flex items-center justify-center px-4 border-l" id=eventAddress>
                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>`;

            document.querySelector('#eventList').innerHTML+= eventListHTML;
        } 

        // POTENTIALLY EXTRA TASK If user wants more events, link to the actual TM page AND BING maps
       
        // POTENTIALLY EXTRA TASK Save search results in local storage so it is not lost during refresh

        // Link remove history button after events are listed (id hide)

    }) 
}) 

// User chooses an event using the button and event address is sent to Bing
    // Use modal?
    // POTENTIALLY EXTRA TASK - add functionality of map (share it with user's phone or something)



// Bing returns a map with starting and ending address

