import { SEARCH_INPUT, runSearch } from './search.js';
import { allData } from './data.js';

const VOICE_SEARCH_BUTTON = document.querySelector('.search__voice-icon');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;

export function voiceSearch() {
  recognition = new SpeechRecognition();

  VOICE_SEARCH_BUTTON.addEventListener('click', () => {
    recognition.lang = allData.currentLanguage === 'en' ? 'en-EN' : 'ru-RU';
    recognition.start();
    VOICE_SEARCH_BUTTON.classList.add('search__voice-icon--active');
  });

  recognition.onresult = (event) => {
    SEARCH_INPUT.value = event.results[0][0].transcript;
    runSearch();
    VOICE_SEARCH_BUTTON.classList.remove('search__voice-icon--active');
  };

  recognition.onerror = () => {
    VOICE_SEARCH_BUTTON.classList.remove('search__voice-icon--active');
  };
}
