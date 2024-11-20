// Simple form validation for contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Simple validation logic
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    if (name === '' || email === '') {
      alert('Please fill out both fields.');
    } else {
      alert('Thank you for your message!');
      // Optionally, reset the form after submission
      document.getElementById('contact-form').reset();
    }
  });
  