'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Collapse navbar after click on small devices
    const menu = document.getElementById('navbarSupportedContent');
    if (menu) {
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', () => {
                if (typeof bootstrap !== 'undefined') {
                    bootstrap.Collapse.getOrCreateInstance(menu).hide();
                }
            });
        });
    }
});
