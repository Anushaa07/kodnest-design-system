/**
 * Job Notification Tracker — Navigation & Hamburger
 */

(function () {
  const hamburger = document.querySelector('.jt-nav__hamburger');
  const links = document.querySelector('.jt-nav__links');

  if (hamburger && links) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-open');
      links.classList.toggle('is-open');
    });

    // Close menu when clicking a link (mobile)
    links.querySelectorAll('.jt-nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        links.classList.remove('is-open');
      });
    });
  }

  // Set active link based on current path
  var path = window.location.pathname.replace(/\/$/, '') || '';
  var segment = path.split('/').filter(Boolean)[0];
  if (!segment || segment === 'index.html') segment = 'dashboard';

  document.querySelectorAll('.jt-nav__link[data-page]').forEach(function (link) {
    if (link.getAttribute('data-page') === segment) {
      link.classList.add('jt-nav__link--active');
    }
  });
})();
