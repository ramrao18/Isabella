document.getElementById('hireMeForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const email = document.getElementById('clientEmail').value;
    const message = document.getElementById('clientMessage').value;
    const developer='Husnain';
    const reply_to='pramakrishnadev@gmail.com';
    const serviceid='service_ow5p0mc';
    const templateid='template_qszmnhm';
    // EmailJS parameters
    const templateParams = {
        client_name: name,
        client_phone: phone,
        client_email: email,
        message: message,
        to_developer:developer,
        reply_to: reply_to
        
    };

    // Send the email via EmailJS
    emailjs
        .send(serviceid, templateid, templateParams)
        .then(
            function (response) {
                console.log("SUCCESS!", response.status, response.text);
                alert("Your request has been sent successfully!");

                // Reset the form
                document.getElementById('hireMeForm').reset();

                // Close the modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('hireMeModal'));
                modal.hide();
            },
            function (error) {
                console.log("FAILED...", error);
                alert("Failed to send your request. Please try again later.");
            }
        );
});
