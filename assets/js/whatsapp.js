// Retrieve the form element
const form = document.querySelector('.booking-from');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const number = document.getElementById('number').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const service = document.getElementById('service').value;
  const time = document.getElementById('time').value;
  const date = document.getElementById('date').value;

  // Construct the WhatsApp message with the form data
  const whatsappMessage = `**A client from the website**%0aName: ${name}%0aPhone: ${phone}%0aMessage: ${message}%0aService (s): ${service}%0aContact: ${number}%0aEmail: ${email}%0aDate: ${date}%0aTime: ${time}`;

  // Create the WhatsApp URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=27710095644&text=${whatsappMessage}`;

  // Open the WhatsApp URL in a new window or tab
  window.open(whatsappUrl, '_blank');
});