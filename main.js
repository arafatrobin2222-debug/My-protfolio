

document.getElementById('yr').textContent = new Date().getFullYear();




var root = document.documentElement;
var themeButton = document.getElementById('tt');

themeButton.addEventListener('click', function () {
  // Find out which theme is showing right now
  var saved = root.getAttribute('data-theme');
  var isDark = saved
    ? saved === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Switch to the opposite theme
  root.setAttribute('data-theme', isDark ? 'light' : 'dark');
});
