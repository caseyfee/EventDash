var ticketMasterAPI = "rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi";
// ticketMaster Sercret:
var ticketMasterSecret = "fp9pomMQ54vqq3rd";

var ticketMasterRootURL = "https://app.ticketmaster.com/discovery/v2/";



// $(document).ready(function () {
//     var $events = $('#events');

//     $.ajax({
//         type:"GET",
//         url:"https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi",
//         async:true,
//         dataType: "json",
//         success: function(events) {
//             console.log(typeof(events));
//             $.each(events, function(i, event)
//             {$events.append('<li>my events </li>')});
//                     console.log(json);
//                     JSON.parse(json);
//                     console.log(json);
                    
//                     // Parse the response.
//                     // Do other things.
//                  },
//         error: function(xhr, status, err) {
//                     // This time, we do not end up here!
//                  }
//       });
// })


fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=rGS5yWSlAMAia16Qiej1YcdN2Y1QXhNi").then(function(data) {
    data.json().then(function(eventResponse) {
        console.log(eventResponse)
    })
})