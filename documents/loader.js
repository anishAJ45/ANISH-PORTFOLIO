window.addEventListener('DOMContentLoaded', function() {
    const text = "JAIANISH";
    const glitchSymbols = "#$%@!&";
    const glitchElement = document.getElementById('glitch-loader');
    const revealDelay = 60; // ms per character
    const flickerTimes = 8; // how many flickers per character

    let revealed = Array(text.length).fill(false);
    let display = Array(text.length).fill('');
    let currentChar = 0;

    function flickerChar(idx, flickerCount) {
        if (flickerCount > 0) {
            // Show random glitch symbol
            display[idx] = glitchSymbols[Math.floor(Math.random() * glitchSymbols.length)];
            glitchElement.textContent = display.join('');
            setTimeout(() => flickerChar(idx, flickerCount - 1), revealDelay / flickerTimes);
        } else {
            // Reveal actual character
            display[idx] = text[idx];
            revealed[idx] = true;
            glitchElement.textContent = display.join('');
            currentChar++;
            if (currentChar < text.length) {
                setTimeout(() => flickerChar(currentChar, flickerTimes), revealDelay);
            } else {
                // All revealed, wait then hide loader
                setTimeout(() => {
                    document.getElementById('loader').classList.add('hide');
                    document.getElementById('main-content').style.display = 'block';
                }, 700);
            }
        }
    }

    // Start glitch animation
    setTimeout(() => flickerChar(0, flickerTimes), 400);
});