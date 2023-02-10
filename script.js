// Variables for petFinder
var petFinderAPI = "SsaICgpvhfjFNtYay7GrAmNtBM4fG2uTLpP4EtnMQ0gPkx1OXr";
// The "access_token" is the token itself. You’ll need to have your system store this as a variable and include it in the header of every API request until it expires and you request another.
// var access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJTc2FJQ2dwdmhmakZOdFlheTdHckFtTnRCTTRmRzJ1VExwUDRFdG5NUTBnUGt4MU9YciIsImp0aSI6IjdlZDdiMjY2MTNiYmJlMzcyNDdlZGU2ZWE5ZTQ4ZjNlODFiYzIxYWY4OGFlYmZmOGNiOGRlYTYxOGZlMTkwNzhiMDAwOWIxN2JmMTE3YmE4IiwiaWF0IjoxNjc1ODI1Mzg5LCJuYmYiOjE2NzU4MjUzODksImV4cCI6MTY3NTgyODk4OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.pT6ICE9ed2ajGGpHbjP5mNy8UjcQY_1hBZXwHuhSZ2el1G8x2O2ewNOWC5DVHYdcuVHbq4a9XpJ2sJbfCz5E1ooJ_gTNYymdfoJ70clgIezfur1QYzWAuxrVX9e7ZY5OEVC3F1ri2fuVnJf7juRgF5IcNrlElq4C22oGmwx6_t-S6ecGRzhEw1f5dYz9BFyjA96MUs5jy_hZm1f3PTqtzDn89uF_poZ5lXnIh43mMdwmI_h1G6Ya8yR6zvziAioWOHzNXlECumJrTsuv5DrrX5RfcsZOV_wHc9h7dj1E2KGcPmPgtukOX7ClVosnZmlW8FQc5OOT2M-jUpuJfS8lyQ"}%";
// To pull from PetFinder- use GET requests using the following patterns:
// curl -H "Authorization: Bearer {YOUR_ACCESS_TOKEN}" GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}
// Documentation about what PetFinder API errors mean: https://www.rfc-editor.org/rfc/rfc7807

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



// Create a function to pull search results off of homepage
// Pushes to 'Search Page'

var eventListHTML = ``;

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
            <ul id="events"> Event Name: ${eventResponse._embedded.events[i].dates.start.localDate} </ul>
            <ul id="events"> Event Name: ${eventResponse._embedded.events[i].dates.start.localTime} </ul>
            <ul id="events"> Event Name: ${eventResponse._embedded.events[i]._embedded.venues[0].name} </ul>
            <ul id="events"> Event Name: ${eventResponse._embedded.events[i]._embedded.venues[0].address.line1} </ul>
            </div> `;

            document.querySelector('#eventList').innerHTML+= eventListHTML;

            // $('#eventList').html(eventListHTML);
        } 
       
        // var eventsArray = [];
        // populateEventList(eventResponse);
    }) 
}) 
// function populateEventList(eventResponse) {

    

    

// } 









// 

