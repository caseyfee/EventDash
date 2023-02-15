
var bingAPI = "AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi";

// Variables for TicketMaster

var ticketMasterAPI = "rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";
// ticketMaster Sercret:
var ticketMasterSecret = "fp9pomMQ54vqq3rd";
var ticketMasterRootURL = "https://app.ticketmaster.com/discovery/v2/";

// ticket example URL searches with our API key
// Search for music events in the Los Angeles area https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi

var startingAddress = "";
// populated from bing/IP address
var startLat = "";
var startLon = "";
var eventListHTML = ``;
var eventLat = "";
var eventLon = "";
var radius = ""; 


var startingAddressEl = document.getElementById("search-bar");

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

        // Store Coordinates in local Storage
        localStorage.setItem('startLat', startLat);
        localStorage.setItem('startLon', startLon);
        console.log(startLat + ',' + startLon);
        
        getEventInfo(startLat, startLon);
    }
}

// Start address is sent to TM to find events within 50 miles (either in address or converted to lat/long)
var getEventInfo = function (startLat, startLon) {

    var userRadiusEl = document.querySelector("#radiusInput");
    radius = userRadiusEl.value;
   
var userSearchLatLonURL = `https://app.ticketmaster.com/discovery/v2/events?apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi&latlong=${startLat},${startLon}&radius=${radius}&locale=*`;

    fetch(userSearchLatLonURL)
    .then(function (data) {
    data.json().then(function (eventResponse) {
        console.log(eventResponse);

        var eventsArray = [];
        eventsArray = eventResponse;

        for (var i = 0; i < 10; i++) {
            
            console.log(eventResponse._embedded.events[i].name);
            console.log(eventResponse._embedded.events[i].dates.start.localDate);
            console.log(eventResponse._embedded.events[i].dates.start.localTime);
            console.log(eventResponse._embedded.events[i]._embedded.venues[0].name);
            console.log(eventResponse._embedded.events[i]._embedded.venues[0].address);

            var eventid = `${i}`
                
            eventListHTML = `<div class="flex justify-between items-center bg-white/75 text-black py-5 px-14">
            <div>
                <ul> <strong>Event Name:</strong> ${eventResponse._embedded.events[i].name} </ul>
                <ul> <strong>Date:</strong> ${eventResponse._embedded.events[i].dates.start.localDate} </ul>
                <ul> <strong>Time:</strong> ${eventResponse._embedded.events[i].dates.start.localTime} </ul>
                <ul> <strong>Location:</strong> ${eventResponse._embedded.events[i]._embedded.venues[0].name} </ul>
               
            </div>
            <a  target="_blank" ><button onclick = "showID(this.id)" id=${eventid} type="button" class="flex items-center justify-center bg-pink-500  border-l inline-block h-10 px-4 py-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            > Get Directions
            </button></a>
        </div>`;   
        
            document.querySelector('#eventList').innerHTML+= eventListHTML;

             // User chooses an event using the button - lat and long are pulled from local storage - and event address/lat long are sent to Bing
             showID = function(obj) {
                console.log(obj)
                console.log(eventResponse._embedded.events[obj]._embedded.venues[0].location.longitude);
                        console.log(eventResponse._embedded.events[obj]._embedded.venues[0].location.latitude);
                
                eventLat = eventResponse._embedded.events[obj]._embedded.venues[0].location.latitude;
                eventLon = eventResponse._embedded.events[obj]._embedded.venues[0].location.longitude;

                 // BRYAN Store Coordinates in local Storage
                    localStorage.setItem('eventLat', eventLat);
                    localStorage.setItem('eventLon', eventLon);
                    // console.log(eventLat + ',' + eventLon);

                
                GetMap(eventLat, eventLon);
            }

            type='text/javascript'
            src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi' 
        } 

                // MAP CREATION 
                // Add Event Listener for getMap
                            
                type='text/javascript'
                src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi' 

                type='text/javascript'
                function GetMap() {
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

                var mapStartLat = localStorage.getItem('startLat');
                var mapStartLon = localStorage.getItem('startLon');
                var mapEventLat = localStorage.getItem('eventLat');
                var mapEventLon = localStorage.getItem('eventLon');

                var waypoint1 = new Microsoft.Maps.Directions.Waypoint({ address: '', location: new Microsoft.Maps.Location(mapStartLat, mapStartLon) });
                var waypoint2 = new Microsoft.Maps.Directions.Waypoint({ address: '', location: new Microsoft.Maps.Location(mapEventLat, mapEventLon ) });
                directionsManager.addWaypoint(waypoint1);
                directionsManager.addWaypoint(waypoint2);
                // Set the element in which the itinerary will be rendered
                directionsManager.setRenderOptions({ itineraryContainer: document.getElementById('printoutPanel') });
                directionsManager.calculateDirections();
                });
                }

    }) 
}) 
}


