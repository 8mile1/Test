function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var robotCheck = document.getElementById("robotCheck");

  // Validate name
  if (name.trim() === "") {
    alert("Please enter your name");
    return false;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  // Validate message
  if (message.trim() === "") {
    alert("Please enter a message");
    return false;
  }

  if (!robotCheck.checked) {
    alert("Please confirm that you're not a robot");
    return false;
  }


  // All validation passed, submit the form
  return true;
}


function submitForm() {
  // Get the form element
  var form = document.getElementById("myForm");

  // Submit the form
  form.submit();
}

function openImageViewer(image) {
  var imageViewer = document.getElementById("imageViewer");
  var imageView = document.getElementById("imageView");

  imageView.src = image.src;
  imageViewer.style.display = "block";
}


  // Zoom in/out on the image when clicked
  document.getElementById("imageView").onclick = function() {
    this.classList.toggle("zoomed");
  };
// Close the image viewer when the overlay is clicked
document.getElementById("imageViewer").onclick = function() {
  this.style.display = "none";
};