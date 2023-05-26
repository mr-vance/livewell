// Function to send form data to email
function sendFormData(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.querySelector('.contact-form textarea').value;
  
    // Create the email body
    var emailBody = "Name: " + name + "\n";
    emailBody += "Email: " + email + "\n";
    emailBody += "Phone Number: " + phone + "\n";
    emailBody += "Message: " + message;
  
    // Send email using a service or library of your choice
    // Replace the email address and other necessary details
    var emailServiceURL = "https://livewellaesthetics.co.za";
    var emailData = {
      to: "info@livewellaesthetics.co.za",
      subject: "New Contact Form Submission",
      body: emailBody
    };
  
    // Make an API request to send the email
    fetch(emailServiceURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })
    .then(function(response) {
      if (response.ok) {
        // Show success message and clear the form
        var form = document.querySelector('.contact-form');
        var successMessage = document.createElement('p');
        successMessage.textContent = "Message sent successfully!";
        form.parentNode.replaceChild(successMessage, form);
      } else {
        // Handle error if the email was not sent successfully
        console.error('Error sending email.');
      }
    })
    .catch(function(error) {
      // Handle error if the API request fails
      console.error('Error:', error);
    });
  }
  
  // Attach event listener to the form submit button
  var submitButton = document.querySelector('.contact-form button[type="submit"]');
  submitButton.addEventListener('click', sendFormData);
  