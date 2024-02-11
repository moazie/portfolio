
document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.r1');
    const git = document.querySelector('.git');
    const lin = document.querySelector('.lin');
    const phone = document.querySelector('.phone');
    const email = document.querySelector('.email');
    let rotationAngle = 0;
    lin.classList.add("hidden")
    phone.classList.add("hidden")
    email.classList.add("hidden")

    // Listen for spacebar key press
    document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        // Rotate the image by 45 degrees
        rotationAngle += -60;
        image.style.transform = `rotate(${rotationAngle}deg)`;
    }
    if (event.key === 'a') {
        rotationAngle += 60;
        image.style.transform = `rotate(${rotationAngle}deg)`;
    }
    
    if (rotationAngle <= -360) {
        image.style.transform = `rotate(0deg)`;
        rotationAngle = 0; // Reset to 0
    }
    if (rotationAngle > 0) {
        image.style.transform = `rotate(0deg)`;
        rotationAngle = 0
    }

    if (Math.abs(rotationAngle) === 0) {
        // Show the image (remove any hidden class)
        git.classList.remove('hidden');
        git.classList.remove('hiddenlink');
    } else {
        // Hide the image (add a hidden class)
        git.classList.add('hidden');
        git.classList.add('hiddenlink');
    }
    if (rotationAngle === -60) {
        // Show the image (remove any h"idden class)
        lin.classList.remove('hidden');
        lin.classList.remove('hiddenlink');
    } else {
        // Hide the image (add a hidden class)
        lin.classList.add('hidden');
        lin.classList.add('hiddenlink');
    }
    if (rotationAngle === -120) {
        // Show the image (remove any h"idden class)
        phone.classList.remove('hidden');
        phone.classList.remove('hiddenlink');
    } else {
        // Hide the image (add a hidden class)
        phone.classList.add('hidden');
        phone.classList.add('hiddenlink');
    }
    if (rotationAngle === -300) {
        // Show the image (remove any h"idden class)
        email.classList.remove('hidden');
        email.classList.remove('hiddenlink');
    } else {
        // Hide the image (add a hidden class)
        email.classList.add('hidden');
        email.classList.add('hiddenlink');
    }
});
});
