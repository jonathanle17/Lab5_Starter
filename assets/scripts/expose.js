// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // Select DOM elements
  const hornSelect = document.getElementById('horn-select');
  const mainImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  // Initialize JSConfetti for the party horn effect
  const jsConfetti = new JSConfetti();

  // 1. Horn Selection functionality
  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;

    // Update image and audio source based on selection
    if (selectedHorn === 'air-horn') {
      mainImage.src = 'assets/images/air-horn.svg';
      audioElement.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      mainImage.src = 'assets/images/car-horn.svg';
      audioElement.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      mainImage.src = 'assets/images/party-horn.svg';
      audioElement.src = 'assets/audio/party-horn.mp3';
    }
  });

  // 2. Volume Control functionality
  volumeSlider.addEventListener('input', (event) => {
    const volumeValue = event.target.value;
    
    // Set audio volume (scale 0.0 to 1.0)
    audioElement.volume = volumeValue / 100;

    // Update volume level icon based on range
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volumeValue >= 1 && volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volumeValue >= 33 && volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });

  // 3. Play Sound functionality
  playButton.addEventListener('click', () => {
    // Play the selected horn sound
    audioElement.play();

    // Trigger confetti if Party Horn is selected
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}