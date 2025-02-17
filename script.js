// Generate a random email address
document.getElementById('generate-email').addEventListener('click', function() {
    const randomString = Math.random().toString(36).substring(2, 10);
    const tempEmail = `${randomString}@tempmail.com`;
    document.getElementById('generated-email').textContent = tempEmail;
    startTimer(600); // 10 minutes in seconds
});

// Timer logic
let timerInterval;
function startTimer(duration) {
    let timer = duration;
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        document.getElementById('timer').textContent = `Time Left: ${minutes}:${seconds.toString().padStart(2, '0')}`;
        if (--timer < 0) {
            clearInterval(timerInterval);
            alert("Time's up! Generate a new email or extend time.");
        }
    }, 1000);
}

// Extend time with ad
document.getElementById('extend-time').addEventListener('click', function() {
    document.getElementById('ad-modal').style.display = 'block';
    // Simulate ad completion (replace with real ad integration)
    setTimeout(() => {
        document.getElementById('ad-modal').style.display = 'none';
        startTimer(600); // Add 10 more minutes
    }, 5000); // Simulate 5-second ad
});

// Close modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('ad-modal').style.display = 'none';
});