// Select the button and container
const toastBtn = document.getElementById('toastBtn');
const toastContainer = document.getElementById('toast-container');

// Array of funny messages
const messages = [
    "Crunchy! 🍞",
    "Perfectly toasted.",
    "Butter side up!",
    "Jam added.",
    "Don't burn it!"
];

toastBtn.addEventListener('click', () => {
    createToast();
});

function createToast() {
    // Create element
    const toast = document.createElement('div');
    toast.classList.add('toast');
    
    // Pick a random message
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    toast.innerText = randomMsg;
    
    // Add to container
    toastContainer.appendChild(toast);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
