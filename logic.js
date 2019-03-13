class train {
  constructor (name, destination, arrival, frequency, distance) {
    this.name = name;
    this.destination = destination;
    this.arrival = arrival;
    this.frequency = frequency;
    this.distance = distance;
  }
}


$(document).ready(()=> {
  // setting up the database
  // initializing Firebase
  

  var config = {
    apiKey: "AIzaSyCnjieYcp6j8CO5zqe3PMgpbV-TsBjK2cM",
      authDomain: "traintracker-56f7d.firebaseapp.com",
      databaseURL: "https://traintracker-56f7d.firebaseio.com",
      projectId: "traintracker-56f7d",
      storageBucket: "traintracker-56f7d.appspot.com",
      messagingSenderId: "1039862681593"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();

  var trains = [];

  // adding new train
  $("#addTrain").on("click", () => {
    // keeping the page from being refreshed
    event.preventDefault();

    // storing and retrieving the most refcent train input
    name = $("#nameInput").val().trim();
    destination = $("#destinationInput").val().trim();
    arrival = $("#arrivalInput").val().trim();
    frequency = $("#frequencyInput").val().trim();
    distance = $("#distanceInput").val().trim();

    console.log("Name: " + name);
    console.log("Destination: " + destination);
    console.log("Time: " + arrival);
    console.log("Frequency: " + frequency + ' ' + 'minutes');

    database.ref().push({
      name: name,
      destination: destination,
      arrival: arrival,
      frequency: frequency,
      distance: distance,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });

  database.ref().on('child_added', (newchild)=> {
    var train = new train(newchild.val().name, newchild.val().role, newchild.val().rate, newchild.val().start);
    trains.push(train);

    var currentTime = moment().format("h:mm A");
    console.log("Current Time 1: " + currentTime);

    // add to table
    $("#train-table").append(
      $("<tr>")
          .append(
              $("<td>").text(train.name),
              $("<td>").text(train.destination),
              $("<td>").text(train.arrival),
              $("<td>").text(train.frequency),
              $("<td>").text(train.distance)
          )
  );

  })
})







// alert("testing");

  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyCnjieYcp6j8CO5zqe3PMgpbV-TsBjK2cM",
  //   authDomain: "traintracker-56f7d.firebaseapp.com",
  //   databaseURL: "https://traintracker-56f7d.firebaseio.com",
  //   projectId: "traintracker-56f7d",
  //   storageBucket: "traintracker-56f7d.appspot.com",
  //   messagingSenderId: "1039862681593"
  // };
  // firebase.initializeApp(config);

// creating variable to reference firebase database
  // var database = firebase.database();

  // var trains = [];

  // get and display current time using moment.js
// var currentTime = moment().format("h:mm A");
// console.log("Current Time 1: " + currentTime);

// adding a new train
// $("#addTrain").on("click", () => {
// event.preventDefault();
// Grab values from HTML input
  //   trainName = $('#trainNameId').val().trim();
  //   destination = $('#destinationId').val().trim(); 
  //   trainTime = $('#firstTrainTimeId').val().trim();
  //   frequency = $('#frequencyId').val().trim();

  //   console.log("Name: " + trainName);
  // console.log("Destination: " + destination);
  // console.log("Time: " + trainTime);
  // console.log("Frequency: " + frequency + ' ' + 'minutes');

  //  pushing data to firebase
//   database.ref().push({
//     trainName: trainName,
//     destination: destination,
//     trainTime: trainTime,
//     frequency: frequency,
//     timeAdded: firebase.database.ServerValue.TIMESTAMP
//   });

// });

// database.ref().on('child_added', (newchild)=> {
//   var trains = new train(newchild.val().trainName, newchild.val().destination, newchild.val().trainTime, newchild.val().frequency);
//   trains.push(train);


  // add to table
//   $("#train-data").append(
//       $("<tr>")
//           .append(
//               $("<td>").text(train.name),
//               $("<td>").text(train.destination),
//               $("<td>").text(train.trainTime),
//               $("<td>").text(train.frequency)
//           )
//   );
// });


//on click for the submit button
// $("#submit").on("click", function() {
    

  

   
  

  
//     $("input").val('');
//     return false;
// });

// reference to the database
// database.ref().on("child_added", function(childSnapshot) {
//   var trainName = childSnapshot.val().trainName;
//   var destination = childsnapshot.val().destination;
//   var trainTime = childsnapshot.val().trainTime;
//   var frequency = childSnapshot.val().frequency;

  // conversions for train times
//   var frequency = parseInt(frequency);
//   var currentTime = moment().format('h:mm A');
//   console.log("Current Time: " + moment().format('HH:mm'));
//   var dateConvert = moment(childSnapshot.val().trainTime, 'HH:mm').subtract(1, 'years');
//   console.log("Date Conversion: " + dateConvert);
//   var trainTime = moment(dateConvert).format('HH:mm');
//   console.log("First train Time : " + trainTime);
  
//   var tConverted = moment(trainTime, 'HH:mm').subtract(1, 'years');
//   var tDifference = moment().diff(moment(tConverted),  'minutes');
//   var tRemainder = tDifference % frequency;
//   console.log("Remainder: " + tRemainder);
//   var minutesRemain = frequency - tRemainder;
//   console.log("Min. remaining: " + minutesremain);
//   var nextArrival = moment().add(minutesRemain, 'minutes');
//   console.log("Next Train: " + moment(nextArrival).format('HH:mm A'));

//   // Update html with the train data obtained above

//   $('.timeCurrent').text("Current Time: " + currentTime + " (CST)");
//   $('#train-data').append(
//     "<tr><td id='trainNameDisplay'>" + childSnapshot.val().trainName+
//     "</td><td id='trainDestinationDisplay'>" + childSnapshot.val().destination +
//     "</td><td id='trainFrequencyDisplay'>" + 'Every ' + childSnapshot.val().frequency + ' min' +
//     "</td><td id='trainNextDisplay'>" + moment(nextArrival).format("h:mm A") +
//     "</td><td id='trainMinutesDisplay'>" + minutesRemain  + ' min' + "</td></tr>");

// },

// function(errorObject){
//   console.log("Read failed: " + errorObject.code)
// });



// $(document).ready(() => {



  //  Change the HTML to reflect
  //   $("#nameInput").text(snapshot.val().name);
  //   $("#rateInput").text(snapshot.val().rate);
  //   $("#dateInput").text(snapshot.val().startDate);
  //   $("#addPerson").text(snapshot.val().submitButton);
  //   $("#roleInput").text(snapshop.val().role);
  

  // $('.timeCurrent').text("Current Time: " + currentTime + " (CST)");
  