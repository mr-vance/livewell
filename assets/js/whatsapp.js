// Retrieve the form element
const form = document.querySelector('.widget form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Construct the WhatsApp message with the form data
  const whatsappMessage = `**A client from the website**%0aName: ${name}%0aPhone: ${phone}%0aMessage: ${message}`;

  // Create the WhatsApp URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=27736259697&text=${whatsappMessage}`;

  // Open the WhatsApp URL in a new window or tab
  window.open(whatsappUrl, '_blank');
});
