function setGreeting() {
    const now = new Date();
    const hour = now.getHours();
  
    let greeting;
  
    if (hour >= 5 && hour < 12) {
      greeting = "Good morning☀️";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good afternoon🌤️";
    } else {
      greeting = "Good evening🌙";
    }
  
    document.getElementById("greeting").textContent = greeting;
  }
  
  // Call the function to set the initial greeting when the DOM is loaded
  document.addEventListener("DOMContentLoaded", setGreeting);
  