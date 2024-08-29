const emailInput = document.getElementById('email');
emailInput.addEventListener('input', function () {
    const email = emailInput.value;
    const feedback = document.getElementById('email-feedback');
    if (email.includes('@')) {
        feedback.textContent = 'Valid email';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Invalid email';
        feedback.style.color = 'red';
    }
});







const openModalButton = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');

openModalButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});


