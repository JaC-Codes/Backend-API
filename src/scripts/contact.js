function sendEmail() {
    Email.send({
      SecureToken: "3078f2f6-ed04-4565-a20b-4ec3d33468e0",
      To : '',
      From : document.getElementById("email").value,
      Subject : "Contact Us Form",
      Body : "Name: " + document.getElementById("name").value
       + "<br> Email: " + document.getElementById("email").value 
       + "<br> Phone Number: " + document.getElementById("phone-number").value
       + "<br> Address: " + document.getElementById("address").value
       + "<br> Subject: " + document.getElementById("subject").value
      + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Email Sent!")
    );
}
