function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    // Perform any client-side validation here
    
    var emailData = {
      name: name,
      email: email,
      message: message
    };
    
    // Make an HTTP request to your server-side script
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send-email.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert("Email sent successfully!");
          // Optionally, reset the form fields after successful sending
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        } else {
          alert("Failed to send email.");
        }
      }
    };
    xhr.send(JSON.stringify(emailData));
  }
  