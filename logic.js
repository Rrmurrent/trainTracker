alert("testing");


$(document).ready(() => {
    $("#addperson").on("click", () => {
        $("#people").append(
            $("<tr>")
                .append(
                    $("<td>").text("name"),
                    $("<td>").text("salary"),
                    $("<td>").text("starting date"),
                    $("<td>").text("lifetime earnings")
                )
        );
    });
});


$("#add-user").on("click", function(event) {
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    // Don't forget to provide initial data to your Firebase database.
    name = $("#nameInput").val().trim();
    rate= $("#rateInput").val().trim();
    startDate = $("#dateInput").val().trim();
    submitButton = $("#addperson").val().trim();

    database.ref().push({
      name: name,
      rate: rate,
      startDate: startDate,
      role: role,
      
    });

  });

  database.ref().on("childAdded", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val().name);
    console.log(snapshot.val().rate);
    console.log(snapshot.val().starDate);
    console.log(snapshot.val().submitButton);
    console.log(snapshot.val().role);

    // Change the HTML to reflect
    $("#nameInput").text(snapshot.val().name);
    $("#rateInput").text(snapshot.val().rate);
    $("#dateInput").text(snapshot.val().startDate);
    $("#addPerson").text(snapshot.val().submitButton);
    $("#roleInput").text(snapshop.val().role);
  });

  $('.timeCurrent').text("Current Time: " + currentTime + " (CST)");
  