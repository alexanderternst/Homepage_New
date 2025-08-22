'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('navbarSupportedContent');
  if (!menu) return;
  if (typeof bootstrap === 'undefined') {
    console.warn('Bootstrap is not loaded. Navigation collapse functionality will not work.');
    return;
  }
  
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () =>
      bootstrap.Collapse.getOrCreateInstance(menu).hide()
    );
  });
});
