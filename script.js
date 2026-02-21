let poppedBalloons = 0;

// Screen 1: Password Logic
function checkPassword() {
    const input = document.getElementById("passwordBox").value.trim().toLowerCase();
    
    if (input === "shivani thakur") {
        slideScreen(1, 2);
        setTimeout(startCountdown, 600); // Wait for slide animation to finish
    } else {
        alert("retry karo 😒\nHint: 2 words are there with space between them");
    }
}

// Screen Transition Logic
function slideScreen(currentId, nextId) {
    const currentScreen = document.getElementById(`screen${currentId}`);
    const nextScreen = document.getElementById(`screen${nextId}`);

    currentScreen.classList.add("slide-out-left");
    
    nextScreen.classList.add("slide-in-right");
    nextScreen.classList.remove("hidden");
    
    // Trigger CSS reflow to ensure slide happens
    void nextScreen.offsetWidth; 
    
    nextScreen.classList.remove("slide-in-right");
    nextScreen.classList.add("active");
    nextScreen.classList.add("slide-in-active");

    setTimeout(() => {
        currentScreen.classList.remove("active", "slide-out-left");
        
        // Trigger specific logic based on screen arrived at
        if(nextId === 5) triggerTypewriter();
        if(nextId === 6) showFinalText();
    }, 500);
}

// Screen 2: Cake & Countdown Logic
function startCountdown() {
    const countdownText = document.getElementById("countdownText");
    const cakeSection = document.getElementById("cakeSection");
    
    countdownText.classList.remove("hidden");
    let count = 3;
    
    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownText.innerText = count;
        } else {
            clearInterval(interval);
            countdownText.classList.add("hidden");
            cakeSection.classList.remove("hidden");
        }
    }, 1000);
}

function decorateCake() {
    document.getElementById("partyDecor").classList.remove("hidden");
    document.getElementById("decorateHint").classList.add("hidden");
    document.getElementById("knife").classList.remove("hidden");
    // Swap to a cake with a lit candle
    document.getElementById("cakeGraphic").innerText = "🎂✨"; 
}

function cutCake() {
    document.getElementById("bdayMessage").classList.remove("hidden");
    document.getElementById("arrowTo3").classList.remove("hidden");
}

// Screen 3: Balloon Logic
function burstBalloon(element) {
    element.style.visibility = "hidden"; // Hide balloon visually
    poppedBalloons++;
    
    if (poppedBalloons === 4) {
        document.getElementById("arrowTo4").classList.remove("hidden");
    }
}

// Screen 4: Music and Photo Logic
function playMusicAndShowPhoto() {
    const audio = document.getElementById("bubuuSong");
    audio.play(); // Starts the song
    
    document.getElementById("playBtn").classList.add("hidden");
    document.getElementById("photoSection").classList.remove("hidden");
}

// Screen 5: Typewriter Logic
function triggerTypewriter() {
    const textElement = document.getElementById("typewriterText");
    const text = textElement.innerText; // Get the text you put in the HTML
    textElement.innerText = ""; // Clear it
    
    let i = 0;
    // Calculate speed so it finishes in exactly 4 seconds (4000ms)
    const speed = 4000 / text.length; 

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Once typing is done, show the arrow
            document.getElementById("arrowTo6").classList.remove("hidden");
        }
    }
    typeWriter();
}

// Screen 6: Final Message Logic
function showFinalText() {
    const video = document.getElementById("finalVideo");
    video.play();
    
    // Show the thank you message after 2 seconds
    setTimeout(() => {
        document.getElementById("finalText").classList.remove("hidden");
    }, 2000);
}
