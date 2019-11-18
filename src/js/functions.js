const button = document.querySelectorAll('.toggleFlip__button');

for (const btn of button) {
    btn.addEventListener('click', function (event) {
        event.preventDefault();
        this.nextElementSibling.classList.toggle('flipped');
        this.classList.toggle('active');
    })
}