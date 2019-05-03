$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyB_P7ESlumLbYuFJryACvJBKkIpzRT6rkU",
    authDomain: "daniel-database.firebaseapp.com",
    databaseURL: "https://daniel-database.firebaseio.com",
    projectId: "daniel-database",
    storageBucket: "daniel-database.appspot.com",
    messagingSenderId: "772832539382"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  $(document).on("click", "#submit-button", function () {
    var fromStreet = $("#a-street").val();
    var fromCity = $("#a-city").val();
    var fromState = $("#a-state").val();
    var fromZipCode = $("#a-zip").val();
    var toStreet = $("#b-street").val();
    var toCity = $("#b-city").val();
    var toState = $("#b-state").val();
    var toZipCode = $("#b-zip").val();
    var fromAddressString = fromStreet + " " + fromCity + " " + fromState + " " + fromZipCode;
    var toAddressString = toStreet + " " + toCity + " " + toState + " " + toZipCode;

    if (fromCity == "" || toCity == "") {
      alert("Please be sure to add a city");
    } else {
      getWeather(fromCity, toCity);
      runFirebase(database);
      getLatAndLongForToAndFrom(fromAddressString, toAddressString);
    }
  });
});