/**
 * An array of routes that are public
 * these do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ['/', '/auth/new-verification'];

/**
 * An array of routes that are used to autheticate the user
 * @type {string[]}
 */
export const authRoutes = ['/auth/login', '/auth/register', '/auth/error'];

export const apiAuthPrefix = '/api/auth';

export const DEFAULT_LOGIN_REDIRECT = '/settings';
