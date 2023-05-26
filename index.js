document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  let selectedDate = document.getElementById("date").value;
  // Add the moment.js
  let momentAge = moment(selectedDate);
  let calculatedAge = momentAge.fromNow();
  document.getElementById("age").innerHTML = calculatedAge;
});
