import axios from 'axios';

const FINANCE_SERVICE_URL = process.env.FINANCE_SERVICE_URL || 'http://localhost:4002';
const PROPERTY_SERVICE_URL = process.env.PROPERTY_SERVICE_URL || 'http://localhost:4003';

export const fetchTransactions = async (token: string) => {
  const response = await axios.get(`${FINANCE_SERVICE_URL}/api/finance/transactions`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const fetchAccounts = async (token: string) => {
  const response = await axios.get(`${FINANCE_SERVICE_URL}/api/finance/accounts`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const fetchAssets = async (token: string) => {
  const response = await axios.get(`${PROPERTY_SERVICE_URL}/api/property/assets`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const fetchLiabilities = async (token: string) => {
  const response = await axios.get(`${PROPERTY_SERVICE_URL}/api/property/liabilities`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};

export const fetchRentalAgreements = async (token: string) => {
  const response = await axios.get(`${PROPERTY_SERVICE_URL}/api/property/rental`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
