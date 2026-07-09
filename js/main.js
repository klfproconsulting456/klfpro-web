// mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const mobileToggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('navLinks');
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => nav.classList.toggle('show'));
  }

  // phone check (demo)
  const phoneForm = document.getElementById('phoneForm');
  if (phoneForm) {
    phoneForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = document.getElementById('phone').value.trim();
      if (!/^\d{10}$/.test(phone)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }
      // simulate check — in real app you'd call API
      alert('Thanks! We will check eligibility for +' + phone);
    });
  }

  // smooth open details fallback
  document.querySelectorAll('details').forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) d.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });
});
