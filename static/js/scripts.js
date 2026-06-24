(() => {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-links');

    if (!toggle || !menu) {
        return;
    }

    const setMenuOpen = (open, returnFocus = false) => {
        toggle.setAttribute('aria-expanded', String(open));
        menu.classList.toggle('is-open', open);

        if (!open && returnFocus) {
            toggle.focus();
        }
    };

    toggle.addEventListener('click', () => {
        setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            setMenuOpen(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false, true);
        }
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.site-nav')) {
            setMenuOpen(false);
        }
    });

    const desktopQuery = window.matchMedia('(min-width: 761px)');
    const resetForDesktop = (event) => {
        if (event.matches) {
            setMenuOpen(false);
        }
    };

    if (desktopQuery.addEventListener) {
        desktopQuery.addEventListener('change', resetForDesktop);
    } else {
        desktopQuery.addListener(resetForDesktop);
    }
})();
