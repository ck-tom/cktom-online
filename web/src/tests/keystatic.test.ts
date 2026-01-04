import { describe, it, expect } from 'vitest';
import config from '../keystatic.config';

describe('Keystatic Configuration', () => {
    it('should have a local storage kind', () => {
        expect(config.storage.kind).toBe('local');
    });

    it('should have a "blog" collection', () => {
        expect(config.collections).toHaveProperty('blog');
    });

    it('should have a "projects" collection', () => {
        expect(config.collections).toHaveProperty('projects');
    });

    it('should have a "homepage" singleton', () => {
        expect(config.singletons).toHaveProperty('homepage');
    });
});
