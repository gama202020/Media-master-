// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Input Validation
const platformCards = document.querySelectorAll('.platform-card');
const videoUrlInput = document.getElementById('video-url');
const downloadBtn = document.getElementById('download-btn');
const errorMessage = document.getElementById('error-message');
const downloadMessage = document.getElementById('download-message');

if (platformCards.length > 0 && videoUrlInput && downloadBtn && errorMessage && downloadMessage) {
  platformCards.forEach(card => {
    card.addEventListener('click', () => {
      platformCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const platform = card.getAttribute('data-platform');
      videoUrlInput.placeholder = `Paste ${platform.charAt(0).toUpperCase() + platform.slice(1)} link here...`;
      videoUrlInput.disabled = false;
    });
  });

  videoUrlInput.addEventListener('input', () => {
    const url = videoUrlInput.value;
    if (url && isValidSocialMediaUrl(url)) {
      downloadBtn.disabled = false;
      errorMessage.textContent = '';
    } else {
      downloadBtn.disabled = true;
      errorMessage.textContent = 'Please enter a valid URL.';
    }
  });

  downloadBtn.addEventListener('click', () => {
    downloadMessage.textContent = 'Your video is downloading...';
    setTimeout(() => {
      downloadMessage.textContent = '';
    }, 3000);
  });

  function isValidSocialMediaUrl(url) {
    const patterns = {
      tiktok: /https?:\/\/(www\.)?tiktok\.com\/.+/,
      instagram: /https?:\/\/(www\.)?instagram\.com\/.+/,
      facebook: /https?:\/\/(www\.)?facebook\.com\/.+/,
      youtube: /https?:\/\/(www\.)?youtube\.com\/.+/,
    };
    const activePlatform = document.querySelector('.platform-card.active').getAttribute('data-platform');
    return patterns[activePlatform].test(url);
  }
}

// Form Submission
const reportForm = document.getElementById('report-form');
const formSuccess = document.getElementById('form-success');

if (reportForm && formSuccess) {
  reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formSuccess.textContent = 'Your message has been sent successfully!';
    reportForm.reset();
  });
}