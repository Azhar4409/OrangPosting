document.getElementById('email-button').addEventListener('click', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var emailBody = `Hello Haris,
My Name: ${name}
Email: ${email}
Subject : ${subject}
Message: ${message}`;

    var mailtoLink = `mailto:akhmedharrys752@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.open(mailtoLink, '_blank');
});
