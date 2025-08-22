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

    // Dynamic age (birthday: 28 Sept 2004)
    const ageEl = document.getElementById('age');
    if (ageEl) {
        const birth = new Date(2004, 8, 28); // months are 0-based (8 = Sept)
        const setAge = () => {
            const now = new Date();
            let age = now.getFullYear() - birth.getFullYear();
            const m = now.getMonth() - birth.getMonth();
            if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
            ageEl.textContent = String(age);
        };
        setAge();
    }
});
