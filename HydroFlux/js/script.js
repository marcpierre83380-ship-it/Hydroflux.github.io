const cards = document.querySelectorAll('.card');

cards.forEach(c => {
  c.addEventListener('mouseover', () => {
    c.style.transform = 'translateY(-5px)';
  });
  c.addEventListener('mouseout', () => {
    c.style.transform = '';
  });
});

const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.setAttribute('aria-label', 'Toggle dark mode');
themeToggle.innerHTML = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm10-6a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm11.07-6.07a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 0 1-1.41-1.41l1.42-1.42a1 1 0 0 1 1.41 0zM7.35 16.66a1 1 0 0 1 0 1.41l-1.42 1.42a1 1 0 0 1-1.41-1.41l1.42-1.42a1 1 0 0 1 1.41 0zm11.07 1.41a1 1 0 0 1-1.41 0l-1.42-1.42a1 1 0 0 1 1.41-1.41l1.42 1.42a1 1 0 0 1 0 1.41zM8.77 7.05a1 1 0 0 1-1.41 0L5.95 5.63A1 1 0 0 1 7.36 4.22l1.41 1.41a1 1 0 0 1 0 1.42zM12 6a6 6 0 1 1 0 12A6 6 0 0 1 12 6z"/>
  </svg>
`;

document.body.appendChild(themeToggle);

const updateTheme = value => {
  document.body.classList.toggle('dark-theme', value);
  localStorage.setItem('darkTheme', value ? '1' : '0');
};

const storedTheme = localStorage.getItem('darkTheme');
if (storedTheme === '1') {
  updateTheme(true);
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('darkTheme', isDark ? '1' : '0');
});
