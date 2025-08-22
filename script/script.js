'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('navbarSupportedContent');
  if (!menu || typeof bootstrap === 'undefined') return;

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () =>
      bootstrap.Collapse.getOrCreateInstance(menu).hide()
    );
  });
});
