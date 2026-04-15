const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('nav-open');
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = 'Please complete all fields before sending your message.';
      formStatus.classList.add('status-error');
      formStatus.classList.remove('status-success');
      return;
    }

    formStatus.textContent = 'Thank you! Your message has been received. We will follow up shortly.';
    formStatus.classList.add('status-success');
    formStatus.classList.remove('status-error');
    form.reset();
  });
}

const imagePopup = document.getElementById('imagePopup');
const popupClose = document.getElementById('popupClose');
const popupOpenBtn = document.querySelector('.popup-open-btn');

const openImagePopup = () => {
  if (!imagePopup) return;
  imagePopup.classList.add('active');
  imagePopup.setAttribute('aria-hidden', 'false');
};

const closeImagePopup = () => {
  if (!imagePopup) return;
  imagePopup.classList.remove('active');
  imagePopup.setAttribute('aria-hidden', 'true');
};

if (popupOpenBtn) {
  popupOpenBtn.addEventListener('click', openImagePopup);
}

if (popupClose) {
  popupClose.addEventListener('click', closeImagePopup);
}

if (imagePopup) {
  imagePopup.addEventListener('click', (event) => {
    if (event.target === imagePopup) {
      closeImagePopup();
    }
  });
}

window.addEventListener('load', () => {
  setTimeout(openImagePopup, 1000);
});
