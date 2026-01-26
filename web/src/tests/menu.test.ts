/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, beforeEach } from 'vitest';
import { setupMenu } from '../scripts/menu';

describe('Mobile Menu Logic', () => {
    let btn: HTMLElement;
    let menu: HTMLElement;

    beforeEach(() => {
        // Create fresh DOM elements for each test
        btn = document.createElement('button');
        menu = document.createElement('div');

        // Initial state similar to HTML
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.add('hidden');

        // Setup logic
        setupMenu(btn, menu);
    });

    it('should show menu when clicked', () => {
        // Initial check
        expect(menu.classList.contains('hidden')).toBe(true);
        expect(btn.getAttribute('aria-expanded')).toBe('false');

        // Simulate click
        btn.click();

        // Expect menu to be visible
        expect(menu.classList.contains('hidden')).toBe(false);
        expect(btn.getAttribute('aria-expanded')).toBe('true');
    });

    it('should hide menu when clicked again', () => {
        // Open it first
        btn.click();
        expect(menu.classList.contains('hidden')).toBe(false);

        // Click again
        btn.click();

        // Expect menu to be hidden
        expect(menu.classList.contains('hidden')).toBe(true);
        expect(btn.getAttribute('aria-expanded')).toBe('false');
    });

    it('should sync initial state if aria-expanded is true', () => {
        const preOpenBtn = document.createElement('button');
        const preOpenMenu = document.createElement('div');

        preOpenBtn.setAttribute('aria-expanded', 'true');
        // Initial menu class might be hidden in HTML, but script should sync it
        preOpenMenu.classList.add('hidden');

        setupMenu(preOpenBtn, preOpenMenu);

        // Should remove hidden class immediately
        expect(preOpenMenu.classList.contains('hidden')).toBe(false);
    });
});
