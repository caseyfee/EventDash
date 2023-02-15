
var bingAPI = "AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi";

// Variables for TicketMaster


var ticketMasterAPI = "rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";
// ticketMaster Sercret:
var ticketMasterSecret = "fp9pomMQ54vqq3rd";
var ticketMasterRootURL = "https://app.ticketmaster.com/discovery/v2/";

// ticket example URL searches with our API key
// Search for music events in the Los Angeles area https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi
// TicketMaster docs: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/


/* var startingAddress = "";
// populated from bing/IP address
var startLat = "";
var startLon = "";
var eventListHTML = ``;
var eventLat = "";
var eventLon = "";
var radius = "20"; */

var startingAddress = "";
// populated from bing/IP address
var startLat = "";
var startLon = "";
var eventListHTML = ``;
var eventLat = "";
var eventLon = "";
var radius = "20";

/* var startingAddressEl = document.getElementById("search-bar"); */


var startingAddressEl = document.getElementById("search-bar");


// var startAddress = "";


// User inputs starting address - 
// Start function - onclick button to ssave address and send to TM
/* var enterAddress = async function () {
    // startingAddress = startingAddressEl.value.trim();


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
        // Validitation of the address step? Use console to tell user it didn't work
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    function getPosition(position) {
        var startLat = position.coords.latitude;
        var startLon = position.coords.longitude;
        // Store Coordinates in local Storage
        localStorage.setItem('startLat', startLat);
        localStorage.setItem('startLon', startLon);
        console.log(startLat + ',' + startLon);
        getEventInfo(startLat, startLon);
    } */


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
        // Validitation of the address step? Use console to tell user it didn't work
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
    function getPosition(position) {
        var startLat = position.coords.latitude;
        var startLon = position.coords.longitude;
        // Store Coordinates in local Storage
        localStorage.setItem('startLat', startLat);
        localStorage.setItem('startLon', startLon);
        console.log(startLat + ',' + startLon);
        getEventInfo(startLat, startLon);
    }

   /*  MONDAY LOCAL STORAGE STARTING CODE- Can Be Deleted
    let startButton = JSON.parse(localStorage.getItem("startingAddress")) || [];
    if (!startButton.includes(startAddress)) {
        startButton.push(startAddress);
        localStorage.setItem("startingAddress", JSON.stringify(startButton));


   /*  MONDAY LOCAL STORAGE STARTING CODE- Can Be Deleted
    let startButton = JSON.parse(localStorage.getItem("startingAddress")) || [];
    if (!startButton.includes(startAddress)) {
        startButton.push(startAddress);
        localStorage.setItem("startingAddress", JSON.stringify(startButton));

    } */

    //    mainSearchInput.textContent = '';
    //    startingAddressEl.value = '';
    //    console.log(startingAddressEl);


// }


// Add suggestion of how to format address in the search bar

// Add suggestion of how to format address in the search bar



// Start with an actual full search (Button)?
// Console log 


// Address or coordinates are saved into local storage and send to Bing

// Clear History Button


// Start address is sent to TM to find events within 50 miles (either in address or converted to lat/long)

// Create a function to pull search results off of homepage
// Pushes to 'Search Page'


// var getEventInfo = function (startLat, startLon) {

//     var userSearchLatLonURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi&latlong=${startLat},${startLon}&radius=${radius}&locale=*`;
  
//     fetch(userSearchLatLonURL)
//       .then(function (data) {
//         data.json().then(function (eventResponse) {
//           console.log(eventResponse);
  
//           for (var i = 0; i < 10; i++) {
//             // create eventListHTML
  
//             eventListHTML += `<div> 
//                                 <br> 
//                                 <ul id="events"> Event Name: ${eventResponse._embedded.events[i].name} </ul> 
//                                 <ul id="events"> Event Date: ${eventResponse._embedded.events[i].dates.start.localDate} </ul>
//                                 <ul id="events"> Event Time: ${eventResponse._embedded.events[i].dates.start.localTime} </ul>
//                                 <ul id="events"> Event Location: ${eventResponse._embedded.events[i]._embedded.venues[0].name} </ul>
//                                 <ul id="events"> Event Address: ${eventResponse._embedded.events[i]._embedded.venues[0].address.line1} </ul>
//                                 <button class="flex items-center justify-center px-4 border-l" id="eventAddress"> 
//                                   Get Directions 
//                                   <svg class="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                                     <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
//                                   </svg>
//                                 </button>
//                               </div>`;
  
//             document.querySelector('#eventList').innerHTML += eventListHTML;
  
//             // add event listener to button for each event
//             document.querySelectorAll('#eventAddress').forEach(function(button) {
//               button.addEventListener('click', function(event) {
//                 event.preventDefault();
//                 var address = event.target.parentElement.querySelector('ul:nth-child(5)').textContent.split(': ')[1]; // get the event address from the clicked button's parent element
//                 getDirections(address);
//               });
//             });
//           } 
//         }) 
//       }) 

//   } 

  //Function to get directions using bing maps API
  /* function getDirections(start, end) {

    const startCoords = start.latitude + "," + start.longitude;
    const endCoords = end.latitude + "," + end.longitude;
  
    const apiKey = "AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi";
    const apiUrl = `https://dev.virtualearth.net/REST/v1/Routes/Driving?wp.0=${startCoords}&wp.1=${endCoords}&avoid=minimizeTolls&key=${apiKey}`;
  
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const itineraryItems = data.resourceSets[0].resources[0].routeLegs[0].itineraryItems;
        let directions = "";
  
        itineraryItems.forEach((item) => {
          if (item.instruction) {
            directions += `<div>${item.instruction.text}</div>`;
          }
        });
  
        document.getElementById("directions").innerHTML = directions;
      })
      .catch((error) => {
        console.error(error);
      });

  } */
  
type='text/javascript'
src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi' 

type='text/javascript'
function GetMap()
{
var map = new Microsoft.Maps.Map('#myMap');

//Add your post map load code here.
var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
  /* No need to set credentials if already passed in URL */
  center: new Microsoft.Maps.Location(47.606209, -122.332071),
  zoom: 12
});
Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
  var directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);
  // Set Route Mode to driving
  directionsManager.setRequestOptions({ routeMode: Microsoft.Maps.Directions.RouteMode.driving });
  var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: '', location: new Microsoft.Maps.Location(startLat, startLon) });
  var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: '', location: new Microsoft.Maps.Location(eventLat,eventLon ) });
  directionsManager.addWaypoint(waypoint1);
  directionsManager.addWaypoint(waypoint2);
  // Set the element in which the itinerary will be rendered
  directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
  directionsManager.calculateDirections();
});
}
  /* tiny change */

