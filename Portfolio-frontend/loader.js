// Loading screen functionality
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const loaderBar = document.querySelector('.loader-bar');
    const loaderTagline = document.querySelector('.loader-tagline');
    
    // Simulate loading progress
    let progress = 0;
    const loadingSteps = [
        'Initializing...',
        'Loading assets...',
        'Preparing portfolio...',
        'Almost ready...',
        'Welcome!'
    ];
    
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15 + 5; // Random progress between 5-20%
        
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            // Update loader bar
            loaderBar.style.width = progress + '%';
            
            // Final step
            setTimeout(() => {
                // Hide loader with fade out effect
                loader.style.opacity = '0';
                loader.style.transform = 'scale(0.95)';
                
                setTimeout(() => {
                    loader.style.display = 'none';
                    
                    // Show main content with fade in effect
                    mainContent.style.display = 'block';
                    
                    // Trigger fade in animation
                    setTimeout(() => {
                        mainContent.style.opacity = '1';
                        mainContent.style.transform = 'translateY(0)';
                    }, 100);
                }, 500);
            }, 500);
        } else {
            // Update loader bar
            loaderBar.style.width = progress + '%';
            
            // Update tagline text
            const stepIndex = Math.floor((progress / 100) * loadingSteps.length);
            if (stepIndex < loadingSteps.length) {
                loaderTagline.textContent = loadingSteps[stepIndex];
            }
        }
    }, 200);
}); 