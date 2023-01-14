const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})




// JavaScript code for generating random notifications
function generateRandomNotification() {
	// Create an array of possible notifications
	var notifications = [
	  "Welcome to Academic department Online services",
	  "Thanks for visiting our site.",
	  "Mary christmass.",
	  "Happy New year",
	  "Keep checking the website  for updates.",
	];
  
	// Generate a random number between 0 and the length of the array
	var randomIndex = Math.floor(Math.random() * notifications.length);
  
	// Use the random number to select a notification from the array
	var notification = notifications[randomIndex];
  
	// Display the notification using a "toast" style notification
	var notificationElement = document.createElement("div");
	notificationElement.classList.add("toast");
	notificationElement.innerText = notification;
	document.body.appendChild(notificationElement);
  
	// Use a CSS transition to fade the notification in and out
	notificationElement.classList.add("toast-enter");
	setTimeout(function() {
	  notificationElement.classList.remove("toast-enter");
	  notificationElement.classList.add("toast-exit");
	  setTimeout(function() {
		notificationElement.remove();
	  }, 4000);
	}, 5000);
  }
  
  // Generate a random notification every 5 seconds
  setInterval(generateRandomNotification, 28000);
  //////////////////////////////////////////////////////////////////////////////////////////
