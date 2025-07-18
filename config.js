// API configuration
export const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://protfolio-production-b6e7.up.railway.app'  // Replace with your Railway URL
  : 'http://localhost:5000';  // Local development

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/api/contact`,
};
