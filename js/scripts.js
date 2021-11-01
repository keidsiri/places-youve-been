//Business logic
function places (location , landmark, time, notes) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

let portland = new places("Portland", "Columbia River", "january, 2000", "it was fun");
let seattle = new places("Seattle", "SpaceNeedle", "september,2009", "It had a great view and fun");
let banff = new places("Banff, Canada", "Banff hotspring", "august,2019", "It was stunning ,had a great time");
let cancun = new places("Cancun,Mexico", "Cancun beach", "July,2021", "The white sand beach was amazing");

// UI logic
$(document).ready(function() {
  $("#place1").click(function() {
    $("#id1").empty();
    $("#id1").toggle();
    
    $("#id1").append("<li>" + portland.location + "</li>");
    $("#id1").append("<li>" + portland.landmark + "</li>");
    $("#id1").append("<li>" + portland.time + "</li>");
    $("#id1").append("<li>" + portland.notes + "</li>");
  });
  $("#place2").click(function() {
    $("#id2").empty();
    $("#id2").toggle();
    $("#id2").append("<li>" + seattle.location + "</li>");
    $("#id2").append("<li>" + seattle.landmark + "</li>");
    $("#id2").append("<li>" + seattle.time + "</li>");
    $("#id2").append("<li>" + seattle.notes + "</li>");
  });
  $("#place3").click(function() {
    $("#id3").empty();
    $("#id3").toggle();
    $("#id3").append("<li>" + banff.location + "</li>");
    $("#id3").append("<li>" + banff.landmark + "</li>");
    $("#id3").append("<li>" + banff.time + "</li>");
    $("#id3").append("<li>" + banff.notes + "</li>");
  });
  $("#place4").click(function() {
    $("#id4").empty();
    $("#id4").toggle();
    $("#id4").append("<li>" + cancun.location + "</li>");
    $("#id4").append("<li>" + cancun.landmark + "</li>");
    $("#id4").append("<li>" + cancun.time + "</li>");
    $("#id4").append("<li>" + cancun.notes + "</li>");
    
  });
});

