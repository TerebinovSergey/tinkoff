const KEY_CV = 'resume';

export function saveTextContent() {
  const elements = document.querySelectorAll('[data-save-key]');
  const resume = {};
  elements.forEach((element) => {
    resume[element.dataset.saveKey] =
      element.localName === 'input'
        ? element.value.trim()
        : element.textContent.trim();
  });

  localStorage.setItem(KEY_CV, JSON.stringify(resume));
}

export function loadTextContent() {
  const data = localStorage.getItem(KEY_CV);
  if (!data) return;

  let resume;
  try {
    resume = JSON.parse(data);
  } catch (error) {
    console.error('Error while parsing data:', error);
    return;
  }

  for (const key in resume) {
    const element = document.querySelector(`[data-save-key="${key}"]`);
    if (!element) return;
    if (element.localName === 'input') {
      element.value = resume[key];
    } else {
      element.textContent = resume[key];
    }
  }
}
