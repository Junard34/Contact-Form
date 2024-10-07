(function () {
  emailjs.init("m0idUXQmhfoex9jzP");
  console.log("EmailJS initialized");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    emailjs.sendForm("service_z70mi7n", "template_b9pl82b", this).then(
      function () {
        console.log("Email sent successfully");
        alert("Message Sent Successfully!");
      },
      function (error) {
        console.error("Error sending email:", error);
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });
