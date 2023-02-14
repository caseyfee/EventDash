// API Keys

var bingMapsApiKey = "AjyUKW6RaQn4BQSYjKo0uvtRaDumIpGMR_5Eyex2C0lkul8hXnbD05vXh8TVePWi";

//Store User input address in local Storage

localStorage.setItem("address")

// Address Variable
var address = localStorage.getItem("address");

// Variables for TicketMaster

var ticketMasterAPI = "rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";
// ticketMaster Secret:
var ticketMasterSecret = "fp9pomMQ54vqq3rd";

var ticketMasterRootURL = "https://app.ticketmaster.com/discovery/v2/";
var ticketMasterLA = "https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";


function getCoordinatesAndEvents(address) {
    // Get the coordinates for the given address using Bing Maps API
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://dev.virtualearth.net/REST/v1/Locations?q=" + encodeURIComponent(address) + "&key=" + bingMapsApiKey);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var data = JSON.parse(xhr.responseText);
            var coordinates = data.resourceSets[0].resources[0].point.coordinates;
            var latitude = coordinates[0];
            var longitude = coordinates[1];

            // Get events near the given coordinates using Ticketmaster API
            var eventXhr = new XMLHttpRequest();
            eventXhr.open("GET", "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + ticketMasterAPI + "&latlong=" + latitude + "," + longitude);
            eventXhr.onreadystatechange = function () {
                if (eventXhr.readyState === XMLHttpRequest.DONE && eventXhr.status === 200) {
                    var eventData = JSON.parse(eventXhr.responseText);
                    console.log(eventData._embedded.events);
                }
            };
            eventXhr.send();
        }
    };
    xhr.send();
}

// Event listener to execute the function when the button is clicked
document.getElementById("submit-button").addEventListener("click", function () {
    var address = document.getElementById("address").value;
    getCoordinatesAndEvents(address);
});













// ticket example URL searches with our API key
// Get a list of all events in the United States https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi
// Search for music events in the Los Angeles area https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi

// Get a list of all events for Adele in Canada https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ917Gku7&countryCode=CA&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi

// TicketMaster docs: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
// Dom variables



// Create a function to pull search results off of homepage
// Pushes to 'Search Page'

//DOM VARIABLES
/* var eventListHTML = ``;

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
            </div> `;

            document.querySelector('#eventList').innerHTML+= eventListHTML;

            // $('#eventList').html(eventListHTML);
        } 
       
        // var eventsArray = [];
        // populateEventList(eventResponse);
    }) 
}) 
// function populateEventList(eventResponse) {

    

    

// }  */
/* <!DOCTYPE html>
<html lang="en">
<head>
    <title>Map View Events - Bing Maps Samples</title>

    <meta charset="utf-8" />
	<link rel="shortcut icon" href="/favicon.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="The following code sample demonstrates how to add an maps events handler." />
    <meta name="keywords" content="Microsoft maps, map, gis, API, SDK, Bing, Bing Maps" />
    <meta name="author" content="Microsoft Bing Maps" />
    <meta name="screenshot" content="screenshot.jpg" />
    
    <script>
    var map;

    function GetMap()
    {
        map = new Microsoft.Maps.Map('#myMap', {});

        Microsoft.Maps.Events.addHandler(map, 'viewchangestart', function (e) {
            displayEventInfo('viewchangestart', e);
        });

        Microsoft.Maps.Events.addHandler(map, 'viewchange', function (e) {
            displayEventInfo('viewchange', e);
        });

        Microsoft.Maps.Events.addHandler(map, 'viewchangeend', function (e) {
            displayEventInfo('viewchangeend', e);
        });
    }

    function displayEventInfo(eventName, event) {
        var output = document.getElementById('output');

        output.innerHTML = eventName + ': ';

        if (typeof event.cause === 'undefined') {
            output.innerHTML += 'Likely caused by user';
        } else {
            if (event.cause === 1) {
                output.innerHTML += 'Caused by user';
            } else if (event.cause === 0) {
                output.innerHTML += 'Caused by set view';
            }
        }
    }
    </script>
    
</head>
<body>
    <div id="myMap" style="position:relative;width:100%;min-width:290px;height:600px;background-color:gray"></div><br />
    <input type="button" value="test" onclick="map.setView({zoom:2})" /><br/><br/>
    <div id="output"></div>

    <script>
        // Dynamic load the Bing Maps Key and Script
        // Get your own Bing Maps key at https://www.microsoft.com/maps
        (async () => {
            let script = document.createElement("script");
            let bingKey = await fetch("https://samples.azuremaps.com/api/GetBingMapsKey").then(r => r.text()).then(key => { return key });
            script.setAttribute("src", `https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${bingKey}`);
            document.body.appendChild(script);
        })();
    </script>
</body>
</html> */

