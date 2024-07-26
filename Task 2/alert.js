function displayGreeting() {
    // Get the current hour
    var currentHour = new Date().getHours();
    var greeting;

    // Determine the greeting based on the current hour
    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    // Display the greeting in an alert box
    alert(greeting);

    // Display the current time on the webpage
    var currentTime = new Date().toLocaleTimeString();
    document.getElementById("currentTime").innerText = "Current Time: " + currentTime;
}