let timerInterval;
let remainingTime = 0; // Track remaining time globally

// Generate a random email address
document.getElementById('generate-email').addEventListener('click', function () {
    const randomString = Math.random().toString(36).substring(2, 10);
    const tempEmail = `${randomString}@tempmail.com`;
    document.getElementById('generated-email').textContent = tempEmail;
    startTimer(600); // 10 minutes in seconds
});

// Timer logic
function startTimer(duration) {
    // Clear existing timer if it's running
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    remainingTime = duration; // Set remaining time
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Generate a new email or extend time.");
        }
    }, 1000);
}

// Update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('timer').textContent = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Extend time with ad
document.getElementById('extend-time').addEventListener('click', function () {
    document.getElementById('ad-modal').style.display = 'block';

    // Simulate ad completion (replace with real ad integration)
    setTimeout(() => {
        document.getElementById('ad-modal').style.display = 'none';
        remainingTime += 600; // Add 10 minutes (600 seconds) to the remaining time
        startTimer(remainingTime); // Restart the timer with the updated time
    }, 5000); // Simulate 5-second ad
});

// Close modal
document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('ad-modal').style.display = 'none';
});