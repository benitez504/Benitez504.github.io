
// Smooth scroll for in-page links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

// Basic required-field validation for the quote form
const form = document.querySelector('form.quote-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const fields = form.querySelectorAll('[required]');
    for (const f of fields) {
      if (!f.value.trim()) {
        e.preventDefault();
        alert('Please fill in the required fields.');
        f.focus();
        break;
      }
    }
  });
}
