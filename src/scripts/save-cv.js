export function saveViaHtml2pdf() {
  const header = document.querySelector('.header');
  const main = document.querySelector('.main');
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper-save-pdf');
  wrapper.appendChild(header.cloneNode(true));
  wrapper.appendChild(main.cloneNode(true));

  // eslint-disable-next-line no-undef
  html2pdf().from(wrapper).save('resume.pdf');
}

export function saveAsHtml() {
  const footer = document.querySelector('.footer');
  footer.style.display = 'none';
  const blob = new Blob([document.body.outerHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'resume.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  footer.style.display = 'block';
}
