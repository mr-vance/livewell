// Function to send form data to WhatsApp
function sendFormData() {
    // Get form values
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var services = document.getElementById('services').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
  
    // Construct the WhatsApp message
    var message = "Name: " + name + "%0A";
    message += "Phone Number: " + number + "%0A";
    message += "Email: " + email + "%0A";
    message += "Services: " + services + "%0A";
    message += "Date: " + date + "%0A";
    message += "Time: " + time;
  
    // Generate the WhatsApp link
    var whatsappLink = "https://wa.me/27736259697?text=" + encodeURI(message);
  
    // Open WhatsApp in a new tab
    window.open(whatsappLink);
  }
  
  // Attach event listener to the form submit button
  var submitButton = document.querySelector('.booking-from button[type="submit"]');
  submitButton.addEventListener('click', sendFormData);
  