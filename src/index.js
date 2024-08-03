import turnOnRippleAnimation from './scripts/ripple-animation.js';
import { saveTextContent, loadTextContent } from './scripts/cvStore.js';

window.addEventListener('unload', saveTextContent);

document.addEventListener('DOMContentLoaded', loadTextContent);

document.querySelector('.save-button').addEventListener('click', () => {
  setTimeout(() => window.print());
});

turnOnRippleAnimation();
