// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis; // Access the SpeechSynthesis interface
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('img');

  let voices = [];

  /**
   * Populates the "Select Voice" dropdown with all available voices
   * provided by the browser.
   */
  function populateVoiceList() {
    voices = synth.getVoices();
    
    // Clear existing options except the default first one
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  // Populate voices on load. Note: voices are loaded asynchronously in many browsers,
  // so the 'voiceschanged' event is used to ensure they are available.
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  /**
   * When the "Press to Talk" button is clicked, synthesize the text
   * and swap the face image while speaking.
   */
  talkButton.addEventListener('click', () => {
    if (textArea.value.trim() === '') return; // Don't speak if empty

    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    
    // Find and set the selected voice object
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    // Change face to "open mouth" when speech starts
    utterThis.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Open mouth face';
    };

    // Return face to "smiling" when speech ends
    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.speak(utterThis);
  });
}