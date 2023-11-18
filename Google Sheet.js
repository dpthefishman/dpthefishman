const scriptURL = 'https://script.google.com/macros/s/AKfycbxYOTdM9UjzDjgilXPmiRwVdiVyztb2LwumMsGBVrmLAUvqCLedoArfceUK4say87zXIw/exechttps://script.google.com/macros/s/AKfycby9YbmALoMNniraJsJ9se8eSnWsem9vfVoKoTCPGcQNbPPG8z9InHq7DqO6DUNma1LoMw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})