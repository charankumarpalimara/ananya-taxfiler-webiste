import { API_BASE_URL } from '../config/api';

const getAuthHeaders = () => {
  if (typeof window === 'undefined') return {};
  const token = sessionStorage.getItem('user_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// 1. Auth & General User
export const userRegister = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return await res.json();
};

export const loginUser = async (email, password) => {
  try {
    const res = await fetch(`${API_BASE_URL}/v1/user/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn('v1 user login failed, trying fallback:', e);
  }

  const fallback = await fetch(`${API_BASE_URL}/auth/user/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return await fallback.json();
};

export const userConsultation = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/consultation/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return await res.json();
};

// 2. User Profile
export const fetchUserProfile = async () => {
  if (typeof window === 'undefined') return null;
  const token = sessionStorage.getItem('user_token');
  if (!token) return null;

  try {
    const res = await fetch(`${API_BASE_URL}/v1/user/profile`, {
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      },
    });
    if (res.ok) return await res.json();
  } catch (e) {
    console.warn('v1 profile fetch failed, trying fallback:', e);
  }

  const resFallback = await fetch(`${API_BASE_URL}/auth/me`, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeaders(),
    },
  });
  if (!resFallback.ok) throw new Error('Token expired or invalid');
  return await resFallback.json();
};

export const updateUserProfile = async (formData) => {
  const isFormData = formData instanceof FormData;
  const res = await fetch(`${API_BASE_URL}/v1/user/profile/update`, {
    method: 'PUT',
    headers: {
      ...getAuthHeaders(),
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    },
    body: isFormData ? formData : JSON.stringify(formData),
  });
  return await res.json();
};

// 3. Taxpayer & Account Information
export const saveTaxpayerProfile = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/taxpayer/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getTaxpayerProfile = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/taxpayer/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const saveSpouseDetails = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/spouselist/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getSpouseDetails = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/spouselist/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const saveAddressDetails = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/address/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getAddressDetails = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/address/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const saveContactDetails = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/contact/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getContactDetails = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/contact/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const saveIdentityVerification = async (formDataOrObj) => {
  const isFormData = formDataOrObj instanceof FormData;
  const res = await fetch(`${API_BASE_URL}/v1/user/identity/create`, {
    method: 'POST',
    headers: {
      ...getAuthHeaders(),
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    },
    body: isFormData ? formDataOrObj : JSON.stringify(formDataOrObj),
  });
  return await res.json();
};

export const getIdentityVerification = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/identity/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const saveBankDetails = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/bank/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getBankDetails = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/bank/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const saveDependents = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/dependent/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getDependents = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/dependent/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const updateDependent = async (id, data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/dependent/update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const deleteDependent = async (id) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/dependent/delete/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

// 4. Document Management
export const uploadDocument = async (formDataOrObj) => {
  const isFormData = formDataOrObj instanceof FormData;
  const res = await fetch(`${API_BASE_URL}/v1/user/document/upload`, {
    method: 'POST',
    headers: {
      ...getAuthHeaders(),
      ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
    },
    body: isFormData ? formDataOrObj : JSON.stringify(formDataOrObj),
  });
  return await res.json();
};

export const getDocuments = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/document/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const deleteDocument = async (id) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/document/delete/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

// 5. Consultation Scheduling
export const getAvailableSchedules = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/schedule/available`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const getMyAppointments = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/schedule/my`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

export const bookSchedule = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/schedule/book`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const requestSchedule = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/schedule/request`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

// 6. Referral Program
export const createReferral = async (data) => {
  const res = await fetch(`${API_BASE_URL}/v1/user/referral/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const getReferrals = async () => {
  const res = await fetch(`${API_BASE_URL}/v1/user/referral/list`, {
    headers: { 'Content-Type': 'application/json', ...getAuthHeaders() },
  });
  return await res.json();
};

// Submissions & Registrations legacy helpers
export const createSubmission = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/submissions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return await res.json();
};

export const createRegistration = async (payload) => {
  const res = await fetch(`${API_BASE_URL}/registrations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return await res.json();
};

export const fetchUserSubmissions = async () => {
  const token = typeof window !== 'undefined' ? sessionStorage.getItem('user_token') : null;
  const res = await fetch(`${API_BASE_URL}/submissions`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  return await res.json();
};
