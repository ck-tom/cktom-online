export function setupMenu(menuBtn: HTMLElement, mobileMenu: HTMLElement) {
    // Initial state check (optional, but good for robustness)
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }

    menuBtn.addEventListener('click', () => {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';

        // Toggle state
        const newExpanded = !expanded;

        // Update ARIA attribute
        menuBtn.setAttribute('aria-expanded', String(newExpanded));

        // Toggle visibility class
        if (newExpanded) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    });
}
