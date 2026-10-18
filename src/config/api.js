/**
 * Centralized API Configuration for Website Application.
 * Single source of truth for Express Backend API URL.
 */
export const API_BASE_URL = 
  (typeof process !== 'undefined' && (process.env.NEXT_PUBLIC_API_URL || process.env.VITE_API_URL)) 
  || 'https://api.nexgenaccountinggroup.com/api';
