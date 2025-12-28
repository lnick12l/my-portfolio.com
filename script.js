(function() {
    emailjs.init("uRU5MYoEtZlg6CWyv");
})();

window.onload = function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const templateParams = {
            discord: document.getElementById("discord").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        emailjs.send("service_ob1lcwn", "template_elew7la", templateParams)
            .then(function(response) {
                alert("Email sent successfully!");
                console.log("SUCCESS!", response.status, response.text);
            } , function(error) {
                alert("Failed to send email. Check console for details.");
                console.error("FAILED...", error);
            });
    });
};
