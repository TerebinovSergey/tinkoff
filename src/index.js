import turnOnRippleAnimation from './scripts/ripple-animation.js';
import { saveTextContent, loadTextContent } from './scripts/cv-store.js';
import { saveViaHtml2pdf, saveAsHtml } from './scripts/save-cv.js';

window.addEventListener('unload', saveTextContent);

document.addEventListener('DOMContentLoaded', loadTextContent);

const saveBtn = document.querySelector('.save-btn');
if (saveBtn) saveBtn.addEventListener('click', saveViaHtml2pdf);

const printBtn = document.querySelector('.print-btn');
if (printBtn) {
  printBtn.addEventListener('click', () => setTimeout(() => window.print()));
}

const saveHtmlBtn = document.querySelector('.save-html-btn');
if (saveHtmlBtn) saveHtmlBtn.addEventListener('click', saveAsHtml);

turnOnRippleAnimation();
