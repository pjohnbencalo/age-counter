// Used luxon

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  // Add the luxon.js
  const DateTime = luxon.DateTime;
  let selectedDate = DateTime.fromISO(document.getElementById("date").value);
  const now = DateTime.now();
  const calculatedAge = selectedDate.toRelative({ base: now });
  document.getElementById("age").innerHTML = calculatedAge;
});
